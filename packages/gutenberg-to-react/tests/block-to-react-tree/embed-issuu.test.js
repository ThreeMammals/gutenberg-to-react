const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded issuu', () => {
    const expected = [{
      type: 'core-embed/issuu',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96',
        type: 'rich',
        providerNameSlug: 'issuu',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96',
            type: 'rich',
            providerNameSlug: 'issuu',
            className: 'wp-block-embed-issuu wp-block-embed is-type-rich is-provider-issuu',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96\n'],
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
      blockName: 'core-embed/issuu',
      attrs:
     {
       url: 'https://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96',
       type: 'rich',
       providerNameSlug: 'issuu',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-issuu wp-block-embed is-type-rich is-provider-issuu"><div class="wp-block-embed__wrapper">\nhttps://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-issuu wp-block-embed is-type-rich is-provider-issuu"><div class="wp-block-embed__wrapper">\nhttps://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
