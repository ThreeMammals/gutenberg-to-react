const cheerio = require('cheerio');
const { parseInlineStyles } = require('./html-style-parser');

const returnText = ['p', 'cite', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const returnVoid = ['img', 'hr'];

const dontMap = ['\n \t', '\n'];

const validNode = (node) => {
  if (node.type === 'text' && dontMap.includes(node.data)) {
    return false;
  }
  return true;
};

const parseChildren = (node) => {
  // if the node is in teh list and has one child and it is name === text
  if (
    returnText.includes(node.name)
    && node.children.length === 1
    && node.children[0].type === 'text'
  ) {
    return node.children.map(childNode => childNode.data);
  }

  if (returnVoid.includes(node.name)) {
    return null;
  }

  if (node.children) {
    return (
      node.children
        .filter(validNode)
        // dont care its recursion..
        // eslint-disable-next-line no-use-before-define
        .map(childNode => cheerioToReact(childNode))
    );
  }

  return null;
};

const cheerioToReact = (node) => {
  // just bail out and return the text if the type of the node is text
  // it is just a string and cannot be parsed into react node
  if (node.type === 'text') {
    return node.data;
  }

  // set up some shit, todo can we just instanciate this when we need it?
  let props = null;
  let className = null;
  let style = {};
  let type = node.name;

  const children = parseChildren(node);

  // gansta styles and props hacking, todo can this be better?
  if (node.attribs !== undefined) {
    const { class: name, style: styles, ...otherProps } = node.attribs;
    props = otherProps;
    className = name;

    if (styles !== undefined) {
      style = parseInlineStyles(styles);
    }
  }

  if (node.type === 'comment') {
    type = 'hr';
  }

  // todo sort this hack out?
  if (node.name === 'br') {
    return {
      type,
      props: {
        ...props,
        style,
        className: className === undefined ? null : className,
      },
      $$typeof: Symbol.for('react.element'),
      ref: null,
    };
  }

  return {
    type,
    props: {
      ...props,
      style,
      className: className === undefined ? null : className,
      children,
    },
    $$typeof: Symbol.for('react.element'),
    ref: null,
  };
};

const innerContentToReactTree = (innerContent) => {
  const $ = cheerio.load(innerContent);
  const everything = $('*');
  const nodes = everything.find('body').children('*');
  const tree = nodes.map((index, node) => cheerioToReact(node)).get();
  // todo - not sure about this but there shouldn only be one entrypoint in innerContent
  // might need a nicer way to do the cheerio stuff to show this properly
  return tree;
};

module.exports.innerContentToReactTree = innerContentToReactTree;
