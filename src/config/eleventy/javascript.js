const esbuild = require("esbuild");

const isProduction = process.env.ELEVENTY_ENV === "PROD";

module.exports = {
    outputFileExtension: "js",
    compile: async (content, inputPath) => {
        // If the file isn't from the assets directory, or is an 11tydata file, ignore it. It's probably a config file.
        if (
            !inputPath.includes("./src/assets/") ||
            inputPath.includes("11tydata.js")
        ) {
            return;
        }

        return async () => {
            let output = await esbuild.buildSync({
                // By default, all JS files in /assets/ will be passed through esbuild to /public.
                // You're welcome to adjust the entryPoints array to set a select few files to be processed. Otherwise, just import the needed ones via a <script>
                entryPoints: [inputPath],
                write: false,
                bundle: true,
                minify: isProduction,
                sourcemap: !isProduction,
                target: isProduction ? "es6" : "esnext",
            }).outputFiles[0].text;

            return output;
        };
    },
};
