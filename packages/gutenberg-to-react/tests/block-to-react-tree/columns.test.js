const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core paragraph, columns & column', () => {
    const expected = [{
      type: 'core/columns',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        columns: 3,
        style: {
          display: 'block',
          margin: '20px',
        },
        className: 'wp-block-columns has-3-columns',
        children: [
          [{
            type: 'div',
            props: {
              style: {
                display: 'block',
                margin: '20px',
              },
              className: 'wp-block-columns has-3-columns',
              children: [
                [
                  [{
                    type: 'div',
                    props: {
                      style: {},
                      className: 'wp-block-column',
                      children: [
                        [{
                          type: 'core/paragraph',
                          $$typeof: Symbol.for('react.element'),
                          ref: null,
                          props: {
                            style: {},
                            className: null,
                            children: [
                              [{
                                type: 'p',
                                props: {
                                  style: {},
                                  className: null,
                                  children: ['Left'],
                                },
                                $$typeof: Symbol.for('react.element'),
                                ref: null,
                              }],
                            ],
                          },
                        }],
                      ],
                    },
                    $$typeof: Symbol.for('react.element'),
                    ref: null,
                  }],
                  [{
                    type: 'div',
                    props: {
                      style: {},
                      className: 'wp-block-column',
                      children: [
                        [{
                          type: 'core/paragraph',
                          $$typeof: Symbol.for('react.element'),
                          ref: null,
                          props: {
                            style: {},
                            className: null,
                            children: [
                              [{
                                type: 'p',
                                props: {
                                  style: {},
                                  className: null,
                                  children: ['Middle'],
                                },
                                $$typeof: Symbol.for('react.element'),
                                ref: null,
                              }],
                            ],
                          },
                        }],
                      ],
                    },
                    $$typeof: Symbol.for('react.element'),
                    ref: null,
                  }],
                  [{
                    type: 'div',
                    props: {
                      style: {},
                      className: 'wp-block-column',
                      children: [
                        [{
                          type: 'core/paragraph',
                          $$typeof: Symbol.for('react.element'),
                          ref: null,
                          props: {
                            style: {},
                            className: null,
                            children: [
                              [{
                                type: 'p',
                                props: {
                                  style: {},
                                  className: null,
                                  children: ['Right'],
                                },
                                $$typeof: Symbol.for('react.element'),
                                ref: null,
                              }],
                            ],
                          },
                        }],
                      ],
                    },
                    $$typeof: Symbol.for('react.element'),
                    ref: null,
                  }],
                ],
              ],
              columns: 3,
            },
            $$typeof: Symbol.for('react.element'),
            ref: null,
          }],
        ],
      },
    }];


    const input = [
      {
        blockName: 'core/columns',
        attrs: {
          columns: 3,
        },
        innerBlocks: [
          {
            blockName: 'core/column',
            attrs: {},
            innerBlocks: [
              {
                blockName: 'core/paragraph',
                attrs: {},
                innerBlocks: [],
                innerHTML: '<p>Left</p>\n',
                innerContent: ['\n<p>Left</p>\n'],
              },
            ],
            innerHTML: '\n<div class="wp-block-column"></div>\n',
            innerContent: ['\n<div class="wp-block-column">', null, '</div>\n'],
          },
          {
            blockName: 'core/column',
            attrs: {},
            innerBlocks: [
              {
                blockName: 'core/paragraph',
                attrs: {},
                innerBlocks: [],
                innerHTML: '\n<p>Middle</p>\n',
                innerContent: ['\n<p>Middle</p>\n'],
              },
            ],
            innerHTML: '\n<div class="wp-block-column"></div>\n',
            innerContent: ['\n<div class="wp-block-column">', null, '</div>\n'],
          },
          {
            blockName: 'core/column',
            attrs: {},
            innerBlocks: [
              {
                blockName: 'core/paragraph',
                attrs: {},
                innerBlocks: [],
                innerHTML: '\n<p>Right</p>\n',
                innerContent: ['\n<p>Right</p>\n'],
              },
            ],
            innerHTML: '\n<div class="wp-block-column"></div>\n',
            innerContent: ['\n<div class="wp-block-column">', null, '</div>\n'],
          },
        ],
        innerHTML:
          '\n<div class="wp-block-columns has-3-columns" style="display: block; margin: 20px;">\n\n\n\n</div>\n',
        innerContent: [
          '\n<div class="wp-block-columns has-3-columns" style="display: block; margin: 20px;">',
          null,
          '\n\n',
          null,
          '\n\n',
          null,
          '</div>\n',
        ],
      },
      {
        blockName: null,
        attrs: {},
        innerBlocks: [],
        innerHTML: '\n\n',
        innerContent: ['\n\n'],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
