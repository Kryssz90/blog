import Markdoc, { Config, RenderableTreeNode } from '@markdoc/markdoc';
import fs from 'fs/promises';
import yaml from 'js-yaml';


export type ActionResult<State, ResponseBody> = [status: number, state: State, resData: ResponseBody | undefined];

export type MarkdocFile<FrontMatter> = {
  slug: string;
  content: RenderableTreeNode;
  markdown: string;
  frontmatter: FrontMatter;
};


export enum FetchMarkdownFileResState {
  fileNotFound = 'file_not_found',
  internalError = 'internal_error',
  success = 'success',
}

const getContentPath = (url: string, slug: string): string => {
  let fileName = slug;
  if (slug === '') {
    fileName = 'index';
  }
  return `${url}/${fileName}.md`;
};

export type BlogArticleFrontmatter = {
  date: string;
  title: string;
  description: string;
  categories?: string[];
  imageUrl?: string;
  imageAltText?: string;
  slug?: string;
};

export function validateFrontMatter(attributes: unknown): attributes is BlogArticleFrontmatter {
  return (
    !!attributes &&
    typeof attributes !== 'function' &&
    typeof attributes === 'object' &&
    typeof (attributes as any)['title'] === 'string' &&
    typeof (attributes as any)['description'] === 'string' &&
    typeof (attributes as any)['date'] === 'object'
  );
}

export async function fetchBlogFilesFrontMatters<FrontMatter extends {
  title: string;
  date: string;
  description: string;
  slug: string;
}>(
  path: string,
): Promise<ActionResult<FetchMarkdownFileResState, FrontMatter[]>> {

  const files = await fs.readdir(path);
  if (!files) {
    return [500, FetchMarkdownFileResState.fileNotFound, undefined];
  }

  const frontMatters: FrontMatter[] = [];
  for (const file of files) {
    const fileContent = await fs.readFile(`${path}/${file}`, 'utf8');
    const ast = Markdoc.parse(fileContent);
    const frontmatter = ast.attributes.frontmatter ? yaml.load(ast.attributes.frontmatter) : {};
    try {
      if (!validateFrontMatter(frontmatter)) {
        throw new Error(`File ${file} is missing frontmatter information`);
      }
    } catch (error: any) {
      console.error(error);
      return [500, FetchMarkdownFileResState.internalError, undefined];
    }
    frontmatter.slug = file.replace('.md', '');
    frontMatters.push(frontmatter as FrontMatter);
  }

  frontMatters.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return [200, FetchMarkdownFileResState.success, frontMatters];

}

export async function fetchMarkdownFileFs<FrontMatter>(
  path: string,
  slug: string,
): Promise<ActionResult<FetchMarkdownFileResState, MarkdocFile<FrontMatter>>> {
  const file = await fs.readFile(getContentPath(path, slug), 'utf8');
  if (!file) {
    return [500, FetchMarkdownFileResState.fileNotFound, undefined];
  }
  const markdown = file.toString();
  const ast = Markdoc.parse(markdown);
  const frontmatter = ast.attributes.frontmatter ? yaml.load(ast.attributes.frontmatter) : {};
  try {
    if (!validateFrontMatter(frontmatter)) {
      throw new Error(`File ${slug} is missing frontmatter information`);
    }
  } catch (error: any) {
    console.error(error);
    return [500, FetchMarkdownFileResState.internalError, undefined];
  }

  const content = Markdoc.transform(ast, config);
  return [
    200,
    FetchMarkdownFileResState.success,
    {
      slug,
      frontmatter: frontmatter as FrontMatter,
      content,
      markdown,
    },
  ];
}

const config = {
  nodes: {
    heading: {
      render: "Heading",
      attributes: {
        level: { type: "Number", required: true, default: 1 },
      }
    },
    list: {
      render: "List",
      attributes: {
        ordered: { type: "Boolean", required: false, default: false },
      }
    },
    item: {
      render: "ListItem",
    },
    paragraph: {
      render: "Paragraph",
    },
    fence: {
      render: "Fence",
      attributes: {
        language: {
          type: "String", required: false, default: ""
        },
        content: {
          type: "String", required: false, default: ""
        }
      }
    },
    code: {
      render: "Code",
      attributes: {
        content: {
          type: "String", required: false, default: ""
        }
      }
    }
  }

} as Config;