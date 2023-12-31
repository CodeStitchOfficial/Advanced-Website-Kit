// CS-TODO: If you're using the optimisation module, you can uncomment the below line to import ShopifyBuy
// via an npm module, and remove the SDK from the "Shopify Scripts" in _includes/base.html
// import ShopifyBuy from '@shopify/buy-button-js'

window.shopify.client = ShopifyBuy.buildClient({
    domain: window.shopify.auth.store_url,
    storefrontAccessToken: window.shopify.auth.access_token,
});

window.shopify.ui = ShopifyBuy.UI.init(window.shopify.client);

window.shopify.productId =
    document.querySelector("[data-product-id")?.dataset.productId;
// Automatically uses the CodeStitch --primary color to style the cart toggle and checkout buttons
window.shopify.primaryColor = getComputedStyle(
    document.documentElement
).getPropertyValue("--primary");

window.shopify.productId &&
    window.shopify.ui.createComponent("product", {
        id: window.shopify.productId,
        node: document.getElementById("cs-buy"),
        options: {
            product: {
                iframe: false,
                contents: {
                    img: false,
                    title: false,
                    variantTitle: false,
                    price: false,
                    options: true,
                    quantity: true,
                    quantityIncrement: true,
                    quantityDecrement: true,
                    quantityInput: true,
                    button: true,
                    description: false,
                },
                classes: {
                    quantity: "cs-quantity",
                    quantityDecrement: "cs-quantity-decrement",
                    quantityInput: "cs-quantity-input",
                    quantityIncrement: "cs-quantity-increment",
                    buttonWrapper: "cs-button-wrapper",
                    button: "cs-button cs-buy",
                },
            },
            option: {
                classes: {
                    label: "cs-option",
                    wrapper: "cs-option-wrapper",
                    selectIcon: "cs-select-icon",
                    select: "cs-dropdown",
                },
            },
        },
    });

window.shopify.ui.createComponent("cart", {
    options: {
        cart: {
            popup: false,
            styles: {
                button: {
                    "background-color": window.shopify.primaryColor,
                },
            },
        },
        toggle: {
            styles: {
                toggle: {
                    "background-color": window.shopify.primaryColor,
                    ":hover": {
                        "background-color": window.shopify.primaryColor,
                    },
                },
            },
        },
    },
});
