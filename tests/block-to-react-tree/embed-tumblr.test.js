const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded tumblr', () => {
    const expected = [{
      type: 'core-embed/tumblr',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://disneyliveaction.tumblr.com/post/186003956312/the-pride',
        type: 'rich',
        providerNameSlug: 'tumblr',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://disneyliveaction.tumblr.com/post/186003956312/the-pride',
            type: 'rich',
            providerNameSlug: 'tumblr',
            className: 'wp-block-embed-tumblr wp-block-embed is-type-rich is-provider-tumblr',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://disneyliveaction.tumblr.com/post/186003956312/the-pride\n'],
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
      blockName: 'core-embed/tumblr',
      attrs:
     {
       url: 'https://disneyliveaction.tumblr.com/post/186003956312/the-pride',
       type: 'rich',
       providerNameSlug: 'tumblr',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-tumblr wp-block-embed is-type-rich is-provider-tumblr"><div class="wp-block-embed__wrapper">\nhttps://disneyliveaction.tumblr.com/post/186003956312/the-pride\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-tumblr wp-block-embed is-type-rich is-provider-tumblr"><div class="wp-block-embed__wrapper">\nhttps://disneyliveaction.tumblr.com/post/186003956312/the-pride\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
