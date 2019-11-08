const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded slideshare', () => {
    const expected = [{
      type: 'core-embed/slideshare',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540',
        type: 'rich',
        providerNameSlug: 'slideshare',
        className: 'wp-embed-aspect-1-1 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540',
            type: 'rich',
            providerNameSlug: 'slideshare',
            className: 'wp-block-embed-slideshare wp-block-embed is-type-rich is-provider-slideshare wp-embed-aspect-1-1 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540\n'],
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
      blockName: 'core-embed/slideshare',
      attrs:
     {
       url: 'https://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540',
       type: 'rich',
       providerNameSlug: 'slideshare',
       className: 'wp-embed-aspect-1-1 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-slideshare wp-block-embed is-type-rich is-provider-slideshare wp-embed-aspect-1-1 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-slideshare wp-block-embed is-type-rich is-provider-slideshare wp-embed-aspect-1-1 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
