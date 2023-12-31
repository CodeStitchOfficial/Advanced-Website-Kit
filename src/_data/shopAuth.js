// Exposes the public Shopify credentials to be used for the BuyButtonJs library
module.exports = {
    store_url: process.env.SHOPIFY_STORE_URL,
    access_token: process.env.SHOPIFY_ACCESS_TOKEN,
    api_version: process.env.SHOPIFY_API_VERSION,
};
