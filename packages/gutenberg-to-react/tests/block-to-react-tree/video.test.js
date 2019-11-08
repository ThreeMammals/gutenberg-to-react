const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core video', () => {
    const expected = [
      {
        type: 'core/video',
        props: {
          id: 67,
          style: {},
          className: 'wp-block-video',
          children: [
            [
              {
                type: 'figure',
                props: {
                  id: 67,
                  style: {},
                  className: 'wp-block-video',
                  children: [
                    {
                      type: 'video',
                      props: {
                        controls: '',
                        className: null,
                        style: {},
                        src:
                          'https://localhost/admin/wp-content/uploads/2019/07/test_for_pushy_2.mov',
                        children: [],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'figcaption',
                      props: {
                        className: null,
                        style: {},
                        children: ['caption'],
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
        blockName: 'core/video',
        attrs: { id: 67 },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-video"><video controls src="https://localhost/admin/wp-content/uploads/2019/07/test_for_pushy_2.mov"></video><figcaption>caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-video"><video controls src="https://localhost/admin/wp-content/uploads/2019/07/test_for_pushy_2.mov"></video><figcaption>caption</figcaption></figure>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
