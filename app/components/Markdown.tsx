import type { RenderableTreeNode } from '@markdoc/markdoc';
import Markdoc from '@markdoc/markdoc';
import * as React from "react";
import { Heading } from './markdownElements/heading';
import { List, ListItem } from './markdownElements/list';
import { Paragraph } from './markdownElements/paragraph';
import { Fence } from './markdownElements/fence';
import { Code } from './markdownElements/code';

interface Props { 
    content: RenderableTreeNode;
}

export function Markdown({ content }: Props) {
    const reactNode = Markdoc.renderers.react(content, React, {

        components: {
            Heading,
            List,
            ListItem,
            Paragraph,
            Fence,
            Code,
        }

      });
  return <>{reactNode}</>;
}