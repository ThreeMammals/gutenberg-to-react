const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core tag cloud', () => {
    const expected = [
      {
        type: 'core/tag-cloud',
        props: {
          taxonomy: 'category',
          showTagCounts: true,
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
      blockName: 'core/tag-cloud',
      attrs:
     {
       taxonomy: 'category', showTagCounts: true,
     },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
