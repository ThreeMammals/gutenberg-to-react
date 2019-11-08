const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core table', () => {
    const expected = [
      {
        type: 'core/table',
        props: {
          style: {},
          className: 'wp-block-table',
          children: [
            [
              {
                type: 'table',
                props: {
                  style: {},
                  className: 'wp-block-table',
                  children: [
                    {
                      type: 'tbody',
                      props: {
                        className: null,
                        style: {},
                        children: [
                          {
                            type: 'tr',
                            props: {
                              className: null,
                              style: {},
                              children: [
                                {
                                  type: 'td',
                                  props: {
                                    className: null,
                                    style: {},
                                    children: ['header1'],
                                  },
                                  $$typeof: Symbol.for('react.element'),
                                  ref: null,
                                },
                                {
                                  type: 'td',
                                  props: {
                                    className: null,
                                    style: {},
                                    children: ['header2'],
                                  },
                                  $$typeof: Symbol.for('react.element'),
                                  ref: null,
                                },
                              ],
                            },
                            $$typeof: Symbol.for('react.element'),
                            ref: null,
                          },
                          {
                            type: 'tr',
                            props: {
                              className: null,
                              style: {},
                              children: [
                                {
                                  type: 'td',
                                  props: {
                                    className: null,
                                    style: {},
                                    children: ['value1'],
                                  },
                                  $$typeof: Symbol.for('react.element'),
                                  ref: null,
                                },
                                {
                                  type: 'td',
                                  props: {
                                    className: null,
                                    style: {},
                                    children: ['value2'],
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
        blockName: 'core/table',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<table class="wp-block-table"><tbody><tr><td>header1</td><td>header2</td></tr><tr><td>value1</td><td>value2</td></tr></tbody></table>\n',
        innerContent: [
          '\n<table class="wp-block-table"><tbody><tr><td>header1</td><td>header2</td></tr><tr><td>value1</td><td>value2</td></tr></tbody></table>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
