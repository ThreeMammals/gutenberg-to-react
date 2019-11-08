const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded instagram', () => {
    const expected = [{
      type: 'core-embed/instagram',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'http://instagr.am/p/fA9uwTtkSN/',
        type: 'rich',
        providerNameSlug: 'instagram',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'http://instagr.am/p/fA9uwTtkSN/',
            type: 'rich',
            providerNameSlug: 'instagram',
            className: 'wp-block-embed-instagram wp-block-embed is-type-rich is-provider-instagram',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttp://instagr.am/p/fA9uwTtkSN/\n'],
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
      blockName: 'core-embed/instagram',
      attrs:
     {
       url: 'http://instagr.am/p/fA9uwTtkSN/',
       type: 'rich',
       providerNameSlug: 'instagram',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-instagram wp-block-embed is-type-rich is-provider-instagram"><div class="wp-block-embed__wrapper">\nhttp://instagr.am/p/fA9uwTtkSN/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-instagram wp-block-embed is-type-rich is-provider-instagram"><div class="wp-block-embed__wrapper">\nhttp://instagr.am/p/fA9uwTtkSN/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
