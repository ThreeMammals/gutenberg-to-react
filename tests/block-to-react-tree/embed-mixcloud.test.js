const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded mixcloud', () => {
    const expected = [{
      type: 'core-embed/mixcloud',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/',
        type: 'rich',
        providerNameSlug: 'mixcloud',
        className: 'wp-embed-aspect-21-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/',
            type: 'rich',
            providerNameSlug: 'mixcloud',
            className: 'wp-block-embed-mixcloud wp-block-embed is-type-rich is-provider-mixcloud wp-embed-aspect-21-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/\n'],
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
      blockName: 'core-embed/mixcloud',
      attrs:
     {
       url: 'https://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/',
       type: 'rich',
       providerNameSlug: 'mixcloud',
       className: 'wp-embed-aspect-21-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-mixcloud wp-block-embed is-type-rich is-provider-mixcloud wp-embed-aspect-21-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-mixcloud wp-block-embed is-type-rich is-provider-mixcloud wp-embed-aspect-21-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];
    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
