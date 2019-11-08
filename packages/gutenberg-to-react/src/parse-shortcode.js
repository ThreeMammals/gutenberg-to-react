/**
 * Wordpress shortcode parser details | Javascript to pull attributes from shortcode string
 *
 * Thanks  that answered the question: https://stackoverflow.com/questions/37576843/javascript-to-pull-attributes-from-shortcode-string/37577770#37577770
 *
 * @author Daniel Gimenez
 * @contributors
 *  - Jefferson Rafael Kozerski <jeff.drumgod@gmail.com>
 *
 * @param  {String} shortCode Text for strip attributes, example: [name]teste[/name] or [name prop="value"] or [name prop=value]
 * @return {Object}           Object with parsed info
 */
const parseShortCode = (shortCode) => {
  const re = /(\s+|\W)|(\w+)/g;
  let match;
  let token;
  let curAttribute = '';
  let quoteChar;
  let mode = 'NOT STARTED';
  const parsedValue = {
    name: '',
    attributes: {},
    content: '',
  };
  let hasContent = (shortCode.match(/\]/g) || []).length;
  if (hasContent > 2) {
    throw ('invalid shortCode: match more then 2 tokens "]". Use only shortcode with this function. Example "[name]teste[/name]" or "[name prop=value]"');
  } else if (hasContent === 1) {
    hasContent = false;
  } else {
    hasContent = true;
  }

  while ((match = re.exec(shortCode)) != null) {
    token = match[0];
    if (mode === 'COMPLETE') {
      break;
    }

    switch (mode) {
      case 'NOT STARTED':
        if (token == '[') {
          mode = 'GETNAME';
        }
        break;
      case 'GETNAME':
        if (!(/\s/.test(token))) {
          if (!(/\]/.test(token))) {
            parsedValue.name += token;
          } else {
            mode = 'GETCONTENT';
          }
        } else if (parsedValue.name) {
          mode = 'PARSING';
        }
        break;
      case 'GETCONTENT':
        if (!(/\[/.test(token))) {
          parsedValue.content += token;
        } else if (parsedValue.name) {
          mode = 'COMPLETE';
        }
        break;
      case 'PARSING':
        // if non text char throw it
        if (token == ']') {
          if (hasContent === 1) {
            mode = 'COMPLETE';
          } else {
            mode = 'GETCONTENT';
          }
        } else if (token == '=') {
          if (!curAttribute) throw (`invalid token: "${token}" encountered at ${match.index}`);
          else mode = 'GET ATTRIBUTE VALUE';
        } else if (!/\s/.test(token)) {
          curAttribute += token;
        } else if (curAttribute) {
          mode = 'SET ATTRIBUTE';
        }
        break;
      case 'SET ATTRIBUTE':
        // these are always from match[1]
        if (/\s/.test(token)) { parsedValue.attributes[curAttribute] = null; } else if (token == '=') { mode = 'GET ATTRIBUTE VALUE'; } else { throw (`invalid token: "${token}" encountered at ${match.index}`); }
        break;
      case 'GET ATTRIBUTE VALUE':
        if (!(/\s/.test(token))) {
          if (/["']/.test(token)) {
            quoteChar = token;
            parsedValue.attributes[curAttribute] = '';
            mode = 'GET QUOTED ATTRIBUTE VALUE';
          } else {
            parsedValue.attributes[curAttribute] = token;
            curAttribute = '';
            mode = 'PARSING';
          }
        }
        break;
      case 'GET QUOTED ATTRIBUTE VALUE':
        if (/\\/.test(token)) { mode = 'ESCAPE VALUE'; } else if (token == quoteChar) {
          mode = 'PARSING';
          curAttribute = '';
        } else { parsedValue.attributes[curAttribute] += token; }
        break;
      case 'ESCAPE VALUE':
        if (/\\'"/.test(token)) { parsedValue.attributes[curAttribute] += token; } else { parsedValue.attributes[curAttribute] += `\\${token}`; }
        mode = 'GET QUOTED ATTRIBUTE VALUE';
        break;
    }
  }
  if (curAttribute && !parsedValue.attributes[curAttribute]) {
    parsedValue.attributes[curAttribute] = '';
  }
  return parsedValue;
};

module.exports.parseShortCode = parseShortCode;
