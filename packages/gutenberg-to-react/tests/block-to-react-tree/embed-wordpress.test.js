const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded wordpress', () => {
    const expected = [{
      type: 'core-embed/wordpress',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/',
        type: 'wp-embed',
        providerNameSlug: 'wordpress-news',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/',
            type: 'wp-embed',
            providerNameSlug: 'wordpress-news',
            className: 'wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-wordpress-news',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/\n'],
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
       url: 'https://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/',
       type: 'wp-embed',
       providerNameSlug: 'wordpress-news',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-wordpress-news"><div class="wp-block-embed__wrapper">\nhttps://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-wordpress-news"><div class="wp-block-embed__wrapper">\nhttps://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
