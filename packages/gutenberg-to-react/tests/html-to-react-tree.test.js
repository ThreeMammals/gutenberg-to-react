const { innerContentToReactTree } = require('../src/html-to-react-tree');

describe('innerContentToReactTree', () => {
  it('should parse core list', () => {
    const expected = [
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
    ];

    const input = '\n<ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li></ul>\n';

    const result = innerContentToReactTree(input);

    expect(expected).toEqual(result);
  });

  it('should parse core image', () => {
    const expected = [
      {
        type: 'figure',
        props: {
          style: {},
          className: 'wp-block-image',
          children: [
            {
              type: 'img',
              props: {
                src:
                  'http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png',
                alt: '',
                style: {},
                className: 'wp-image-90',
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
    ];

    const input = '<figure class="wp-block-image"><img src="http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png" alt="" class="wp-image-90"/></figure>';

    const result = innerContentToReactTree(input);

    expect(expected).toEqual(result);
  });

  it('should parse core headings', () => {
    const expecteds = [
      [
        {
          type: 'h1',
          props: {
            style: {},
            className: null,
            children: ['H1'],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        },
      ],
      [
        {
          type: 'h2',
          props: {
            style: {},
            className: null,
            children: ['H2'],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        },
      ],
      [
        {
          type: 'h3',
          props: {
            style: {},
            className: null,
            children: ['H3'],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        },
      ],
      [
        {
          type: 'h4',
          props: {
            style: {},
            className: null,
            children: ['H4'],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        },
      ],
      [
        {
          type: 'h5',
          props: {
            style: {},
            className: null,
            children: ['H5'],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        },
      ],
      [
        {
          type: 'h6',
          props: {
            style: {},
            className: null,
            children: ['H6'],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        },
      ],
    ];

    const inputs = [
      '\n<h1>H1</h1>\n',
      '\n<h2>H2</h2>\n',
      '\n<h3>H3</h3>\n',
      '\n<h4>H4</h4>\n',
      '\n<h5>H5</h5>\n',
      '\n<h6>H6</h6>\n',
    ];

    const results = inputs.map(input => innerContentToReactTree(input));

    expect(results).toEqual(expecteds);
  });

  it('should parse core quote', () => {
    const expected = [
      {
        type: 'blockquote',
        props: {
          style: {},
          className: 'wp-block-quote',
          children: [
            {
              type: 'p',
              props: {
                style: {},
                className: null,
                children: ['This is a quote'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            },
            {
              type: 'cite',
              props: {
                style: {},
                className: null,
                children: ['and here is the citation'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            },
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = '\n<blockquote class="wp-block-quote"><p>This is a quote</p><cite>and here is the citation</cite></blockquote>\n';

    const result = innerContentToReactTree(input);

    expect(expected).toEqual(result);
  });

  it('should parse core cover', () => {
    const expected = [
      {
        type: 'div',
        props: {
          style: {
            'background-image':
              'url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)',
          },
          className:
            'wp-block-cover has-dark-gray-background-color has-background-dim',
          children: [
            {
              type: 'p',
              props: {
                style: {},
                className: 'wp-block-cover-text',
                children: ['some title'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            },
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = '\n<div class="wp-block-cover has-dark-gray-background-color has-background-dim" style="background-image:url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)"><p class="wp-block-cover-text">some title</p></div>\n';

    const result = innerContentToReactTree(input);

    expect(expected).toEqual(result);
  });

  it('should parse core gallery', () => {
    const expected = [
      {
        type: 'ul',
        props: {
          style: {},
          className: 'wp-block-gallery columns-3 is-cropped',
          children: [
            {
              type: 'li',
              props: {
                style: {},
                className: 'blocks-gallery-item',
                children: [
                  {
                    type: 'figure',
                    props: {
                      style: {},
                      className: null,
                      children: [
                        {
                          type: 'img',
                          props: {
                            src:
                              'http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png',
                            alt: '',
                            'data-id': '108',
                            'data-link':
                              'http://localhost:8000/?attachment_id=108',
                            style: {},
                            className: 'wp-image-108',
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
                ],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            },
            {
              type: 'li',
              props: {
                style: {},
                className: 'blocks-gallery-item',
                children: [
                  {
                    type: 'figure',
                    props: {
                      style: {},
                      className: null,
                      children: [
                        {
                          type: 'img',
                          props: {
                            src:
                              'http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png',
                            alt: '',
                            'data-id': '109',
                            'data-link':
                              'http://localhost:8000/?attachment_id=109',
                            style: {},
                            className: 'wp-image-109',
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
                ],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            },
            {
              type: 'li',
              props: {
                style: {},
                className: 'blocks-gallery-item',
                children: [
                  {
                    type: 'figure',
                    props: {
                      style: {},
                      className: null,
                      children: [
                        {
                          type: 'img',
                          props: {
                            src:
                              'http://localhost:8000/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png',
                            alt: '',
                            'data-id': '110',
                            'data-link':
                              'http://localhost:8000/?attachment_id=110',
                            className: 'wp-image-110',
                            style: {},
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
                ],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            },
            {
              type: 'li',
              props: {
                style: {},
                className: 'blocks-gallery-item',
                children: [
                  {
                    type: 'figure',
                    props: {
                      style: {},
                      className: null,
                      children: [
                        {
                          type: 'img',
                          props: {
                            src:
                              'http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png',
                            alt: '',
                            'data-id': '111',
                            'data-link':
                              'http://localhost:8000/?attachment_id=111',
                            style: {},
                            className: 'wp-image-111',
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
    ];

    const input = '\n<ul class="wp-block-gallery columns-3 is-cropped"><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png" alt="" data-id="108" data-link="http://localhost:8000/?attachment_id=108" class="wp-image-108"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png" alt="" data-id="109" data-link="http://localhost:8000/?attachment_id=109" class="wp-image-109"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png" alt="" data-id="110" data-link="http://localhost:8000/?attachment_id=110" class="wp-image-110"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png" alt="" data-id="111" data-link="http://localhost:8000/?attachment_id=111" class="wp-image-111"/></figure></li></ul>\n';

    const result = innerContentToReactTree(input);

    expect(expected).toEqual(result);
  });

  it('should parse classic list', () => {
    const expected = [
      {
        type: 'ul',
        props: {
          style: {},
          className: null,
          children: [
            {
              type: 'li',
              props: { style: {}, className: null, children: ['a'] },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            },
            {
              type: 'li',
              props: { style: {}, className: null, children: ['b'] },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            },
            {
              type: 'li',
              props: { style: {}, className: null, children: ['c'] },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            },
            {
              type: 'li',
              props: { style: {}, className: null, children: ['d'] },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            },
          ],
        },
        $$typeof: Symbol.for('react.element'),
        ref: null,
      },
    ];

    const input = '<ul>\n \t<li>a</li>\n \t<li>b</li>\n \t<li>c</li>\n \t<li>d</li>\n</ul>';

    const result = innerContentToReactTree(input);

    expect(expected).toEqual(result);
  });
});
