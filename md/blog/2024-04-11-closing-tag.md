---
title: Selfclosing tags
description: Do we need a trailing slash for the selfclosing tags?
date: 2024-04-11
---
# Selfclosing tags

When writing HTML, there are generally two king of tags:
- One that needs opening and closing tags, like `<div></div>`
- One that is selfclosing, like `<img />`

This post is about the second one, the selfclosing tags. Do we need a trailing slash for them?

## How does it work?

You can decide if you'd like to use the trailing slash or not. Both are valid.

With trailing slash:

```html
<div>
    <hr />
</div>
```

Without trailing slash:

```html
<div>
    <hr>
</div>
```