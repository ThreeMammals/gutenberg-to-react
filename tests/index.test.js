const { gutenbergToReact } = require('../src/index');

describe('index', () => {
  it('end to end', () => {
    const expected = [{
      type: 'core/paragraph',
      ref: null,
      $$typeof: Symbol.for('react.element'),
      props: {
        style: {},
        className: null,
        children: [[{
          type: 'p',
          props: {
            style: {},
            className: null,
            children: ['text ', {
              type: 'br',
              props: {
                style: {},
                className: null,
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }],
          },
          $$typeof: Symbol.for('react.element'),
          ref: null,
        }]],
      },
    }];

    const input = '<!-- wp:paragraph -->\n<p>text <br></p>\n<!-- /wp:paragraph -->';

    const result = gutenbergToReact(input);

    expect(result).toEqual(expected);
  });
});
