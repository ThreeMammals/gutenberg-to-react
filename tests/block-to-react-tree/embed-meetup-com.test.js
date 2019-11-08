const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded meetup.com', () => {
    const expected = [{
      type: 'core-embed/meetup-com',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.meetup.com/LabCentral/events/ptcmbryzkbnb/',
        type: 'rich',
        providerNameSlug: 'meetup',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.meetup.com/LabCentral/events/ptcmbryzkbnb/',
            type: 'rich',
            providerNameSlug: 'meetup',
            className: 'wp-block-embed-meetup-com wp-block-embed is-type-rich is-provider-meetup',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.meetup.com/LabCentral/events/ptcmbryzkbnb/\n'],
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
      blockName: 'core-embed/meetup-com',
      attrs:
     {
       url: 'https://www.meetup.com/LabCentral/events/ptcmbryzkbnb/',
       type: 'rich',
       providerNameSlug: 'meetup',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-meetup-com wp-block-embed is-type-rich is-provider-meetup"><div class="wp-block-embed__wrapper">\nhttps://www.meetup.com/LabCentral/events/ptcmbryzkbnb/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-meetup-com wp-block-embed is-type-rich is-provider-meetup"><div class="wp-block-embed__wrapper">\nhttps://www.meetup.com/LabCentral/events/ptcmbryzkbnb/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
