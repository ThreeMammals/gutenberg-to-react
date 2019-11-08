const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core page break', () => {
    const expected = [
      {
        type: 'core/nextpage',
        props: {
          style: {},
          className: null,
          children: [],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/nextpage',
      attrs: {},
      innerBlocks: [],
      innerHTML: '\n<!--nextpage-->\n',
      innerContent: ['\n<!--nextpage-->\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
