const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded imgur', () => {
    const expected = [{
      type: 'core-embed/imgur',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://imgur.com/a/p0R6NP1',
        type: 'rich',
        providerNameSlug: 'imgur',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://imgur.com/a/p0R6NP1',
            type: 'rich',
            providerNameSlug: 'imgur',
            className: 'wp-block-embed-imgur wp-block-embed is-type-rich is-provider-imgur',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://imgur.com/a/p0R6NP1\n'],
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
      blockName: 'core-embed/imgur',
      attrs:
     {
       url: 'https://imgur.com/a/p0R6NP1',
       type: 'rich',
       providerNameSlug: 'imgur',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-imgur wp-block-embed is-type-rich is-provider-imgur"><div class="wp-block-embed__wrapper">\nhttps://imgur.com/a/p0R6NP1\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-imgur wp-block-embed is-type-rich is-provider-imgur"><div class="wp-block-embed__wrapper">\nhttps://imgur.com/a/p0R6NP1\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
