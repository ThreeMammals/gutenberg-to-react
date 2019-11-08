const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core spacer', () => {
    const expected = [
      {
        type: 'core/spacer',
        props: {
          style: {
            height: '1000px',
          },
          height: 1000,
          className: 'wp-block-spacer',
          children: [[{
            type: 'div',
            props: {
              height: 1000,
              'aria-hidden': 'true',
              style: {
                height: '1000px',
              },
              className: 'wp-block-spacer',
              children: [],
            },
            $$typeof: Symbol.for('react.element'),
            ref: null,
          }]],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/spacer',
      attrs: { height: 1000 },
      innerBlocks: [],
      innerHTML:
     '\n<div style="height:1000px" aria-hidden="true" class="wp-block-spacer"></div>\n',
      innerContent:
     ['\n<div style="height:1000px" aria-hidden="true" class="wp-block-spacer"></div>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
