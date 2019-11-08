const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded crowdsignal', () => {
    const expected = [{
      type: 'core-embed/crowdsignal',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://tomgardhampallister.survey.fm/untitled-survey',
        type: 'rich',
        providerNameSlug: 'crowdsignal',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://tomgardhampallister.survey.fm/untitled-survey',
            type: 'rich',
            providerNameSlug: 'crowdsignal',
            className: 'wp-block-embed-crowdsignal wp-block-embed is-type-rich is-provider-crowdsignal',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://tomgardhampallister.survey.fm/untitled-survey\n'],
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
      blockName: 'core-embed/crowdsignal',
      attrs:
     {
       url: 'https://tomgardhampallister.survey.fm/untitled-survey',
       type: 'rich',
       providerNameSlug: 'crowdsignal',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-crowdsignal wp-block-embed is-type-rich is-provider-crowdsignal"><div class="wp-block-embed__wrapper">\nhttps://tomgardhampallister.survey.fm/untitled-survey\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-crowdsignal wp-block-embed is-type-rich is-provider-crowdsignal"><div class="wp-block-embed__wrapper">\nhttps://tomgardhampallister.survey.fm/untitled-survey\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
