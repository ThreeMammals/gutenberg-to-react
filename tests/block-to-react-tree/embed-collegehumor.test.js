const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded college humor', () => {
    const expected = [{
      type: 'core-embed/collegehumor',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'http://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas',
        type: 'video',
        providerNameSlug: 'collegehumor',
        className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'http://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas',
            type: 'video',
            providerNameSlug: 'collegehumor',
            className: 'wp-block-embed-collegehumor wp-block-embed is-type-video is-provider-collegehumor wp-embed-aspect-16-9 wp-has-aspect-ratio',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttp://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas\n'],
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
      blockName: 'core-embed/collegehumor',
      attrs:
     {
       url: 'http://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas',
       type: 'video',
       providerNameSlug: 'collegehumor',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-collegehumor wp-block-embed is-type-video is-provider-collegehumor wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttp://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-collegehumor wp-block-embed is-type-video is-provider-collegehumor wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttp://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
