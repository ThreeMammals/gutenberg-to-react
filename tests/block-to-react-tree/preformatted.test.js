const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core preformatted', () => {
    const expected = [
      {
        type: 'core/preformatted',
        props: {
          style: {},
          className: 'wp-block-preformatted',
          children: [
            [
              {
                type: 'pre',
                props: {
                  style: {},
                  className: 'wp-block-preformatted',
                  children: ['I have no idea what this is'],
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
        blockName: 'core/preformatted',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<pre class="wp-block-preformatted">I have no idea what this is</pre>\n',
        innerContent: [
          '\n<pre class="wp-block-preformatted">I have no idea what this is</pre>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
