const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded kickstarter', () => {
    const expected = [{
      type: 'core-embed/kickstarter',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks',
        type: 'rich',
        providerNameSlug: 'kickstarter',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks',
            type: 'rich',
            providerNameSlug: 'kickstarter',
            className: 'wp-block-embed-kickstarter wp-block-embed is-type-rich is-provider-kickstarter wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks\n'],
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
      blockName: 'core-embed/kickstarter',
      attrs:
     {
       url: 'https://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks',
       type: 'rich',
       providerNameSlug: 'kickstarter',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-kickstarter wp-block-embed is-type-rich is-provider-kickstarter wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks\n</div><figcaption>test embed</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-kickstarter wp-block-embed is-type-rich is-provider-kickstarter wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
