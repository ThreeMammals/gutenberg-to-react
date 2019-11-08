const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded smugmug', () => {
    const expected = [{
      type: 'core-embed/smugmug',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr',
        type: 'photo',
        providerNameSlug: 'smugmug',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr',
            type: 'photo',
            providerNameSlug: 'smugmug',
            className: 'wp-block-embed-smugmug wp-block-embed is-type-photo is-provider-smugmug',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr\n'],
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
      blockName: 'core-embed/smugmug',
      attrs:
     {
       url: 'https://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr',
       type: 'photo',
       providerNameSlug: 'smugmug',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-smugmug wp-block-embed is-type-photo is-provider-smugmug"><div class="wp-block-embed__wrapper">\nhttps://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-smugmug wp-block-embed is-type-photo is-provider-smugmug"><div class="wp-block-embed__wrapper">\nhttps://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
