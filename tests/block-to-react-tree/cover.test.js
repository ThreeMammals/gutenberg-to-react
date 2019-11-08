const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core cover', () => {
    const expected = [
      {
        type: 'core/cover',
        props: {
          url:
            'http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png',
          id: 105,
          overlayColor: 'dark-gray',
          style: {
            'background-image':
              'url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)',
          },
          className:
            'wp-block-cover has-dark-gray-background-color has-background-dim',
          children: [
            [
              {
                type: 'div',
                props: {
                  url:
                    'http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png',
                  id: 105,
                  overlayColor: 'dark-gray',
                  style: {
                    'background-image':
                      'url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)',
                  },
                  className:
                    'wp-block-cover has-dark-gray-background-color has-background-dim',
                  children: [
                    {
                      type: 'p',
                      props: {
                        style: {},
                        className: 'wp-block-cover-text',
                        children: ['some title'],
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
        blockName: 'core/cover',
        attrs: {
          url:
            'http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png',
          id: 105,
          overlayColor: 'dark-gray',
        },
        innerBlocks: [],
        innerHTML:
          '\n<div class="wp-block-cover has-dark-gray-background-color has-background-dim" style="background-image:url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)"><p class="wp-block-cover-text">some title</p></div>\n',
        innerContent: [
          '\n<div class="wp-block-cover has-dark-gray-background-color has-background-dim" style="background-image:url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)"><p class="wp-block-cover-text">some title</p></div>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
