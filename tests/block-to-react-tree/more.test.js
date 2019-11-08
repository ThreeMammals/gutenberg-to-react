const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core more', () => {
    const expected = [
      {
        type: 'core/more',
        props: {
          style: {},
          className: null,
          customText: 'READ SOME MORE',
          children: ['READ SOME MORE'],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/more',
      attrs: { customText: 'READ SOME MORE' },
      innerBlocks: [],
      innerHTML: '\n<!--more READ SOME MORE-->\n',
      innerContent: ['\n<!--more READ SOME MORE-->\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
