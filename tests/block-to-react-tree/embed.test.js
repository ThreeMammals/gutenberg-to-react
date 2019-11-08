const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embed', () => {
    const expected = [{
      type: 'core-embed/wordpress',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments',
        type: 'wp-embed',
        providerNameSlug: 'gfycat',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments',
            type: 'wp-embed',
            providerNameSlug: 'gfycat',
            className: 'wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-gfycat',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = [{
      blockName: 'core-embed/wordpress',
      attrs:
     {
       url: 'https://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments',
       type: 'wp-embed',
       providerNameSlug: 'gfycat',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-gfycat"><div class="wp-block-embed__wrapper">\nhttps://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-gfycat"><div class="wp-block-embed__wrapper">\nhttps://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
