const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded scribd', () => {
    const expected = [{
      type: 'core-embed/scribd',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.reverbnation.com/eames1',
        type: 'rich',
        providerNameSlug: '',
        className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.reverbnation.com/eames1',
            type: 'rich',
            providerNameSlug: '',
            className: 'wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.reverbnation.com/eames1\n'],
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
      blockName: 'core-embed/scribd',
      attrs:
     {
       url: 'https://www.reverbnation.com/eames1',
       type: 'rich',
       providerNameSlug: '',
       className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
