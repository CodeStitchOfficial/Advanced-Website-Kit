const esbuild = require("esbuild");

const isProduction = process.env.ELEVENTY_ENV === "PROD";

module.exports = {
    outputFileExtension: "js",
    compile: async (content, inputPath) => {
        // CS-TODO
        // By default, all JS files in assets will be compiled and put in /public.
        // If you only want bundled files to be compiled/served, uncomment the below two lines, and list the files you wish to be bundled in the array

        // const filesToBundle = ["./src/assets/js/app.js"];
        // if (!filesToBundle.includes(inputPath)) return;

        // If the file isn't from the assets directory, or is an 11tydata file, ignore it. It's probably a config file.
        if (
            !inputPath.includes("./src/assets/") ||
            inputPath.includes("11tydata.js")
        ) {
            return;
        }

        return async () => {
            let output = await esbuild.buildSync({
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
