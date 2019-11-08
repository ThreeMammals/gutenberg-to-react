const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded animoto', () => {
    const expected = [{
      type: 'core-embed/animoto',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug',
        type: 'video',
        providerNameSlug: 'animoto',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug',
            type: 'video',
            providerNameSlug: 'animoto',
            className: 'wp-block-embed-animoto wp-block-embed is-type-video is-provider-animoto wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug\n'],
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

    const input = [
      {
        blockName: 'core-embed/animoto',
        attrs: {
          url: 'https://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug',
          type: 'video',
          providerNameSlug: 'animoto',
          className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-animoto wp-block-embed is-type-video is-provider-animoto wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-animoto wp-block-embed is-type-video is-provider-animoto wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
