const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded ted', () => {
    const expected = [{
      type: 'core-embed/ted',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy',
        type: 'video',
        providerNameSlug: 'ted',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy',
            type: 'video',
            providerNameSlug: 'ted',
            className: 'wp-block-embed-ted wp-block-embed is-type-video is-provider-ted wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy\n'],
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
      blockName: 'core-embed/ted',
      attrs:
     {
       url: 'https://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy',
       type: 'video',
       providerNameSlug: 'ted',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-ted wp-block-embed is-type-video is-provider-ted wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-ted wp-block-embed is-type-video is-provider-ted wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
