const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core audio', () => {
    const expected = [
      {
        type: 'core/audio',
        props: {
          id: 60,
          style: {},
          className: 'wp-block-audio',
          children: [
            [
              {
                type: 'figure',
                props: {
                  id: 60,
                  style: {},
                  className: 'wp-block-audio',
                  children: [
                    {
                      type: 'audio',
                      props: {
                        src:
                          'https://localhost/admin/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.mp3',
                        style: {},
                        controls: '',
                        className: null,
                        children: [],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'figcaption',
                      props: {
                        style: {},
                        className: null,
                        children: ['audio caption'],
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
        blockName: 'core/audio',
        attrs: { id: 60 },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-audio"><audio controls src="https://localhost/admin/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.mp3"></audio><figcaption>audio caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-audio"><audio controls src="https://localhost/admin/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.mp3"></audio><figcaption>audio caption</figcaption></figure>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
