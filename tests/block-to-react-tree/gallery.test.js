const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core gallery', () => {
    const expected = [
      {
        type: 'core/gallery',
        props: {
          ids: [108, 109, 110, 111],
          style: {},
          className: 'wp-block-gallery columns-3 is-cropped',
          children: [
            [
              {
                type: 'ul',
                props: {
                  ids: [108, 109, 110, 111],
                  style: {},
                  className: 'wp-block-gallery columns-3 is-cropped',
                  children: [
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: 'blocks-gallery-item',
                        children: [
                          {
                            type: 'figure',
                            props: {
                              style: {},
                              className: null,
                              children: [
                                {
                                  type: 'img',
                                  props: {
                                    src:
                                      'http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png',
                                    alt: '',
                                    'data-id': '108',
                                    'data-link':
                                      'http://localhost:8000/?attachment_id=108',
                                    style: {},
                                    className: 'wp-image-108',
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
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: 'blocks-gallery-item',
                        children: [
                          {
                            type: 'figure',
                            props: {
                              style: {},
                              className: null,
                              children: [
                                {
                                  type: 'img',
                                  props: {
                                    src:
                                      'http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png',
                                    alt: '',
                                    'data-id': '109',
                                    'data-link':
                                      'http://localhost:8000/?attachment_id=109',
                                    style: {},
                                    className: 'wp-image-109',
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
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: 'blocks-gallery-item',
                        children: [
                          {
                            type: 'figure',
                            props: {
                              style: {},
                              className: null,
                              children: [
                                {
                                  type: 'img',
                                  props: {
                                    src:
                                      'http://localhost:8000/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png',
                                    alt: '',
                                    'data-id': '110',
                                    'data-link':
                                      'http://localhost:8000/?attachment_id=110',
                                    style: {},
                                    className: 'wp-image-110',
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
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: 'blocks-gallery-item',
                        children: [
                          {
                            type: 'figure',
                            props: {
                              style: {},
                              className: null,
                              children: [
                                {
                                  type: 'img',
                                  props: {
                                    src:
                                      'http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png',
                                    alt: '',
                                    'data-id': '111',
                                    'data-link':
                                      'http://localhost:8000/?attachment_id=111',
                                    style: {},
                                    className: 'wp-image-111',
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
        blockName: 'core/gallery',
        attrs: { ids: [108, 109, 110, 111] },
        innerBlocks: [],
        innerHTML:
          '\n<ul class="wp-block-gallery columns-3 is-cropped"><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png" alt="" data-id="108" data-link="http://localhost:8000/?attachment_id=108" class="wp-image-108"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png" alt="" data-id="109" data-link="http://localhost:8000/?attachment_id=109" class="wp-image-109"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png" alt="" data-id="110" data-link="http://localhost:8000/?attachment_id=110" class="wp-image-110"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png" alt="" data-id="111" data-link="http://localhost:8000/?attachment_id=111" class="wp-image-111"/></figure></li></ul>\n',
        innerContent: [
          '\n<ul class="wp-block-gallery columns-3 is-cropped"><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png" alt="" data-id="108" data-link="http://localhost:8000/?attachment_id=108" class="wp-image-108"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png" alt="" data-id="109" data-link="http://localhost:8000/?attachment_id=109" class="wp-image-109"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png" alt="" data-id="110" data-link="http://localhost:8000/?attachment_id=110" class="wp-image-110"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png" alt="" data-id="111" data-link="http://localhost:8000/?attachment_id=111" class="wp-image-111"/></figure></li></ul>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
