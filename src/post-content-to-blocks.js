const { parse } = require('@wordpress/block-serialization-default-parser');

const postContentToBlocks = postContent => parse(postContent);

module.exports.postContentToBlocks = postContentToBlocks;
