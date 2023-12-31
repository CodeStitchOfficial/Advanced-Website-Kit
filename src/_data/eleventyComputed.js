// Gets the number from a Shopify ID
// gid://shopify/Product/8843402314018 => 8843402314018
function getIdNumber(id) {
    const idLastSlash = id.lastIndexOf("/");
    return id.slice(idLastSlash + 1);
}

module.exports = {
    shopProducts: (data) => {
        // Fixes a product price to two decimal places. Uses the Store's preferred money format to append any necessary currency symbols
        // "11.0" => "$11.00"
        function formatPrice(price) {
            if (price === "0.0") {
                return null;
            }

            const fixedPrice = Number(price).toFixed(2);

            return data.shopify.shop.moneyFormat.replace(
                "{{amount}}",
                fixedPrice
            );
        }

        // Checks product variants to see if there are any intra-product differences in pricing. If there is, prefix price with "From".
        // minPrice: 9.0 and maxPrice: 19.99 => simplePrice: "From $9.00"
        function getSimplePrice(priceRange) {
            const formattedMinPrice = formatPrice(
                priceRange.minVariantPrice.amount
            );

            if (!formattedMinPrice) {
                return null;
            } else if (
                priceRange.minVariantPrice.amount ===
                priceRange.maxVariantPrice.amount
            ) {
                return formattedMinPrice;
            } else {
                return `From ${formattedMinPrice}`;
            }
        }

        return data.shopify.products.map((product) => {
            // Removes the edges/node from the GQL structure
            const newImages = [];
            product.images.edges.forEach((image) => newImages.push(image.node));

            // Generates a formatted price for the product and it's min/max variant price values
            const price = getSimplePrice(product.priceRange);
            product.priceRange.minVariantPrice.price = formatPrice(
                product.priceRange.minVariantPrice.amount
            );
            product.priceRange.maxVariantPrice.price = formatPrice(
                product.priceRange.maxVariantPrice.amount
            );

            // Generates a formatted compareAt price for the product and it's min/max variant compareAt price values
            const compareAtPrice = getSimplePrice(product.compareAtPriceRange);
            product.compareAtPriceRange.minVariantPrice.price = formatPrice(
                product.compareAtPriceRange.minVariantPrice.amount
            );
            product.compareAtPriceRange.maxVariantPrice.price = formatPrice(
                product.compareAtPriceRange.maxVariantPrice.amount
            );

            // Takes the collection out of the edge/node GQL structure and adds an "idNumber to the entry"
            const newCollections = product.collections.edges.map(
                (collection) => {
                    collection.node.idNumber = getIdNumber(collection.node.id);
                    return collection.node;
                }
            );

            // Works out the percentage off price for use in sale tags. Only uses the minimum prices, if multiple variant prices are defined.
            const wasPrice = Number(
                product.compareAtPriceRange.minVariantPrice.amount
            );
            const discountedPrice = Number(
                product.priceRange.minVariantPrice.amount
            );
            let saleAmount = null;
            if (wasPrice !== discountedPrice && wasPrice !== 0) {
                saleAmount = (
                    ((wasPrice - discountedPrice) / wasPrice) *
                    100
                ).toFixed(0);
            }

            return {
                title: product.title,
                id: product.id,
                idNumber: getIdNumber(product.id),
                handle: product.handle,
                description: product.description,
                descriptionHtml: product.descriptionHtml,
                collections: newCollections,
                images: newImages,
                tags: product.tags,
                compareAtPriceRange: product.compareAtPriceRange,
                compareAtPrice,
                priceRange: product.priceRange,
                price,
                saleAmount,
            };
        });
    },

    shopCollections: (data) => {
        return data.shopify.collections.map((collection) => {
            const collectionProducts = collection.products?.edges.map(
                (product) => {
                    return {
                        id: getIdNumber(product.node.id),
                        idLink: product.node.id,
                    };
                }
            );

            return {
                id: collection.id,
                idNumber: getIdNumber(collection.id),
                title: collection.title,
                handle: collection.handle,
                description: collection.description,
                descriptionHtml: collection.descriptionHtml,
                image: collection.image,
                products: collectionProducts,
            };
        });
    },
};
