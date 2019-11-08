const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core seperate', () => {
    const expected = [
      {
        type: 'core/separator',
        props: {
          style: {},
          className: 'is-style-dots',
          children: [[{
            type: 'hr',
            props: {
              style: {},
              className: 'wp-block-separator is-style-dots',
              // todo should not be null
              children: null,
            },
            $$typeof: Symbol.for('react.element'),
            ref: null,
          }]],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/separator',
      attrs: { className: 'is-style-dots' },
      innerBlocks: [],
      innerHTML: '\n<hr class="wp-block-separator is-style-dots"/>\n',
      innerContent: ['\n<hr class="wp-block-separator is-style-dots"/>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
