const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core button', () => {
    const expected = [
      {
        type: 'core/button',
        props: {
          style: {},
          backgroundColor: 'primary',
          textColor: 'white',
          className: 'wp-block-button',
          children: [
            [
              {
                type: 'div',
                props: {
                  style: {},
                  backgroundColor: 'primary',
                  textColor: 'white',
                  className: 'wp-block-button',
                  children: [
                    {
                      type: 'a',
                      props: {
                        className:
                          'wp-block-button__link has-text-color has-white-color has-background has-primary-background-color',
                        style: {},
                        href: 'http://www.bbc.co.uk',
                        children: ['button text'],
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
        blockName: 'core/button',
        attrs: { backgroundColor: 'primary', textColor: 'white' },
        innerBlocks: [],
        innerHTML:
          '\n<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-white-color has-background has-primary-background-color" href="http://www.bbc.co.uk">button text</a></div>\n',
        innerContent: [
          '\n<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-white-color has-background has-primary-background-color" href="http://www.bbc.co.uk">button text</a></div>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
