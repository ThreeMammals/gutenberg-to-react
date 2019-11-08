const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core categories', () => {
    const expected = [
      {
        type: 'core/categories',
        props: {
          showPostCounts: true,
          displayAsDropdown: true,
          showHierarchy: true,
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
      blockName: 'core/categories',
      attrs: { showPostCounts: true, displayAsDropdown: true, showHierarchy: true },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
