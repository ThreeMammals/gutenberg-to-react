const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded spotify', () => {
    const expected = [{
      type: 'core-embed/spotify',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z',
        type: 'rich',
        providerNameSlug: 'spotify',
        className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z',
            type: 'rich',
            providerNameSlug: 'spotify',
            className: 'wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z\n'],
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

    const input = [
      {
        blockName: 'core-embed/spotify',
        attrs: {
          url: 'https://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z',
          type: 'rich',
          providerNameSlug: 'spotify',
          className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
