const { postContentToBlocks } = require('../src/post-content-to-blocks');

describe('postContentToBlocks', () => {
  it('should parse core paragraph, columns, column and list maybe break these up into seperate tests?', () => {
    const expected = [
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
                innerHTML: '\n<p>Left</p>\n',
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

    const input = '<!-- wp:columns {"columns":3} -->\n<div class="wp-block-columns has-3-columns" style="display: block; margin: 20px;"><!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph -->\n<p>Left</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph -->\n<p>Middle</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph -->\n<p>Right</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->\n\n<!-- wp:list -->\n<ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li></ul>\n<!-- /wp:list -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core image', () => {
    const expected = [
      {
        attrs: {},
        blockName: 'core/paragraph',
        innerBlocks: [],
        innerContent: ['<p>this is the top man</p>'],
        innerHTML: '<p>this is the top man</p>',
      },
      {
        attrs: { id: 90 },
        blockName: 'core/image',
        innerBlocks: [],
        innerContent: [
          '<figure class="wp-block-image"><img src="http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png" alt="" class="wp-image-90"/></figure>',
        ],
        innerHTML:
          '<figure class="wp-block-image"><img src="http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png" alt="" class="wp-image-90"/></figure>',
      },
      {
        attrs: {},
        blockName: 'core/paragraph',
        innerBlocks: [],
        innerContent: ['<p></p>'],
        innerHTML: '<p></p>',
      },
    ];

    const input = '<!-- wp:paragraph --><p>this is the top man</p><!-- /wp:paragraph --><!-- wp:image {"id":90} --><figure class="wp-block-image"><img src="http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-16.54.31.png" alt="" class="wp-image-90"/></figure><!-- /wp:image --><!-- wp:paragraph --><p></p><!-- /wp:paragraph -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core headings', () => {
    const expected = [
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

    const input = '<!-- wp:heading {"level":1} -->\n<h1>H1</h1>\n<!-- /wp:heading --><!-- wp:heading -->\n<h2>H2</h2>\n<!-- /wp:heading --><!-- wp:heading {"level":3} -->\n<h3>H3</h3>\n<!-- /wp:heading --><!-- wp:heading {"level":4} -->\n<h4>H4</h4>\n<!-- /wp:heading --><!-- wp:heading {"level":5} -->\n<h5>H5</h5>\n<!-- /wp:heading --><!-- wp:heading {"level":6} -->\n<h6>H6</h6>\n<!-- /wp:heading -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core quote', () => {
    const expected = [
      {
        blockName: 'core/quote',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<blockquote class="wp-block-quote"><p>This is a quote</p><cite>and here is the citation</cite></blockquote>\n',
        innerContent: [
          '\n<blockquote class="wp-block-quote"><p>This is a quote</p><cite>and here is the citation</cite></blockquote>\n',
        ],
      },
    ];

    const input = '<!-- wp:quote -->\n<blockquote class="wp-block-quote"><p>This is a quote</p><cite>and here is the citation</cite></blockquote>\n<!-- /wp:quote -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core cover', () => {
    const expected = [
      {
        blockName: 'core/cover',
        attrs: {
          url:
            'http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png',
          id: 105,
          overlayColor: 'dark-gray',
        },
        innerBlocks: [],
        innerHTML:
          '\n<div class="wp-block-cover has-dark-gray-background-color has-background-dim" style="background-image:url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)"><p class="wp-block-cover-text">some title</p></div>\n',
        innerContent: [
          '\n<div class="wp-block-cover has-dark-gray-background-color has-background-dim" style="background-image:url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)"><p class="wp-block-cover-text">some title</p></div>\n',
        ],
      },
    ];

    const input = '<!-- wp:cover {"url":"http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png","id":105,"overlayColor":"dark-gray"} -->\n<div class="wp-block-cover has-dark-gray-background-color has-background-dim" style="background-image:url(http://localhost:8000/wp-content/uploads/2019/04/Screenshot-2019-04-15-at-13.02.17-1.png)"><p class="wp-block-cover-text">some title</p></div>\n<!-- /wp:cover -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core gallery', () => {
    const expected = [
      {
        blockName: 'core/gallery',
        attrs: { ids: [108, 109, 110, 111] },
        innerBlocks: [],
        innerHTML:
          '\n<ul class="wp-block-gallery columns-3 is-cropped"><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png" alt="" data-id="108" data-link="http://localhost:8000/?attachment_id=108" class="wp-image-108"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png" alt="" data-id="109" data-link="http://localhost:8000/?attachment_id=109" class="wp-image-109"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png" alt="" data-id="110" data-link="http://localhost:8000/?attachment_id=110" class="wp-image-110"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png" alt="" data-id="111" data-link="http://localhost:8000/?attachment_id=111" class="wp-image-111"/></figure></li></ul>\n',
        innerContent: [
          '\n<ul class="wp-block-gallery columns-3 is-cropped"><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png" alt="" data-id="108" data-link="http://localhost:8000/?attachment_id=108" class="wp-image-108"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png" alt="" data-id="109" data-link="http://localhost:8000/?attachment_id=109" class="wp-image-109"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png" alt="" data-id="110" data-link="http://localhost:8000/?attachment_id=110" class="wp-image-110"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png" alt="" data-id="111" data-link="http://localhost:8000/?attachment_id=111" class="wp-image-111"/></figure></li></ul>\n',
        ],
      },
    ];

    const input = '<!-- wp:gallery {"ids":[108,109,110,111]} -->\n<ul class="wp-block-gallery columns-3 is-cropped"><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17.png" alt="" data-id="108" data-link="http://localhost:8000/?attachment_id=108" class="wp-image-108"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31.png" alt="" data-id="109" data-link="http://localhost:8000/?attachment_id=109" class="wp-image-109"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot -2019-04-15-at-13.02.17-1.png" alt="" data-id="110" data-link="http://localhost:8000/?attachment_id=110" class="wp-image-110"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-16.54.31-1.png" alt="" data-id="111" data-link="http://localhost:8000/?attachment_id=111" class="wp-image-111"/></figure></li></ul>\n<!-- /wp:gallery -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse classic', () => {
    const expected = [
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
      {
        blockName: 'core/paragraph',
        attrs: {},
        innerBlocks: [],
        innerHTML: '\n<p>gutenberg paragraph</p>\n',
        innerContent: ['\n<p>gutenberg paragraph</p>\n'],
      },
    ];

    const input = '<p>Paragraph</p>\n<p><strong>Bold</strong></p>\n<p><em>Italics</em></p>\n<ul>\n<li>bullet 1</li>\n<li>bullet 2</li>\n</ul>\n<ol>\n<li>number 1</li>\n<li>number 2</li>\n</ol>\n<blockquote>\n<p>quote of a person</p>\n</blockquote>\n<p style="text-align: left;">align left</p>\n<p style="text-align: center;">align center</p>\n<p style="text-align: right;">alight right</p>\n<p><a href="http://localhost:8000/?p=69" data-wplink-url-error="true">Ocelot</a></p>\n<p><!--more--></p>\n<p><img class="alignnone size-full wp-image-113" src="http://localhost:8000/wp-content/uploads/2019/05/Screenshot-2019-04-15-at-13.02.17-2.png" alt="" width="111" height="46"></p>\n<p><del>strikethrough</del></p>\n<hr>\n<p><span style="color: #ff0000;">red</span></p>\n<p><span style="color: #000000;">\u00a2\u00b6</span></p>\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n<pre>Preformatted</pre>\n\n<!-- wp:paragraph -->\n<p>gutenberg paragraph</p>\n<!-- /wp:paragraph -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse classic list', () => {
    const expected = [
      {
        blockName: null,
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '<ul>\n \t<li>a</li>\n \t<li>b</li>\n \t<li>c</li>\n \t<li>d</li>\n</ul>',
        innerContent: [
          '<ul>\n \t<li>a</li>\n \t<li>b</li>\n \t<li>c</li>\n \t<li>d</li>\n</ul>',
        ],
      },
    ];

    const input = '<ul>\n \t<li>a</li>\n \t<li>b</li>\n \t<li>c</li>\n \t<li>d</li>\n</ul>';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core audio', () => {
    const expected = [
      {
        blockName: 'core/audio',
        attrs: { id: 60 },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-audio"><audio controls src="https://localhost/admin/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.mp3"></audio><figcaption>audio caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-audio"><audio controls src="https://localhost/admin/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.mp3"></audio><figcaption>audio caption</figcaption></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:audio {"id":60} -->\n<figure class="wp-block-audio"><audio controls src="https://localhost/admin/wp-content/uploads/2019/07/sound_for_testing_pushy-online-audio-converter.com_.mp3"></audio><figcaption>audio caption</figcaption></figure>\n<!-- /wp:audio -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core file', () => {
    const expected = [
      {
        blockName: 'core/file',
        attrs: {
          id: 63,
          href:
            'https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip',
        },
        innerBlocks: [],
        innerHTML:
          '\n<div class="wp-block-file"><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip">pushy-0.0.12</a><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip" class="wp-block-file__button" download>Download</a></div>\n',
        innerContent: [
          '\n<div class="wp-block-file"><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip">pushy-0.0.12</a><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip" class="wp-block-file__button" download>Download</a></div>\n',
        ],
      },
    ];

    const input = '<!-- wp:file {"id":63,"href":"https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip"} -->\n<div class="wp-block-file"><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip">pushy-0.0.12</a><a href="https://localhost/admin/wp-content/uploads/2019/07/pushy-0.0.12.zip" class="wp-block-file__button" download>Download</a></div>\n<!-- /wp:file -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core video', () => {
    const expected = [
      {
        blockName: 'core/video',
        attrs: { id: 67 },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-video"><video controls src="https://localhost/admin/wp-content/uploads/2019/07/test_for_pushy_2.mov"></video><figcaption>caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-video"><video controls src="https://localhost/admin/wp-content/uploads/2019/07/test_for_pushy_2.mov"></video><figcaption>caption</figcaption></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:video {"id":67} -->\n<figure class="wp-block-video"><video controls src="https://localhost/admin/wp-content/uploads/2019/07/test_for_pushy_2.mov"></video><figcaption>caption</figcaption></figure>\n<!-- /wp:video -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core code', () => {
    const expected = [
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

    const input = '<!-- wp:code -->\n<pre class="wp-block-code"><code>[php]\n&lt;?php\necho "Hello World";\n?>\n[/php]</code></pre>\n<!-- /wp:code -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core html', () => {
    const expected = [
      {
        blockName: 'core/html',
        attrs: {},
        innerBlocks: [],
        innerHTML: '\n<div><p>Hi Tom</p></div>\n',
        innerContent: ['\n<div><p>Hi Tom</p></div>\n'],
      },
    ];

    const input = '<!-- wp:html -->\n<div><p>Hi Tom</p></div>\n<!-- /wp:html -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core preformatted', () => {
    const expected = [
      {
        blockName: 'core/preformatted',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<pre class="wp-block-preformatted">I have no idea what this is</pre>\n',
        innerContent: [
          '\n<pre class="wp-block-preformatted">I have no idea what this is</pre>\n',
        ],
      },
    ];

    const input = '<!-- wp:preformatted -->\n<pre class="wp-block-preformatted">I have no idea what this is</pre>\n<!-- /wp:preformatted -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core pullquote', () => {
    const expected = [
      {
        blockName: 'core/pullquote',
        attrs: {
          mainColor: 'primary',
          textColor: 'secondary',
          className: 'is-style-default',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-pullquote is-style-default" style="border-color:#0073a8"><blockquote class="has-text-color has-secondary-color"><p>what is a pull quote?</p><cite>This is a citation</cite></blockquote></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-pullquote is-style-default" style="border-color:#0073a8"><blockquote class="has-text-color has-secondary-color"><p>what is a pull quote?</p><cite>This is a citation</cite></blockquote></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:pullquote {"mainColor":"primary","textColor":"secondary","className":"is-style-default"} -->\n<figure class="wp-block-pullquote is-style-default" style="border-color:#0073a8"><blockquote class="has-text-color has-secondary-color"><p>what is a pull quote?</p><cite>This is a citation</cite></blockquote></figure>\n<!-- /wp:pullquote -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core table', () => {
    const expected = [
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

    const input = '<!-- wp:table -->\n<table class="wp-block-table"><tbody><tr><td>header1</td><td>header2</td></tr><tr><td>value1</td><td>value2</td></tr></tbody></table>\n<!-- /wp:table -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core verse', () => {
    const expected = [
      {
        blockName: 'core/verse',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n<pre class="wp-block-verse">I have no idea what a verse is apparently its poetry</pre>\n',
        innerContent: [
          '\n<pre class="wp-block-verse">I have no idea what a verse is apparently its poetry</pre>\n',
        ],
      },
    ];

    const input = '<!-- wp:verse -->\n<pre class="wp-block-verse">I have no idea what a verse is apparently its poetry</pre>\n<!-- /wp:verse -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core button', () => {
    const expected = [
      {
        blockName: 'core/button',
        attrs: { backgroundColor: 'primary', textColor: 'white' },
        innerBlocks: [],
        innerHTML:
          '\n<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-white-color has-background has-primary-background-color" href="http://www.bbc.co.uk">button text</a></div>\n',
        innerContent: [
          '\n<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-white-color has-background has-primary-background-color" href="http://www.bbc.co.uk">button text</a></div>\n',
        ],
      },
    ];

    const input = '<!-- wp:button {"backgroundColor":"primary","textColor":"white"} -->\n<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-white-color has-background has-primary-background-color" href="http://www.bbc.co.uk">button text</a></div>\n<!-- /wp:button -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core media & text', () => {
    const expected = [
      {
        blockName: 'core/media-text',
        attrs: {
          backgroundColor: 'light-gray',
          mediaId: 48,
          mediaType: 'image',
          isStackedOnMobile: true,
        },
        innerBlocks: [
          {
            blockName: 'core/paragraph',
            attrs: { placeholder: 'Content…', fontSize: 'large' },
            innerBlocks: [],
            innerHTML: '\n<p class="has-large-font-size">some content</p>\n',
            innerContent: [
              '\n<p class="has-large-font-size">some content</p>\n',
            ],
          },
        ],
        innerHTML:
          '\n<div class="wp-block-media-text alignwide has-light-gray-background-color is-stacked-on-mobile"><figure class="wp-block-media-text__media"><img src="https://localhost/admin/wp-content/uploads/2019/06/ocelot_logo.png" alt="alt text here" class="wp-image-48"/></figure><div class="wp-block-media-text__content"></div></div>\n',
        innerContent: [
          '\n<div class="wp-block-media-text alignwide has-light-gray-background-color is-stacked-on-mobile"><figure class="wp-block-media-text__media"><img src="https://localhost/admin/wp-content/uploads/2019/06/ocelot_logo.png" alt="alt text here" class="wp-image-48"/></figure><div class="wp-block-media-text__content">',
          null,
          '</div></div>\n',
        ],
      },
    ];

    const input = '<!-- wp:media-text {"backgroundColor":"light-gray","mediaId":48,"mediaType":"image","isStackedOnMobile":true} -->\n<div class="wp-block-media-text alignwide has-light-gray-background-color is-stacked-on-mobile"><figure class="wp-block-media-text__media"><img src="https://localhost/admin/wp-content/uploads/2019/06/ocelot_logo.png" alt="alt text here" class="wp-image-48"/></figure><div class="wp-block-media-text__content"><!-- wp:paragraph {"placeholder":"Content\u2026","fontSize":"large"} -->\n<p class="has-large-font-size">some content</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:media-text -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core more', () => {
    const expected = [
      {
        blockName: 'core/more',
        attrs: { customText: 'READ SOME MORE' },
        innerBlocks: [],
        innerHTML: '\n<!--more READ SOME MORE-->\n',
        innerContent: ['\n<!--more READ SOME MORE-->\n'],
      },
    ];

    const input = '<!-- wp:more {"customText":"READ SOME MORE"} -->\n<!--more READ SOME MORE-->\n<!-- /wp:more -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core page break', () => {
    const expected = [
      {
        blockName: 'core/nextpage',
        attrs: {},
        innerBlocks: [],
        innerHTML: '\n<!--nextpage-->\n',
        innerContent: ['\n<!--nextpage-->\n'],
      },
    ];

    const input = '<!-- wp:nextpage -->\n<!--nextpage-->\n<!-- /wp:nextpage -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core seperator', () => {
    const expected = [
      {
        blockName: 'core/separator',
        attrs: { className: 'is-style-dots' },
        innerBlocks: [],
        innerHTML: '\n<hr class="wp-block-separator is-style-dots"/>\n',
        innerContent: ['\n<hr class="wp-block-separator is-style-dots"/>\n'],
      },
    ];

    const input = '<!-- wp:separator {"className":"is-style-dots"} -->\n<hr class="wp-block-separator is-style-dots"/>\n<!-- /wp:separator -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core spacer', () => {
    const expected = [
      {
        blockName: 'core/spacer',
        attrs: { height: 1000 },
        innerBlocks: [],
        innerHTML:
          '\n<div style="height:1000px" aria-hidden="true" class="wp-block-spacer"></div>\n',
        innerContent: [
          '\n<div style="height:1000px" aria-hidden="true" class="wp-block-spacer"></div>\n',
        ],
      },
    ];

    const input = '<!-- wp:spacer {"height":1000} -->\n<div style="height:1000px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core shortcode', () => {
    const expected = [
      {
        blockName: 'core/shortcode',
        attrs: {},
        innerBlocks: [],
        innerHTML:
          '\n[su_box title="Box title" style="default" box_color="#333333" title_color="#FFFFFF" radius="3" class=""]Box content[/su_box]\n',
        innerContent: [
          '\n[su_box title="Box title" style="default" box_color="#333333" title_color="#FFFFFF" radius="3" class=""]Box content[/su_box]\n',
        ],
      },
    ];

    const input = '<!-- wp:shortcode -->\n[su_box title="Box title" style="default" box_color="#333333" title_color="#FFFFFF" radius="3" class=""]Box content[/su_box]\n<!-- /wp:shortcode -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core archives', () => {
    const expected = [
      {
        blockName: 'core/archives',
        attrs: { showPostCounts: true },
        innerBlocks: [],
        innerHTML: '',
        innerContent: [],
      },
    ];

    const input = '<!-- wp:archives {"showPostCounts":true} /-->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core calendar', () => {
    const expected = [
      {
        blockName: 'core/calendar',
        attrs: {},
        innerBlocks: [],
        innerHTML: '',
        innerContent: [],
      },
    ];

    const input = '<!-- wp:calendar /-->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core categories', () => {
    const expected = [
      {
        blockName: 'core/categories',
        attrs: {
          showPostCounts: true,
          displayAsDropdown: true,
          showHierarchy: true,
        },
        innerBlocks: [],
        innerHTML: '',
        innerContent: [],
      },
    ];

    const input = '<!-- wp:categories {"displayAsDropdown":true,"showHierarchy":true,"showPostCounts":true} /-->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core latest comments', () => {
    const expected = [
      {
        blockName: 'core/latest-comments',
        attrs: {},
        innerBlocks: [],
        innerHTML: '',
        innerContent: [],
      },
    ];

    const input = '<!-- wp:latest-comments /-->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core latest posts', () => {
    const expected = [
      {
        blockName: 'core/latest-posts',
        attrs: { postsToShow: 6, displayPostDate: true, order: 'asc' },
        innerBlocks: [],
        innerHTML: '',
        innerContent: [],
      },
    ];

    const input = '<!-- wp:latest-posts {"postsToShow":6,"displayPostDate":true,"order":"asc"} /-->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core rss', () => {
    const expected = [
      {
        blockName: 'core/rss',
        attrs: {
          feedURL: 'https://lorem-rss.herokuapp.com/feed',
          displayExcerpt: true,
          displayAuthor: true,
          displayDate: true,
          excerptLength: 20,
        },
        innerBlocks: [],
        innerHTML: '',
        innerContent: [],
      },
    ];

    const input = '<!-- wp:rss {"feedURL":"https://lorem-rss.herokuapp.com/feed","displayExcerpt":true,"displayAuthor":true,"displayDate":true,"excerptLength":20} /-->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core search', () => {
    const expected = [
      {
        blockName: 'core/search',
        attrs: {
          placeholder: 'placeholder text',
        },
        innerBlocks: [],
        innerHTML: '',
        innerContent: [],
      },
    ];

    const input = '<!-- wp:search {"placeholder":"placeholder text"} /-->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core tag cloud', () => {
    const expected = [
      {
        blockName: 'core/tag-cloud',
        attrs: {
          taxonomy: 'category',
          showTagCounts: true,
        },
        innerBlocks: [],
        innerHTML: '',
        innerContent: [],
      },
    ];

    const input = '<!-- wp:tag-cloud {"taxonomy":"category","showTagCounts":true} /-->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded twitter', () => {
    const expected = [
      {
        blockName: 'core-embed/twitter',
        attrs: {
          url:
            'https://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw',
          type: 'rich',
          providerNameSlug: 'twitter',
          className: '',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-twitter wp-block-embed is-type-rich is-provider-twitter"><div class="wp-block-embed__wrapper">\nhttps://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw\n</div></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-twitter wp-block-embed is-type-rich is-provider-twitter"><div class="wp-block-embed__wrapper">\nhttps://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw\n</div></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:core-embed/twitter {"url":"https://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw","type":"rich","providerNameSlug":"twitter","className":""} -->\n<figure class="wp-block-embed-twitter wp-block-embed is-type-rich is-provider-twitter"><div class="wp-block-embed__wrapper">\nhttps://twitter.com/CraigBilner/status/1030552169630580736?ref_src=twsrc%5Etfw\n</div></figure>\n<!-- /wp:core-embed/twitter -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded youtube', () => {
    const expected = [
      {
        blockName: 'core-embed/youtube',
        attrs: {
          url: 'https://www.youtube.com/watch?v=pNfTK39k55U',
          type: 'video',
          providerNameSlug: 'youtube',
          className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.youtube.com/watch?v=pNfTK39k55U\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.youtube.com/watch?v=pNfTK39k55U\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=pNfTK39k55U","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.youtube.com/watch?v=pNfTK39k55U\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/youtube -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded facebook', () => {
    const expected = [
      {
        blockName: 'core-embed/facebook',
        attrs: {
          url: 'https://www.facebook.com/20531316728/posts/10154009990506729/',
          type: 'rich',
          providerNameSlug: 'facebook',
          className: '',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-facebook wp-block-embed is-type-rich is-provider-facebook"><div class="wp-block-embed__wrapper">\nhttps://www.facebook.com/20531316728/posts/10154009990506729/\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-facebook wp-block-embed is-type-rich is-provider-facebook"><div class="wp-block-embed__wrapper">\nhttps://www.facebook.com/20531316728/posts/10154009990506729/\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:core-embed/facebook {"url":"https://www.facebook.com/20531316728/posts/10154009990506729/","type":"rich","providerNameSlug":"facebook","className":""} -->\n<figure class="wp-block-embed-facebook wp-block-embed is-type-rich is-provider-facebook"><div class="wp-block-embed__wrapper">\nhttps://www.facebook.com/20531316728/posts/10154009990506729/\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/facebook -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded instagram', () => {
    const expected = [
      {
        blockName: 'core-embed/instagram',
        attrs: {
          url: 'http://instagr.am/p/fA9uwTtkSN/',
          type: 'rich',
          providerNameSlug: 'instagram',
          className: '',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-instagram wp-block-embed is-type-rich is-provider-instagram"><div class="wp-block-embed__wrapper">\nhttp://instagr.am/p/fA9uwTtkSN/\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-instagram wp-block-embed is-type-rich is-provider-instagram"><div class="wp-block-embed__wrapper">\nhttp://instagr.am/p/fA9uwTtkSN/\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:core-embed/instagram {"url":"http://instagr.am/p/fA9uwTtkSN/","type":"rich","providerNameSlug":"instagram","className":""} -->\n<figure class="wp-block-embed-instagram wp-block-embed is-type-rich is-provider-instagram"><div class="wp-block-embed__wrapper">\nhttp://instagr.am/p/fA9uwTtkSN/\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/instagram -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded wordpress', () => {
    const expected = [
      {
        blockName: 'core-embed/wordpress',
        attrs: {
          url:
            'https://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/',
          type: 'wp-embed',
          providerNameSlug: 'wordpress-news',
          className: '',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-wordpress-news"><div class="wp-block-embed__wrapper">\nhttps://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-wordpress-news"><div class="wp-block-embed__wrapper">\nhttps://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:core-embed/wordpress {"url":"https://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/","type":"wp-embed","providerNameSlug":"wordpress-news","className":""} -->\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-wordpress-news"><div class="wp-block-embed__wrapper">\nhttps://wordpress.org/news/2019/06/wordpress-5-2-2-maintenance-release/\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/wordpress -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded soundcloud', () => {
    const expected = [
      {
        blockName: 'core-embed/soundcloud',
        attrs: {
          url: 'https://soundcloud.com/olly-hodding/lotn',
          type: 'rich',
          providerNameSlug: 'soundcloud',
          className: 'wp-embed-aspect-4-3 wp-has-aspect-ratio',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-soundcloud wp-block-embed is-type-rich is-provider-soundcloud wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://soundcloud.com/olly-hodding/lotn\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-soundcloud wp-block-embed is-type-rich is-provider-soundcloud wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://soundcloud.com/olly-hodding/lotn\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:core-embed/soundcloud {"url":"https://soundcloud.com/olly-hodding/lotn","type":"rich","providerNameSlug":"soundcloud","className":"wp-embed-aspect-4-3 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-soundcloud wp-block-embed is-type-rich is-provider-soundcloud wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://soundcloud.com/olly-hodding/lotn\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/soundcloud -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded spotify', () => {
    const expected = [
      {
        blockName: 'core-embed/spotify',
        attrs: {
          url: 'https://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z',
          type: 'rich',
          providerNameSlug: 'spotify',
          className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:core-embed/spotify {"url":"https://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z","type":"rich","providerNameSlug":"spotify","className":"wp-embed-aspect-9-16 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://open.spotify.com/track/3f9Mzvd3URfbbIJBX4pz9Z\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/spotify -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded flickr', () => {
    const expected = [
      {
        blockName: 'core-embed/flickr',
        attrs: {
          url:
            'https://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY',
          type: 'photo',
          providerNameSlug: 'flickr',
          className: '',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-flickr wp-block-embed is-type-photo is-provider-flickr"><div class="wp-block-embed__wrapper">\nhttps://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-flickr wp-block-embed is-type-photo is-provider-flickr"><div class="wp-block-embed__wrapper">\nhttps://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:core-embed/flickr {"url":"https://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY","type":"photo","providerNameSlug":"flickr","className":""} -->\n<figure class="wp-block-embed-flickr wp-block-embed is-type-photo is-provider-flickr"><div class="wp-block-embed__wrapper">\nhttps://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/flickr -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded vimeo', () => {
    const expected = [
      {
        blockName: 'core-embed/vimeo',
        attrs: {
          url: 'https://vimeo.com/346788825',
          type: 'video',
          providerNameSlug: 'vimeo',
          className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://vimeo.com/346788825\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://vimeo.com/346788825\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:core-embed/vimeo {"url":"https://vimeo.com/346788825","type":"video","providerNameSlug":"vimeo","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-vimeo wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://vimeo.com/346788825\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/vimeo -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded animoto', () => {
    const expected = [
      {
        blockName: 'core-embed/animoto',
        attrs: {
          url: 'https://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug',
          type: 'video',
          providerNameSlug: 'animoto',
          className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        },
        innerBlocks: [],
        innerHTML:
          '\n<figure class="wp-block-embed-animoto wp-block-embed is-type-video is-provider-animoto wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug\n</div><figcaption>test caption</figcaption></figure>\n',
        innerContent: [
          '\n<figure class="wp-block-embed-animoto wp-block-embed is-type-video is-provider-animoto wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug\n</div><figcaption>test caption</figcaption></figure>\n',
        ],
      },
    ];

    const input = '<!-- wp:core-embed/animoto {"url":"https://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug","type":"video","providerNameSlug":"animoto","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-animoto wp-block-embed is-type-video is-provider-animoto wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://animoto.com/play/V1s0M1y1eK9xl3sjg1hmug\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/animoto -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded cloudup', () => {
    const expected = [{
      blockName: 'core-embed/cloudup',
      attrs:
     {
       url: 'https://cloudup.com/i_7_kWIw2ST',
       type: 'photo',
       providerNameSlug: 'cloudup',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-cloudup wp-block-embed is-type-photo is-provider-cloudup"><div class="wp-block-embed__wrapper">\nhttps://cloudup.com/i_7_kWIw2ST\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-cloudup wp-block-embed is-type-photo is-provider-cloudup"><div class="wp-block-embed__wrapper">\nhttps://cloudup.com/i_7_kWIw2ST\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/cloudup {"url":"https://cloudup.com/i_7_kWIw2ST","type":"photo","providerNameSlug":"cloudup","className":""} -->\n<figure class="wp-block-embed-cloudup wp-block-embed is-type-photo is-provider-cloudup"><div class="wp-block-embed__wrapper">\nhttps://cloudup.com/i_7_kWIw2ST\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/cloudup -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded college humor', () => {
    const expected = [{
      blockName: 'core-embed/collegehumor',
      attrs:
     {
       url: 'http://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas',
       type: 'video',
       providerNameSlug: 'collegehumor',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-collegehumor wp-block-embed is-type-video is-provider-collegehumor wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttp://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-collegehumor wp-block-embed is-type-video is-provider-collegehumor wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttp://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/collegehumor {"url":"http://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas","type":"video","providerNameSlug":"collegehumor","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-collegehumor wp-block-embed is-type-video is-provider-collegehumor wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttp://www.collegehumor.com/oembed.xml?url=http://www.collegehumor.com/video/6669821/the-twelve-beards-of-christmas\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/collegehumor -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded crowdsignal', () => {
    const expected = [{
      blockName: 'core-embed/crowdsignal',
      attrs:
     {
       url: 'https://tomgardhampallister.survey.fm/untitled-survey',
       type: 'rich',
       providerNameSlug: 'crowdsignal',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-crowdsignal wp-block-embed is-type-rich is-provider-crowdsignal"><div class="wp-block-embed__wrapper">\nhttps://tomgardhampallister.survey.fm/untitled-survey\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-crowdsignal wp-block-embed is-type-rich is-provider-crowdsignal"><div class="wp-block-embed__wrapper">\nhttps://tomgardhampallister.survey.fm/untitled-survey\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/crowdsignal {"url":"https://tomgardhampallister.survey.fm/untitled-survey","type":"rich","providerNameSlug":"crowdsignal","className":""} -->\n<figure class="wp-block-embed-crowdsignal wp-block-embed is-type-rich is-provider-crowdsignal"><div class="wp-block-embed__wrapper">\nhttps://tomgardhampallister.survey.fm/untitled-survey\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/crowdsignal -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded dailymotion', () => {
    const expected = [{
      blockName: 'core-embed/dailymotion',
      attrs:
     {
       url: 'https://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw',
       type: 'video',
       providerNameSlug: 'dailymotion',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-dailymotion wp-block-embed is-type-video is-provider-dailymotion wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-dailymotion wp-block-embed is-type-video is-provider-dailymotion wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/dailymotion {"url":"https://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw","type":"video","providerNameSlug":"dailymotion","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-dailymotion wp-block-embed is-type-video is-provider-dailymotion wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.dailymotion.com/video/x7bxlzh?playlist=x6ffqw\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/dailymotion -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded hulu', () => {
    const expected = [{
      blockName: 'core-embed/hulu',
      attrs:
     {
       url: 'https://www.hulu.com/watch/771496',
       type: 'video',
       providerNameSlug: 'hulu',
       className: 'wp-embed-aspect-4-3 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-hulu wp-block-embed is-type-video is-provider-hulu wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.hulu.com/watch/771496\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-hulu wp-block-embed is-type-video is-provider-hulu wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.hulu.com/watch/771496\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/hulu {"url":"https://www.hulu.com/watch/771496","type":"video","providerNameSlug":"hulu","className":"wp-embed-aspect-4-3 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-hulu wp-block-embed is-type-video is-provider-hulu wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.hulu.com/watch/771496\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/hulu -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded imgur', () => {
    const expected = [{
      blockName: 'core-embed/imgur',
      attrs:
     {
       url: 'https://imgur.com/a/p0R6NP1',
       type: 'rich',
       providerNameSlug: 'imgur',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-imgur wp-block-embed is-type-rich is-provider-imgur"><div class="wp-block-embed__wrapper">\nhttps://imgur.com/a/p0R6NP1\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-imgur wp-block-embed is-type-rich is-provider-imgur"><div class="wp-block-embed__wrapper">\nhttps://imgur.com/a/p0R6NP1\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/imgur {"url":"https://imgur.com/a/p0R6NP1","type":"rich","providerNameSlug":"imgur","className":""} -->\n<figure class="wp-block-embed-imgur wp-block-embed is-type-rich is-provider-imgur"><div class="wp-block-embed__wrapper">\nhttps://imgur.com/a/p0R6NP1\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/imgur -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded issuu', () => {
    const expected = [{
      blockName: 'core-embed/issuu',
      attrs:
     {
       url: 'https://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96',
       type: 'rich',
       providerNameSlug: 'issuu',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-issuu wp-block-embed is-type-rich is-provider-issuu"><div class="wp-block-embed__wrapper">\nhttps://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-issuu wp-block-embed is-type-rich is-provider-issuu"><div class="wp-block-embed__wrapper">\nhttps://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/issuu {"url":"https://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96","type":"rich","providerNameSlug":"issuu","className":""} -->\n<figure class="wp-block-embed-issuu wp-block-embed is-type-rich is-provider-issuu"><div class="wp-block-embed__wrapper">\nhttps://issuu.com/dujour/docs/dujour_summer2019_issuu_smallerfile/96\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/issuu -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded kickstarter', () => {
    const expected = [{
      blockName: 'core-embed/kickstarter',
      attrs:
     {
       url: 'https://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks',
       type: 'rich',
       providerNameSlug: 'kickstarter',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-kickstarter wp-block-embed is-type-rich is-provider-kickstarter wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-kickstarter wp-block-embed is-type-rich is-provider-kickstarter wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/kickstarter {"url":"https://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks","type":"rich","providerNameSlug":"kickstarter","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-kickstarter wp-block-embed is-type-rich is-provider-kickstarter wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.kickstarter.com/projects/wolfofbaghdad/the-wolf-of-baghdad-soundtrack?ref=discovery_staff_picks\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/kickstarter -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });


  it('should parse core embded meetup.com', () => {
    const expected = [{
      blockName: 'core-embed/meetup-com',
      attrs:
     {
       url: 'https://www.meetup.com/LabCentral/events/ptcmbryzkbnb/',
       type: 'rich',
       providerNameSlug: 'meetup',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-meetup-com wp-block-embed is-type-rich is-provider-meetup"><div class="wp-block-embed__wrapper">\nhttps://www.meetup.com/LabCentral/events/ptcmbryzkbnb/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-meetup-com wp-block-embed is-type-rich is-provider-meetup"><div class="wp-block-embed__wrapper">\nhttps://www.meetup.com/LabCentral/events/ptcmbryzkbnb/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/meetup-com {"url":"https://www.meetup.com/LabCentral/events/ptcmbryzkbnb/","type":"rich","providerNameSlug":"meetup","className":""} -->\n<figure class="wp-block-embed-meetup-com wp-block-embed is-type-rich is-provider-meetup"><div class="wp-block-embed__wrapper">\nhttps://www.meetup.com/LabCentral/events/ptcmbryzkbnb/\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/meetup-com -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded mixcloud', () => {
    const expected = [{
      blockName: 'core-embed/mixcloud',
      attrs:
     {
       url: 'https://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/',
       type: 'rich',
       providerNameSlug: 'mixcloud',
       className: 'wp-embed-aspect-21-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-mixcloud wp-block-embed is-type-rich is-provider-mixcloud wp-embed-aspect-21-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-mixcloud wp-block-embed is-type-rich is-provider-mixcloud wp-embed-aspect-21-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/mixcloud {"url":"https://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/","type":"rich","providerNameSlug":"mixcloud","className":"wp-embed-aspect-21-9 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-mixcloud wp-block-embed is-type-rich is-provider-mixcloud wp-embed-aspect-21-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.mixcloud.com/Tonepoet/the-world-has-not-forgotten-you/\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/mixcloud -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded reddit', () => {
    const expected = [{
      blockName: 'core-embed/reddit',
      attrs:
     {
       url: 'https://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/',
       type: 'rich',
       providerNameSlug: 'reddit',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-reddit wp-block-embed is-type-rich is-provider-reddit"><div class="wp-block-embed__wrapper">\nhttps://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-reddit wp-block-embed is-type-rich is-provider-reddit"><div class="wp-block-embed__wrapper">\nhttps://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/reddit {"url":"https://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/","type":"rich","providerNameSlug":"reddit","className":""} -->\n<figure class="wp-block-embed-reddit wp-block-embed is-type-rich is-provider-reddit"><div class="wp-block-embed__wrapper">\nhttps://www.reddit.com/r/HighQualityGifs/comments/cayxj5/i_reject_your_reality_and_substitute_my_own/\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/reddit -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded reverbnation', () => {
    const expected = [{
      blockName: 'core-embed/reverbnation',
      attrs:
     {
       url: 'https://www.reverbnation.com/eames1',
       type: 'rich',
       providerNameSlug: '',
       className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/reverbnation {"url":"https://www.reverbnation.com/eames1","type":"rich","providerNameSlug":"","className":"wp-embed-aspect-9-16 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/reverbnation -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded screencast', () => {
    const expected = [{
      blockName: 'core-embed/screencast',
      attrs:
     {
       url: 'https://www.reverbnation.com/eames1',
       type: 'rich',
       providerNameSlug: '',
       className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/screencast {"url":"https://www.reverbnation.com/eames1","type":"rich","providerNameSlug":"","className":"wp-embed-aspect-9-16 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/reverbnation -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded scribd', () => {
    const expected = [{
      blockName: 'core-embed/scribd',
      attrs:
     {
       url: 'https://www.reverbnation.com/eames1',
       type: 'rich',
       providerNameSlug: '',
       className: 'wp-embed-aspect-9-16 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/scribd {"url":"https://www.reverbnation.com/eames1","type":"rich","providerNameSlug":"","className":"wp-embed-aspect-9-16 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-reverbnation wp-block-embed is-type-rich wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.reverbnation.com/eames1\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/reverbnation -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded slideshare', () => {
    const expected = [{
      blockName: 'core-embed/slideshare',
      attrs:
     {
       url: 'https://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540',
       type: 'rich',
       providerNameSlug: 'slideshare',
       className: 'wp-embed-aspect-1-1 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-slideshare wp-block-embed is-type-rich is-provider-slideshare wp-embed-aspect-1-1 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-slideshare wp-block-embed is-type-rich is-provider-slideshare wp-embed-aspect-1-1 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/slideshare {"url":"https://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540","type":"rich","providerNameSlug":"slideshare","className":"wp-embed-aspect-1-1 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-slideshare wp-block-embed is-type-rich is-provider-slideshare wp-embed-aspect-1-1 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.slideshare.net/NVIDIA/top-5-deep-learning-and-ai-stories-october-6-2017-80543540\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/slideshare -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded smugmug', () => {
    const expected = [{
      blockName: 'core-embed/smugmug',
      attrs:
     {
       url: 'https://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr',
       type: 'photo',
       providerNameSlug: 'smugmug',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-smugmug wp-block-embed is-type-photo is-provider-smugmug"><div class="wp-block-embed__wrapper">\nhttps://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-smugmug wp-block-embed is-type-photo is-provider-smugmug"><div class="wp-block-embed__wrapper">\nhttps://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/smugmug {"url":"https://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr","type":"photo","providerNameSlug":"smugmug","className":""} -->\n<figure class="wp-block-embed-smugmug wp-block-embed is-type-photo is-provider-smugmug"><div class="wp-block-embed__wrapper">\nhttps://lgood.smugmug.com/Daily-Photos/Daily-Photos-1/i-h44R7qr\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/smugmug -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded speaker deck', () => {
    const expected = [{
      blockName: 'core-embed/speaker-deck',
      attrs:
     {
       url: 'https://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19',
       type: 'rich',
       providerNameSlug: 'speaker-deck',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-speaker-deck wp-block-embed is-type-rich is-provider-speaker-deck wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-speaker-deck wp-block-embed is-type-rich is-provider-speaker-deck wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/speaker-deck {"url":"https://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19","type":"rich","providerNameSlug":"speaker-deck","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-speaker-deck wp-block-embed is-type-rich is-provider-speaker-deck wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://speakerdeck.com/danielanewman/im-feeling-lucky-building-great-search-experiences-for-todays-users-number-iac19\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/speaker-deck -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded ted', () => {
    const expected = [{
      blockName: 'core-embed/ted',
      attrs:
     {
       url: 'https://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy',
       type: 'video',
       providerNameSlug: 'ted',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-ted wp-block-embed is-type-video is-provider-ted wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-ted wp-block-embed is-type-video is-provider-ted wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/ted {"url":"https://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy","type":"video","providerNameSlug":"ted","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-ted wp-block-embed is-type-video is-provider-ted wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://www.ted.com/talks/rick_doblin_the_future_of_psychedelic_assisted_psychotherapy\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/ted -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded tumblr', () => {
    const expected = [{
      blockName: 'core-embed/tumblr',
      attrs:
     {
       url: 'https://disneyliveaction.tumblr.com/post/186003956312/the-pride',
       type: 'rich',
       providerNameSlug: 'tumblr',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-tumblr wp-block-embed is-type-rich is-provider-tumblr"><div class="wp-block-embed__wrapper">\nhttps://disneyliveaction.tumblr.com/post/186003956312/the-pride\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-tumblr wp-block-embed is-type-rich is-provider-tumblr"><div class="wp-block-embed__wrapper">\nhttps://disneyliveaction.tumblr.com/post/186003956312/the-pride\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/tumblr {"url":"https://disneyliveaction.tumblr.com/post/186003956312/the-pride","type":"rich","providerNameSlug":"tumblr","className":""} -->\n<figure class="wp-block-embed-tumblr wp-block-embed is-type-rich is-provider-tumblr"><div class="wp-block-embed__wrapper">\nhttps://disneyliveaction.tumblr.com/post/186003956312/the-pride\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/tumblr -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded videopress', () => {
    const expected = [{
      blockName: 'core-embed/videopress',
      attrs:
     {
       url: 'https://videopress.com/v/kUJmAcSf',
       type: 'video',
       providerNameSlug: 'videopress',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-videopress wp-block-embed is-type-video is-provider-videopress wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://videopress.com/v/kUJmAcSf\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-videopress wp-block-embed is-type-video is-provider-videopress wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://videopress.com/v/kUJmAcSf\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/videopress {"url":"https://videopress.com/v/kUJmAcSf","type":"video","providerNameSlug":"videopress","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-videopress wp-block-embed is-type-video is-provider-videopress wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://videopress.com/v/kUJmAcSf\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/videopress -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded wordpress.tv', () => {
    const expected = [{
      blockName: 'core-embed/wordpress-tv',
      attrs:
     {
       url: 'https://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/',
       type: 'video',
       providerNameSlug: '',
       className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-wordpress-tv wp-block-embed is-type-video wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-wordpress-tv wp-block-embed is-type-video wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/wordpress-tv {"url":"https://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/","type":"video","providerNameSlug":"","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-wordpress-tv wp-block-embed is-type-video wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://wordpress.tv/2019/07/04/matt-mullenweg-matt-on-wordpress/\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/wordpress-tv -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded amazon kindle', () => {
    const expected = [{
      blockName: 'core-embed/amazon-kindle',
      attrs:
     {
       url: 'https://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_86qjDbK869J7J',
       type: 'rich',
       providerNameSlug: 'amazon',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-amazon-kindle wp-block-embed is-type-rich is-provider-amazon"><div class="wp-block-embed__wrapper">\nhttps://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_86qjDbK869J7J\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-amazon-kindle wp-block-embed is-type-rich is-provider-amazon"><div class="wp-block-embed__wrapper">\nhttps://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_86qjDbK869J7J\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/amazon-kindle {"url":"https://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y\u0026preview=newtab\u0026linkCode=kpe\u0026ref_=cm_sw_r_kb_dp_86qjDbK869J7J","type":"rich","providerNameSlug":"amazon","className":""} -->\n<figure class="wp-block-embed-amazon-kindle wp-block-embed is-type-rich is-provider-amazon"><div class="wp-block-embed__wrapper">\nhttps://read.amazon.co.uk/kp/embed?asin=B00SHL3U2Y&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_86qjDbK869J7J\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/amazon-kindle -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse core embded', () => {
    const expected = [{
      blockName: 'core-embed/wordpress',
      attrs:
     {
       url: 'https://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments',
       type: 'wp-embed',
       providerNameSlug: 'gfycat',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-gfycat"><div class="wp-block-embed__wrapper">\nhttps://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-gfycat"><div class="wp-block-embed__wrapper">\nhttps://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];

    const input = '<!-- wp:core-embed/wordpress {"url":"https://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments","type":"wp-embed","providerNameSlug":"gfycat","className":""} -->\n<figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-gfycat"><div class="wp-block-embed__wrapper">\nhttps://gfycat.com/unnaturalfluffygnatcatcher-overwatch-amazing-plays-funny-moments\n</div><figcaption>test caption</figcaption></figure>\n<!-- /wp:core-embed/wordpress -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });

  it('should parse paragraph with br', () => {
    const expected = [{
      blockName: 'core/paragraph',
      attrs: {},
      innerBlocks: [],
      innerHTML: '\n<p>text <br></p>\n',
      innerContent: ['\n<p>text <br></p>\n'],
    }];

    const input = '<!-- wp:paragraph -->\n<p>text <br></p>\n<!-- /wp:paragraph -->';

    const result = postContentToBlocks(input);

    expect(result).toEqual(expected);
  });
});
