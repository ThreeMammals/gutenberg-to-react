const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse paragraph with br', () => {
    const expected = [
      {
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
                children: ['text ', {
                  type: 'br',
                  props: {
                    style: {},
                    className: null,
                    // br cannot have children
                  },
                  $$typeof: Symbol.for('react.element'),
                  ref: null,
                }],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          ],
        },
      },
    ];

    const input = [{
      blockName: 'core/paragraph',
      attrs: {},
      innerBlocks: [],
      innerHTML: '\n<p>text <br></p>\n',
      innerContent: ['\n<p>text <br></p>\n'],
    }];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
