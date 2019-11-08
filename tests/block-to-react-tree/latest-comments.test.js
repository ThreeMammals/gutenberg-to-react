const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core latest comments', () => {
    const expected = [
      {
        type: 'core/latest-comments',
        props: {
          style: {
          },
          className: null,
          children: [],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/latest-comments',
      attrs: { },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
