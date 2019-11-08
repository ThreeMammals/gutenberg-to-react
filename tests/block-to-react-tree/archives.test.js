const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core archives', () => {
    const expected = [
      {
        type: 'core/archives',
        props: {
          showPostCounts: true,
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
      blockName: 'core/archives',
      attrs: { showPostCounts: true },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
