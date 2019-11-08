const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded facebook', () => {
    const expected = [{
      type: 'core-embed/facebook',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.facebook.com/20531316728/posts/10154009990506729/',
        type: 'rich',
        providerNameSlug: 'facebook',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            style: {},
            url: 'https://www.facebook.com/20531316728/posts/10154009990506729/',
            type: 'rich',
            providerNameSlug: 'facebook',
            className: 'wp-block-embed-facebook wp-block-embed is-type-rich is-provider-facebook',
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.facebook.com/20531316728/posts/10154009990506729/\n'],
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
      blockName: 'core-embed/facebook',
      attrs:
     {
       url: 'https://www.facebook.com/20531316728/posts/10154009990506729/',
       type: 'rich',
       providerNameSlug: 'facebook',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-facebook wp-block-embed is-type-rich is-provider-facebook"><div class="wp-block-embed__wrapper">\nhttps://www.facebook.com/20531316728/posts/10154009990506729/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-facebook wp-block-embed is-type-rich is-provider-facebook"><div class="wp-block-embed__wrapper">\nhttps://www.facebook.com/20531316728/posts/10154009990506729/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
