const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded reddit', () => {
    const expected = [{
      type: 'core-embed/reddit',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/',
        type: 'rich',
        providerNameSlug: 'reddit',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/',
            type: 'rich',
            providerNameSlug: 'reddit',
            className: 'wp-block-embed-reddit wp-block-embed is-type-rich is-provider-reddit',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/\n'],
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
      blockName: 'core-embed/reddit',
      attrs:
     {
       url: 'https://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/',
       type: 'rich',
       providerNameSlug: 'reddit',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-reddit wp-block-embed is-type-rich is-provider-reddit"><div class="wp-block-embed__wrapper">\nhttps://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-reddit wp-block-embed is-type-rich is-provider-reddit"><div class="wp-block-embed__wrapper">\nhttps://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
