const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core shortcode', () => {
    const expected = [
      {
        type: 'core/shortcode',
        props: {
          style: {
          },
          className: null,
          children: [{
            type: 'su_box',
            props: {
              style: {
              },
              box_color: '#333333',
              class: '',
              radius: '3',
              className: null,
              title: 'Box title',
              title_color: '#FFFFFF',
              // todo should not be null
              children: ['Box content'],
            },
            $$typeof: Symbol.for('react.element'),
            ref: null,
          }],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [{
      blockName: 'core/shortcode',
      attrs: {},
      innerBlocks: [],
      innerHTML:
     '\n[su_box title="Box title" style="default" box_color="#333333" title_color="#FFFFFF" radius="3" class=""]Box content[/su_box]\n',
      innerContent:
     ['\n[su_box title="Box title" style="default" box_color="#333333" title_color="#FFFFFF" radius="3" class=""]Box content[/su_box]\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
