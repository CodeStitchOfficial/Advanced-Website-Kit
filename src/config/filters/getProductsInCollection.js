module.exports = function (products, collectionId) {
    if (!collectionId) {
        return products;
    }

    return products.filter((product) => product.collections.some((collection) => collection.idNumber == collectionId));
};
