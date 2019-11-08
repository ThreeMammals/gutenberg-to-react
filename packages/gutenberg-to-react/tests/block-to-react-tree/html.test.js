const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core html', () => {
    const expected = [
      {
        type: 'core/html',
        props: {
          style: {},
          className: null,
          children: [
            [
              {
                type: 'div',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'p',
                      props: {
                        className: null,
                        style: {},
                        children: ['Hi Tom'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
            ],
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = [
      {
        blockName: 'core/html',
        attrs: {},
        innerBlocks: [],
        innerHTML: '\n<div><p>Hi Tom</p></div>\n',
        innerContent: ['\n<div><p>Hi Tom</p></div>\n'],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
