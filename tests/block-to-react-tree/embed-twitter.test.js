const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded twitter', () => {
    const expected = [{
      type: 'core-embed/twitter',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url:
        'https://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw',
        type: 'rich',
        providerNameSlug: 'twitter',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            style: {},
            className: 'wp-block-embed-twitter wp-block-embed is-type-rich is-provider-twitter',
            providerNameSlug: 'twitter',
            url: 'https://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw',
            type: 'rich',
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw\n'],
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
      blockName: 'core-embed/twitter',
      attrs:
     {
       url:
        'https://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw',
       type: 'rich',
       providerNameSlug: 'twitter',
       className: '',
     },
      innerBlocks: [],
      innerHTML:
     '\n<figure class="wp-block-embed-twitter wp-block-embed is-type-rich is-provider-twitter"><div class="wp-block-embed__wrapper">\nhttps://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw\n</div></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-twitter wp-block-embed is-type-rich is-provider-twitter"><div class="wp-block-embed__wrapper">\nhttps://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw\n</div></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
