const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core latest posts', () => {
    const expected = [
      {
        type: 'core/latest-posts',
        props: {
          postsToShow: 6,
          displayPostDate: true,
          order: 'asc',
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
      blockName: 'core/latest-posts',
      attrs: { postsToShow: 6, displayPostDate: true, order: 'asc' },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
