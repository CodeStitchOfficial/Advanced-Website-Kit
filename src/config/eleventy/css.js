const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

module.exports = {
    outputFileExtension: "css",
    compile: async (inputContent, inputPath) => {
        return async () => {
            // Optional CS-TODO - Add additional PostCSS plugins to the postcss array
            // https://postcss.org/
            let output = await postcss([autoprefixer]).process(inputContent, {
                from: inputPath,
                to: "./public/assets/css",
            });

            return output.css;
        };
    },
};
