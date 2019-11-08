const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded soundcloud', () => {
    const expected = [{
      type: 'core-embed/soundcloud',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://soundcloud.com/olly-hodding/lotn',
        type: 'rich',
        providerNameSlug: 'soundcloud',
        className: 'wp-embed-aspect-4-3 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://soundcloud.com/olly-hodding/lotn',
            type: 'rich',
            providerNameSlug: 'soundcloud',
            className: 'wp-block-embed-soundcloud wp-block-embed is-type-rich is-provider-soundcloud wp-embed-aspect-4-3 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://soundcloud.com/olly-hodding/lotn\n'],
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
      blockName: 'core-embed/soundcloud',
      attrs:
     {
       url: 'https://soundcloud.com/olly-hodding/lotn',
       type: 'rich',
       providerNameSlug: 'soundcloud',
       className: 'wp-embed-aspect-4-3 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-soundcloud wp-block-embed is-type-rich is-provider-soundcloud wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://soundcloud.com/olly-hodding/lotn\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-soundcloud wp-block-embed is-type-rich is-provider-soundcloud wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://soundcloud.com/olly-hodding/lotn\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
