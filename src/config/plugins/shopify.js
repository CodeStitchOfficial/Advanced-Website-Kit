const { SHOPIFY_STORE_URL, SHOPIFY_ACCESS_TOKEN, SHOPIFY_API_VERSION } =
    process.env;

module.exports = {
    url: SHOPIFY_STORE_URL,
    key: SHOPIFY_ACCESS_TOKEN,
    version: SHOPIFY_API_VERSION,
    productsQuery: (cursor = null) => `
    query {
        products(first: 50, sortKey: CREATED_AT${
            cursor ? `, after: "${cursor}"` : ``
        }) {
            edges {
            cursor
            node {
              collections(first: 10) {
                edges {
                  node {
                    id
                    title
                    image {
                      src
                      altText
                    }
                  }
                }
              }
              description
              descriptionHtml
              handle
              id
              images(first: 5) {
                edges {
                  node {
                    altText
                    src
                  }
                }
              }
              compareAtPriceRange {
                maxVariantPrice {
                    amount
                    currencyCode
                  }
                  minVariantPrice {
                    amount
                    currencyCode
                  }
              }
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              tags
              title
            }
          }
        }
      }
    `,
    collectionsQuery: (cursor = null) => `
    query {
        collections(first:20${cursor ? `, after: "${cursor}"` : ``}) {
            edges {
                cursor
                node {
                  id
                  title
                  handle
                  description
                  descriptionHtml
                  image {
                    altText
                    src
                  }
                  products(first: 25) {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }
              }
        }
    }`,
};
