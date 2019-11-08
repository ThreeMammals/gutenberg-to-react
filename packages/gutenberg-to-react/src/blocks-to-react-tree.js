const { parseShortCode } = require('./parse-shortcode');
const { innerContentToReactTree } = require('./html-to-react-tree');
const { parseInlineStyles } = require('./html-style-parser');

// eslint-disable-next-line no-extend-native
String.prototype.replaceAll = (search, replacement) => {
  const target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

const hasInnerBlocks = block => block.innerBlocks.length > 0;

const parsePropFromHtml = (html, startIndex, starter, ender) => {
  const start = html.indexOf(starter, startIndex) + starter.length;
  const finish = html.indexOf(ender, start);
  const propValue = html.substring(start, finish);
  return propValue;
};

const parseClassNameFromBlock = (block) => {
  if (block.attrs.className !== undefined) {
    return block.attrs.className;
  }
  // get the classname
  if (block.innerHTML.includes('class="')) {
    return parsePropFromHtml(block.innerHTML, 0, 'class="', '"');
  }
  return null;
};

const parseStyleFromHtml = html => parsePropFromHtml(html, 0, 'style="', '"');

const parseStyle = (block) => {
  // get the styles
  if (block.innerHTML.includes('style="')) {
    const styles = parseStyleFromHtml(block.innerHTML);

    return parseInlineStyles(styles);
  }

  return {};
};

const parseInnerContent = block => block.innerContent
  .map((innerContent) => {
    if (innerContent === null) {
      return innerContent;
    }
    return innerContentToReactTree(innerContent);
  });

const parseAttrs = (block) => {
  const { attrs } = block;

  // for some reason wordpress doesnt set a level for h2?
  if (block.blockName === 'core/heading' && attrs.level === undefined) {
    attrs.level = 2;
  }

  return attrs;
};

const parseBlockType = (block) => {
  if (block.blockName === undefined || block.blockName === null) {
    return 'core/classic';
  }
  return block.blockName;
};

const parseBlockToReact = (block) => {
  const type = parseBlockType(block);
  // just get any gutenberg attrs straight out
  const attrs = parseAttrs(block);

  const className = parseClassNameFromBlock(block);

  const style = parseStyle(block);

  let innerBlocks = null;

  if (hasInnerBlocks(block)) {
    innerBlocks = block.innerBlocks.map(innerBlock => parseBlockToReact(innerBlock));
  }

  // and another hack..make this a dictionary
  if (block.blockName === 'core/calendar' || block.blockName === 'core/latest-posts' || block.blockName === 'core/latest-comments' || block.blockName === 'core/archives' || block.blockName === 'core/categories' || block.blockName === 'core/rss' || block.blockName === 'core/search' || block.blockName === 'core/tag-cloud') {
    return {
      type,
      ref: null,
      $$typeof: Symbol.for('react.element'),
      props: {
        ...attrs,
        style: {},
        className: null,
        children: [],
      },
    };
  }

  // another hack to parse the shortcodes
  if (block.blockName === 'core/shortcode') {
    const parsed = block.innerContent.map((innerContent) => {
      const shortcode = parseShortCode(innerContent);
      return {
        type: shortcode.name,
        ref: null,
        $$typeof: Symbol.for('react.element'),
        props: {
          ...shortcode.attributes,
          style: {},
          className: null,
          children: [shortcode.content],
        },
      };
    });

    return {
      type,
      ref: null,
      $$typeof: Symbol.for('react.element'),
      props: {
        ...attrs,
        style: {},
        className: null,
        children: parsed,
      },
    };
  }

  // hack isnt parseable
  if (block.blockName === 'core/more') {
    return {
      type,
      ref: null,
      $$typeof: Symbol.for('react.element'),
      props: {
        ...attrs,
        style,
        className,
        children: [block.attrs.customText],
      },
    };
  }

  // hack isnt parseable
  if (block.blockName === 'core/nextpage') {
    return {
      type,
      ref: null,
      $$typeof: Symbol.for('react.element'),
      props: {
        ...attrs,
        style,
        className,
        children: [],
      },
    };
  }

  // probabaly should not be passing style in here but working it out inside?
  const innerContent = parseInnerContent(block);
  // not sure if this is ideal but basically hack on the gutenberg attrs into props
  innerContent[0][0].props = { ...attrs, ...innerContent[0][0].props };

  // This is a hack because I cant work out the logic to walk the media-text
  // tree and insert the inner block at this position for all cases yet
  if (block.blockName === 'core/media-text') {
    innerContent[0][0].props.children[1].props.children.push(innerBlocks);
  }
  // same hack
  if (block.blockName === 'core/columns') {
    innerContent[0][0].props.children.push(innerBlocks);
  }
  // same hack
  if (block.blockName === 'core/column') {
    innerContent[0][0].props.children.push(innerBlocks);
    return innerContent[0];
  }

  const filtered = innerContent.filter(el => el != null && el.length > 0);

  return {
    type,
    ref: null,
    $$typeof: Symbol.for('react.element'),
    props: {
      ...attrs,
      style,
      className,
      children: filtered,
    },
  };
};

const validBlock = (block) => {
  // only a valid block if it has a name
  // part from classic which doesnt have a block name
  // but we also need to check innerHTML is set
  // last check is some crap gutenberg does inserting empty blocks
  if (!block.blockName && (!block.innerHTML || block.innerHTML === '\n\n')) {
    return false;
  }
  return true;
};

const blocksToReactTree = blocks => blocks
  .filter(validBlock)
  .map(block => parseBlockToReact(block));

module.exports.blocksToReactTree = blocksToReactTree;
