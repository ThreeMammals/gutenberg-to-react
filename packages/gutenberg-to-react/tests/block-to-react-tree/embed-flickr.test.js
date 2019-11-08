const { blocksToReactTree } = require('../../src/blocks-to-react-tree');

describe('blocksToReactTree', () => {
  it('should parse core embded flickr', () => {
    const expected = [{
      type: 'core-embed/flickr',
      $$typeof: Symbol.for('react.element'),
      ref: null,
      props: {
        url: 'https://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY',
        type: 'photo',
        providerNameSlug: 'flickr',
        className: '',
        style: {},
        children: [[{
          type: 'figure',
          props: {
            url: 'https://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY',
            type: 'photo',
            providerNameSlug: 'flickr',
            className: 'wp-block-embed-flickr wp-block-embed is-type-photo is-provider-flickr',
            style: {},
            children: [{
              type: 'div',
              props: {
                className: 'wp-block-embed__wrapper',
                style: {},
                children: ['\nhttps://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY\n'],
              },
              $$typeof: Symbol.for('react.element'),
              ref: null,
            }, {
              type: 'figcaption',
              props: {
                className: null,
                style: {},
                children: ['test caption'],
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

    const input = [{
      blockName: 'core-embed/flickr',
      attrs:
     {
       url: 'https://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY',
       type: 'photo',
       providerNameSlug: 'flickr',
       className: '',
     },
      innerBlocks: [],
      innerHTML: '\n<figure class="wp-block-embed-flickr wp-block-embed is-type-photo is-provider-flickr"><div class="wp-block-embed__wrapper">\nhttps://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY\n</div><figcaption>test caption</figcaption></figure>\n',
      innerContent:
     ['\n<figure class="wp-block-embed-flickr wp-block-embed is-type-photo is-provider-flickr"><div class="wp-block-embed__wrapper">\nhttps://www.flickr.com/photos/pustovit/15867520885/in/photolist-qbac9i-9oMXFC-4n3gvY-mCZZJn-9XLrR4-p7EpRE-bpnxfN-drMXnV-74scWq-e6u5Ej-oKG9Sj-aDqw2i-fTMsFJ-bXqvdN-pC6yth-qJMG4L-sd77Bo-7b4y4a-oH5WNt-7c8PDh-4HauQG-8HhZTe-b5gHki-nNqZfY-bZ2XPu-broQ6u-aAZG8X-5QQL1U-bqLqDp-95kwK1-84219z-oQWRV8-84T9te-qrQvZ8-ifAkvP-7qYZvm-9EDVVF-p7Eqvq-dL24wn-mju2S8-apqLdG-fZgaAK-2dVu56g-67G6wQ-mJuvoW-avFtqb-nLbBuK-26BwUMe-ejGtg8-6WK5AY\n</div><figcaption>test caption</figcaption></figure>\n'],
    }];


    const result = blocksToReactTree(input);

    expect(result).toEqual(expected);
  });
});
