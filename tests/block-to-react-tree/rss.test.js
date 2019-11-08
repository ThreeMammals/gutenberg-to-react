const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core rss', () => {
    const expected = [
      {
        type: 'core/rss',
        props: {
          feedURL: 'https://lorem-rss.herokuapp.com/feed',
          displayExcerpt: true,
          displayAuthor: true,
          displayDate: true,
          excerptLength: 20,
          style: {
          },
          className: null,
          children: [],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/rss',
      attrs:
     {
       feedURL: 'https://lorem-rss.herokuapp.com/feed',
       displayExcerpt: true,
       displayAuthor: true,
       displayDate: true,
       excerptLength: 20,
     },
      innerBlocks: [],
      innerHTML: '',
      innerContent: [],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
