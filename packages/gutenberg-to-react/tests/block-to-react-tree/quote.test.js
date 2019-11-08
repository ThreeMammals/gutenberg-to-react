const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core quote', () => {
    const expected = [
      {
        type: 'core/quote',
        props: {
          style: {},
          className: 'wp-block-quote',
          children: [
            [
              {
                type: 'blockquote',
                props: {
                  style: {},
                  className: 'wp-block-quote',
                  children: [
                    {
                      type: 'p',
                      props: {
                        style: {},
                        className: null,
                        children: ['This is a quote'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'cite',
                      props: {
                        style: {},
                        className: null,
                        children: ['and here is the citation'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
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
        blockName: 'core/quote',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<blockquote class="wp-block-quote"><p>This is a quote</p><cite>and here is the citation</cite></blockquote>\n',
        innerContent: [
          '\n<blockquote class="wp-block-quote"><p>This is a quote</p><cite>and here is the citation</cite></blockquote>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
