const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded hulu', () => {
    const expected = [{
      type: 'core-embed/hulu',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.hulu.com/watch/771496',
        type: 'video',
        providerNameSlug: 'hulu',
        className: 'wp-embed-aspect-4-3 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.hulu.com/watch/771496',
            type: 'video',
            providerNameSlug: 'hulu',
            className: 'wp-block-embed-hulu wp-block-embed is-type-video is-provider-hulu wp-embed-aspect-4-3 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.hulu.com/watch/771496\n'],
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
      blockName: 'core-embed/hulu',
      attrs:
     {
       url: 'https://www.hulu.com/watch/771496',
       type: 'video',
       providerNameSlug: 'hulu',
       className: 'wp-embed-aspect-4-3 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-hulu wp-block-embed is-type-video is-provider-hulu wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.hulu.com/watch/771496\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-hulu wp-block-embed is-type-video is-provider-hulu wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.hulu.com/watch/771496\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
