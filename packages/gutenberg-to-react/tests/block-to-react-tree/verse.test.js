const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core verse', () => {
    const expected = [
      {
        type: 'core/verse',
        props: {
          style: {},
          className: 'wp-block-verse',
          children: [
            [
              {
                type: 'pre',
                props: {
                  style: {},
                  className: 'wp-block-verse',
                  children: [
                    'I have no idea what a verse is apparently its poetry',
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/verse',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<pre class="wp-block-verse">I have no idea what a verse is apparently its poetry</pre>\n',
        innerContent: [
          '\n<pre class="wp-block-verse">I have no idea what a verse is apparently its poetry</pre>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
