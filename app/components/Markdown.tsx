import type { RenderableTreeNode } from '@markdoc/markdoc';
import Markdoc from '@markdoc/markdoc';
import * as React from "react";
import { Heading } from './markdownElements/heading';

interface Props { 
    content: RenderableTreeNode;
}

export function Markdown({ content }: Props) {
    const reactNode = Markdoc.renderers.react(content, React, {

        components: {
            Heading,
        }

      });
  return <>{reactNode}</>;
}