const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core list', () => {
    const expected = [
      {
        type: 'core/list',
        props: {
          style: {},
          className: null,
          children: [
            [
              {
                type: 'ul',
                ref: null,
                $$typeof: Symbol.for('react.element'),
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'li',
                      ref: null,
                      $$typeof: Symbol.for('react.element'),
                      props: {
                        style: {},
                        className: null,
                        children: ['item 1'],
                      },
                    },
                    {
                      type: 'li',
                      ref: null,
                      $$typeof: Symbol.for('react.element'),
                      props: {
                        style: {},
                        className: null,
                        children: ['item 2'],
                      },
                    },
                    {
                      type: 'li',
                      ref: null,
                      $$typeof: Symbol.for('react.element'),
                      props: {
                        style: {},
                        className: null,
                        children: ['item 3'],
                      },
                    },
                    {
                      type: 'li',
                      ref: null,
                      $$typeof: Symbol.for('react.element'),
                      props: {
                        style: {},
                        className: null,
                        children: ['item 4'],
                      },
                    },
                  ],
                },
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
        blockName: 'core/list',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li></ul>\n',
        innerContent: [
          '\n<ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li></ul>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
