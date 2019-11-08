const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core media & text', () => {
    const expected = [
      {
        type: 'core/media-text',
        props: {
          style: {},
          className:
            'wp-block-media-text alignwide has-light-gray-background-color is-stacked-on-mobile',
          backgroundColor: 'light-gray',
          mediaId: 48,
          mediaType: 'image',
          isStackedOnMobile: true,
          children: [[
            {
              type: 'div',
              props: {
                style: {},
                backgroundColor: 'light-gray',
                className: 'wp-block-media-text alignwide has-light-gray-background-color is-stacked-on-mobile',
                isStackedOnMobile: true,
                mediaId: 48,
                mediaType: 'image',
                children: [
                  {
                    type: 'figure',
                    props: {
                      style: {},
                      className: 'wp-block-media-text__media',
                      children: [{
                        type: 'img',
                        props: {
                          alt: 'alt text here',
                          className: 'wp-image-48',
                          src: 'https://localhost/admin/wp-content/uploads/2019/06/ocelot_logo.png',
                          style: {},
                          // todo should be empty array?
                          children: null,
                        },
                        $$typeof: Symbol.for('react.element'),
                        ref: null,
                      }],
                    },
                    $$typeof: Symbol.for('react.element'),
                    ref: null,
                  },
                  {
                    type: 'div',
                    props: {
                      className: 'wp-block-media-text__content',
                      style: {},
                      children: [[{
                        type: 'core/paragraph',
                        props: {
                          className: 'has-large-font-size',
                          fontSize: 'large',
                          placeholder: 'Content…',
                          style: {},
                          children: [[{
                            type: 'p',
                            props: {
                              className: 'has-large-font-size',
                              fontSize: 'large',
                              placeholder: 'Content…',
                              style: {},
                              children: ['some content'],
                            },
                            $$typeof: Symbol.for('react.element'),
                            ref: null,
                          }]],
                        },
                        $$typeof: Symbol.for('react.element'),
                        ref: null,
                      }]],
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

    const input = [{
      blockName: 'core/media-text',
      attrs:
     {
       backgroundColor: 'light-gray',
       mediaId: 48,
       mediaType: 'image',
       isStackedOnMobile: true,
     },
      innerBlocks: [{
        blockName: 'core/paragraph',
        attrs: { placeholder: 'Content…', fontSize: 'large' },
        innerBlocks: [],
        innerHTML: '\n<p class="has-large-font-size">some content</p>\n',
        innerContent: ['\n<p class="has-large-font-size">some content</p>\n'],
      }],
      innerHTML:
     '\n<div class="wp-block-media-text alignwide has-light-gray-background-color is-stacked-on-mobile"><figure class="wp-block-media-text__media"><img src="https://localhost/admin/wp-content/uploads/2019/06/ocelot_logo.png" alt="alt text here" class="wp-image-48"/></figure><div class="wp-block-media-text__content"></div></div>\n',
      innerContent:
     ['\n<div class="wp-block-media-text alignwide has-light-gray-background-color is-stacked-on-mobile"><figure class="wp-block-media-text__media"><img src="https://localhost/admin/wp-content/uploads/2019/06/ocelot_logo.png" alt="alt text here" class="wp-image-48"/></figure><div class="wp-block-media-text__content">',
       null,
       '</div></div>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
