const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded vimeo', () => {
    const expected = [{
      type: 'core-embed/vimeo',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://vimeo.com/346788825',
        type: 'video',
        providerNameSlug: 'vimeo',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://vimeo.com/346788825',
            type: 'video',
            providerNameSlug: 'vimeo',
            className: 'wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://vimeo.com/346788825\n'],
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
      blockName: 'core-embed/vimeo',
      attrs:
     {
       url: 'https://vimeo.com/346788825',
       type: 'video',
       providerNameSlug: 'vimeo',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://vimeo.com/346788825\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://vimeo.com/346788825\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
