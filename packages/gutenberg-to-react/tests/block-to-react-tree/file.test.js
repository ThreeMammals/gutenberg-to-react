const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core file', () => {
    const expected = [
      {
        type: 'core/file',
        props: {
          id: 63,
          style: {},
          href:
            'https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip',
          className: 'wp-block-file',
          children: [
            [
              {
                type: 'div',
                props: {
                  id: 63,
                  style: {},
                  href:
                    'https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip',
                  className: 'wp-block-file',
                  children: [
                    {
                      type: 'a',
                      props: {
                        className: null,
                        style: {},
                        href:
                          'https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip',
                        children: ['pushy-0.0.12'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'a',
                      props: {
                        className: 'wp-block-file__button',
                        style: {},
                        download: '',
                        href:
                          'https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip',
                        children: ['Download'],
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
        blockName: 'core/file',
        attrs: {
          id: 63,
          href:
            'https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip',
        },
        innerBlocks: [],
        innerHTML:
          '\n<div class="wp-block-file"><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip">pushy-0.0.12</a><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip" class="wp-block-file__button" download>Download</a></div>\n',
        innerContent: [
          '\n<div class="wp-block-file"><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip">pushy-0.0.12</a><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip" class="wp-block-file__button" download>Download</a></div>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
