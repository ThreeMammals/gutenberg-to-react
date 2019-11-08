const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded videopress', () => {
    const expected = [{
      type: 'core-embed/videopress',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://videopress.com/v/kUJmAcSf',
        type: 'video',
        providerNameSlug: 'videopress',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://videopress.com/v/kUJmAcSf',
            type: 'video',
            providerNameSlug: 'videopress',
            className: 'wp-block-embed-videopress wp-block-embed is-type-video is-provider-videopress wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://videopress.com/v/kUJmAcSf\n'],
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
      blockName: 'core-embed/videopress',
      attrs:
     {
       url: 'https://videopress.com/v/kUJmAcSf',
       type: 'video',
       providerNameSlug: 'videopress',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-videopress wp-block-embed is-type-video is-provider-videopress wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://videopress.com/v/kUJmAcSf\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-videopress wp-block-embed is-type-video is-provider-videopress wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://videopress.com/v/kUJmAcSf\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
