const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded amazon kindle', () => {
    const expected = [{
      type: 'core-embed/amazon-kindle',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_86qjDbK869J7J',
        type: 'rich',
        providerNameSlug: 'amazon',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_86qjDbK869J7J',
            type: 'rich',
            providerNameSlug: 'amazon',
            className: 'wp-block-embed-amazon-kindle wp-block-embed is-type-rich is-provider-amazon',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_86qjDbK869J7J\n'],
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
      blockName: 'core-embed/amazon-kindle',
      attrs:
     {
       url: 'https://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_86qjDbK869J7J',
       type: 'rich',
       providerNameSlug: 'amazon',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-amazon-kindle wp-block-embed is-type-rich is-provider-amazon"><div class="wp-block-embed__wrapper">\nhttps://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_86qjDbK869J7J\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-amazon-kindle wp-block-embed is-type-rich is-provider-amazon"><div class="wp-block-embed__wrapper">\nhttps://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_86qjDbK869J7J\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
