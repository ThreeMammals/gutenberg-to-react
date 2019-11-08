const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded wordpress.tv', () => {
    const expected = [{
      type: 'core-embed/wordpress-tv',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/',
        type: 'video',
        providerNameSlug: '',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/',
            type: 'video',
            providerNameSlug: '',
            className: 'wp-block-embed-wordpress-tv wp-block-embed is-type-video wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/\n'],
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
      blockName: 'core-embed/wordpress-tv',
      attrs:
     {
       url: 'https://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/',
       type: 'video',
       providerNameSlug: '',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-wordpress-tv wp-block-embed is-type-video wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-wordpress-tv wp-block-embed is-type-video wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
