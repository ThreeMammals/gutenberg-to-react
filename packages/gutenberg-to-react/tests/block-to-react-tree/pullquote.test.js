const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core pullquote', () => {
    const expected = [
      {
        type: 'core/pullquote',
        props: {
          style: {
            'border-color': '#0073a8',
          },
          mainColor: 'primary',
          textColor: 'secondary',
          className: 'is-style-default',
          children: [
            [
              {
                type: 'figure',
                props: {
                  style: {
                    'border-color': '#0073a8',
                  },
                  mainColor: 'primary',
                  textColor: 'secondary',
                  className: 'wp-block-pullquote is-style-default',
                  children: [
                    {
                      type: 'blockquote',
                      props: {
                        className: 'has-text-color has-secondary-color',
                        style: {},
                        children: [
                          {
                            type: 'p',
                            props: {
                              className: null,
                              style: {},
                              children: ['what is a pull quote?'],
                            },
                            $$typeof: Symbol.for('react.element'),
                            ref: null,
                          },
                          {
                            type: 'cite',
                            props: {
                              className: null,
                              style: {},
                              children: ['This is a citation'],
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
        blockName: 'core/pullquote',
        attrs: {
          mainColor: 'primary',
          textColor: 'secondary',
          className: 'is-style-default',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-pullquote is-style-default" style="border-color:#0073a8"><blockquote class="has-text-color has-secondary-color"><p>what is a pull quote?</p><cite>This is a citation</cite></blockquote></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-pullquote is-style-default" style="border-color:#0073a8"><blockquote class="has-text-color has-secondary-color"><p>what is a pull quote?</p><cite>This is a citation</cite></blockquote></figure>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
