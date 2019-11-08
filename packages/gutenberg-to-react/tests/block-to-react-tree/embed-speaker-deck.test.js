const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded speaker deck', () => {
    const expected = [{
      type: 'core-embed/speaker-deck',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19',
        type: 'rich',
        providerNameSlug: 'speaker-deck',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19',
            type: 'rich',
            providerNameSlug: 'speaker-deck',
            className: 'wp-block-embed-speaker-deck wp-block-embed is-type-rich is-provider-speaker-deck wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19\n'],
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
      blockName: 'core-embed/speaker-deck',
      attrs:
     {
       url: 'https://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19',
       type: 'rich',
       providerNameSlug: 'speaker-deck',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-speaker-deck wp-block-embed is-type-rich is-provider-speaker-deck wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-speaker-deck wp-block-embed is-type-rich is-provider-speaker-deck wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
