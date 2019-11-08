const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded cloudup', () => {
    const expected = [{
      type: 'core-embed/cloudup',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://cloudup.com/i_7_kWIw2ST',
        type: 'photo',
        providerNameSlug: 'cloudup',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://cloudup.com/i_7_kWIw2ST',
            type: 'photo',
            providerNameSlug: 'cloudup',
            className: 'wp-block-embed-cloudup wp-block-embed is-type-photo is-provider-cloudup',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://cloudup.com/i_7_kWIw2ST\n'],
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
      blockName: 'core-embed/cloudup',
      attrs:
     {
       url: 'https://cloudup.com/i_7_kWIw2ST',
       type: 'photo',
       providerNameSlug: 'cloudup',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-cloudup wp-block-embed is-type-photo is-provider-cloudup"><div class="wp-block-embed__wrapper">\nhttps://cloudup.com/i_7_kWIw2ST\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-cloudup wp-block-embed is-type-photo is-provider-cloudup"><div class="wp-block-embed__wrapper">\nhttps://cloudup.com/i_7_kWIw2ST\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
