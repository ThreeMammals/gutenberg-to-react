const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core headings', () => {
    const expected = [
      {
        type: 'core/heading',
        props: {
          level: 1,
          style: {},
          className: null,
          children: [
            [
              {
                type: 'h1',
                props: {
                  level: 1,
                  style: {},
                  className: null,
                  children: ['H1'],
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
      {
        type: 'core/heading',
        props: {
          level: 2,
          style: {},
          className: null,
          children: [
            [
              {
                type: 'h2',
                props: {
                  level: 2,
                  style: {},
                  className: null,
                  children: ['H2'],
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
      {
        type: 'core/heading',
        props: {
          level: 3,
          style: {},
          className: null,
          children: [
            [
              {
                type: 'h3',
                props: {
                  level: 3,
                  style: {},
                  className: null,
                  children: ['H3'],
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
      {
        type: 'core/heading',
        props: {
          level: 4,
          style: {},
          className: null,
          children: [
            [
              {
                type: 'h4',
                props: {
                  level: 4,
                  style: {},
                  className: null,
                  children: ['H4'],
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
      {
        type: 'core/heading',
        props: {
          level: 5,
          style: {},
          className: null,
          children: [
            [
              {
                type: 'h5',
                props: {
                  level: 5,
                  style: {},
                  className: null,
                  children: ['H5'],
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
      {
        type: 'core/heading',
        props: {
          level: 6,
          style: {},
          className: null,
          children: [
            [
              {
                type: 'h6',
                props: {
                  level: 6,
                  style: {},
                  className: null,
                  children: ['H6'],
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
        blockName: 'core/heading',
        attrs: { level: 1 },
        innerBlocks: [],
        innerHTML: '\n<h1>H1</h1>\n',
        innerContent: ['\n<h1>H1</h1>\n'],
      },
      {
        blockName: 'core/heading',
        attrs: {},
        innerBlocks: [],
        innerHTML: '\n<h2>H2</h2>\n',
        innerContent: ['\n<h2>H2</h2>\n'],
      },
      {
        blockName: 'core/heading',
        attrs: { level: 3 },
        innerBlocks: [],
        innerHTML: '\n<h3>H3</h3>\n',
        innerContent: ['\n<h3>H3</h3>\n'],
      },
      {
        blockName: 'core/heading',
        attrs: { level: 4 },
        innerBlocks: [],
        innerHTML: '\n<h4>H4</h4>\n',
        innerContent: ['\n<h4>H4</h4>\n'],
      },
      {
        blockName: 'core/heading',
        attrs: { level: 5 },
        innerBlocks: [],
        innerHTML: '\n<h5>H5</h5>\n',
        innerContent: ['\n<h5>H5</h5>\n'],
      },
      {
        blockName: 'core/heading',
        attrs: { level: 6 },
        innerBlocks: [],
        innerHTML: '\n<h6>H6</h6>\n',
        innerContent: ['\n<h6>H6</h6>\n'],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
