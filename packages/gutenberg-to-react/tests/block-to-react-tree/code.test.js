const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core code', () => {
    const expected = [
      {
        type: 'core/code',
        props: {
          style: {},
          className: 'wp-block-code',
          children: [
            [
              {
                type: 'pre',
                props: {
                  style: {},
                  className: 'wp-block-code',
                  children: [
                    {
                      type: 'code',
                      props: {
                        className: null,
                        style: {},
                        children: [
                          '[php]\n<?php\necho "Hello World";\n?>\n[/php]',
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
        blockName: 'core/code',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<pre class="wp-block-code"><code>[php]\n&lt;?php\necho "Hello World";\n?>\n[/php]</code></pre>\n',
        innerContent: [
          '\n<pre class="wp-block-code"><code>[php]\n&lt;?php\necho "Hello World";\n?>\n[/php]</code></pre>\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
