const { postContentToBlocks } = require('./post-content-to-blocks');
const { blocksToReactTree } = require('./blocks-to-react-tree');

const gutenbergToReact = (postContent) => {
  const blocks = postContentToBlocks(postContent);
  return blocksToReactTree(blocks);
};

module.exports.gutenbergToReact = gutenbergToReact;
