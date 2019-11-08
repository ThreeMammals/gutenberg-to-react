const parseInlineStyles = styles => styles
  .split(';')
  .filter(el => el)
  .reduce((acc, curr) => {
    const firstColon = curr.indexOf(':');
    const key = curr.substring(0, firstColon).trim();
    const value = curr.substring(firstColon + 1).trim();
    acc[key] = value;
    return acc;
  }, {});

module.exports.parseInlineStyles = parseInlineStyles;
