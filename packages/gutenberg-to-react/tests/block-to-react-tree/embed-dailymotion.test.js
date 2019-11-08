const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded dailymotion', () => {
    const expected = [{
      type: 'core-embed/dailymotion',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw',
        type: 'video',
        providerNameSlug: 'dailymotion',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw',
            type: 'video',
            providerNameSlug: 'dailymotion',
            className: 'wp-block-embed-dailymotion wp-block-embed is-type-video is-provider-dailymotion wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw\n'],
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
      blockName: 'core-embed/dailymotion',
      attrs:
     {
       url: 'https://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw',
       type: 'video',
       providerNameSlug: 'dailymotion',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-dailymotion wp-block-embed is-type-video is-provider-dailymotion wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-dailymotion wp-block-embed is-type-video is-provider-dailymotion wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
