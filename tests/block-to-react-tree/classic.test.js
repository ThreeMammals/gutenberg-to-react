const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core classic', () => {
    const expected = [
      {
        type: 'core/classic',
        props: {
          className: 'alignnone size-full wp-image-113',
          style: {
            'text-align': 'left',
          },
          children: [
            [
              {
                type: 'p',
                props: { style: {}, className: null, children: ['Paragraph'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'strong',
                      props: { style: {}, className: null, children: ['Bold'] },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'em',
                      props: {
                        style: {},
                        className: null,
                        children: ['Italics'],
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
                type: 'ul',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: null,
                        children: ['bullet 1'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: null,
                        children: ['bullet 2'],
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
                type: 'ol',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: null,
                        children: ['number 1'],
                      },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                    {
                      type: 'li',
                      props: {
                        style: {},
                        className: null,
                        children: ['number 2'],
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
                type: 'blockquote',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'p',
                      props: {
                        style: {},
                        className: null,
                        children: ['quote of a person'],
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
                type: 'p',
                props: {
                  style: { 'text-align': 'left' },
                  className: null,
                  children: ['align left'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: { 'text-align': 'center' },
                  className: null,
                  children: ['align center'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: { 'text-align': 'right' },
                  className: null,
                  children: ['alight right'],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'a',
                      props: {
                        href: 'http://localhost:8000/?p=69',
                        'data-wplink-url-error': 'true',
                        style: {},
                        className: null,
                        children: ['Ocelot'],
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
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'hr',
                      props: { style: {}, className: null, children: null },
                      $$typeof: Symbol.for('react.element'),
                      ref: null,
                    },
                  ],
                },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'img',
                      props: {
                        src:
                          'http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17-2.png',
                        alt: '',
                        width: '111',
                        height: '46',
                        style: {},
                        className: 'alignnone size-full wp-image-113',
                        children: null,
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
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'del',
                      props: {
                        style: {},
                        className: null,
                        children: ['strikethrough'],
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
                type: 'hr',
                props: { style: {}, className: null, children: null },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'span',
                      props: {
                        style: { color: '#ff0000' },
                        className: null,
                        children: ['red'],
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
                type: 'p',
                props: {
                  style: {},
                  className: null,
                  children: [
                    {
                      type: 'span',
                      props: {
                        style: { color: '#000000' },
                        className: null,
                        children: ['¢¶'],
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
                type: 'h1',
                props: { style: {}, className: null, children: ['Heading 1'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'h2',
                props: { style: {}, className: null, children: ['Heading 2'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'h3',
                props: { style: {}, className: null, children: ['Heading 3'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'h4',
                props: { style: {}, className: null, children: ['Heading 4'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'h5',
                props: { style: {}, className: null, children: ['Heading 5'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'h6',
                props: { style: {}, className: null, children: ['Heading 6'] },
                $$typeof: Symbol.for('react.element'),
                ref: null,
              },
              {
                type: 'pre',
                props: {
                  style: {},
                  className: null,
                  children: ['Preformatted'],
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
        blockName: null,
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '<p>Paragraph</p>\n<p><strong>Bold</strong></p>\n<p><em>Italics</em></p>\n<ul>\n<li>bullet 1</li>\n<li>bullet 2</li>\n</ul>\n<ol>\n<li>number 1</li>\n<li>number 2</li>\n</ol>\n<blockquote>\n<p>quote of a person</p>\n</blockquote>\n<p style="text-align: left;">align left</p>\n<p style="text-align: center;">align center</p>\n<p style="text-align: right;">alight right</p>\n<p><a href="http://localhost:8000/?p=69" data-wplink-url-error="true">Ocelot</a></p>\n<p><!--more--></p>\n<p><img class="alignnone size-full wp-image-113" src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17-2.png" alt="" width="111" height="46"></p>\n<p><del>strikethrough</del></p>\n<hr>\n<p><span style="color: #ff0000;">red</span></p>\n<p><span style="color: #000000;">¢¶</span></p>\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n<pre>Preformatted</pre>\n\n',
        innerContent: [
          '<p>Paragraph</p>\n<p><strong>Bold</strong></p>\n<p><em>Italics</em></p>\n<ul>\n<li>bullet 1</li>\n<li>bullet 2</li>\n</ul>\n<ol>\n<li>number 1</li>\n<li>number 2</li>\n</ol>\n<blockquote>\n<p>quote of a person</p>\n</blockquote>\n<p style="text-align: left;">align left</p>\n<p style="text-align: center;">align center</p>\n<p style="text-align: right;">alight right</p>\n<p><a href="http://localhost:8000/?p=69" data-wplink-url-error="true">Ocelot</a></p>\n<p><!--more--></p>\n<p><img class="alignnone size-full wp-image-113" src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17-2.png" alt="" width="111" height="46"></p>\n<p><del>strikethrough</del></p>\n<hr>\n<p><span style="color: #ff0000;">red</span></p>\n<p><span style="color: #000000;">¢¶</span></p>\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n<pre>Preformatted</pre>\n\n',
        ],
      },
    ];

    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
