const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core image', () => {
    const expected = [
      {
        type: 'core/image',
        props: {
          id: 90,
          style: {},
          className: 'wp-block-image',
          children: [
            [
              {
                type: 'figure',
                props: {
                  id: 90,
                  style: {},
                  className: 'wp-block-image',
                  children: [
                    {
                      type: 'img',
                      props: {
                        src:
                          'http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png',
                        alt: '',
                        style: {},
                        className: 'wp-image-90',
                        children: null,
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
        attrs: { id: 90 },
        blockName: 'core/image',
        innerBlocks: [],
        innerContent: [
          '<figure class="wp-block-image"><img src="http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png" alt="" class="wp-image-90"/></figure>',
        ],
        innerHTML:
          '<figure class="wp-block-image"><img src="http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png" alt="" class="wp-image-90"/></figure>',
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
