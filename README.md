# Gutenberg to React

This package allows you to convert Wordpress Gutenbergs post_content field on the post object to a ReactJs tree.

[![CircleCI](https://circleci.com/gh/ThreeMammals/gutenberg-to-react/tree/master.svg?style=svg)](https://circleci.com/gh/ThreeMammals/gutenberg-to-react/tree/master)

## Why

Madess.

## Install

`npm install @threemammals/gutenberg-to-react`

## How To

```javascript
const { gutenbergToReact } = require('@threemammals/gutenberg-to-react');

// example of Wordpress Gutenberg post_content from the post object
const input = '<!-- wp:paragraph -->\n<p>text <br></p>\n<!-- /wp:paragraph -->';

// parse to ReactJs tree
const result = gutenbergToReact(input);

// check out your ReactJs tree?!?!?
console.log(result);
[
  {
    type: 'core/paragraph',
    ref: null,
    '$$typeof': Symbol(react.element),
    props: { style: {}, className: null, children: [Array] }
  }
]
```