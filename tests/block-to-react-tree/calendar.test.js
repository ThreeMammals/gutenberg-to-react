const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core calendar', () => {
    const expected = [
      {
        type: 'core/calendar',
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
      blockName: 'core/calendar',
      attrs: { },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
