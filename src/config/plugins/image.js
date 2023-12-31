/**
 *  A NOTE ON THE IMAGE PLUGIN
 *  https://github.com/saneef/eleventy-plugin-img2picture
 *
 *      The image optimization plugin allows you to automatically generate responsive, optimised images
 *      for your website. It works by taking a standard <img> tag, optimising the images, then replacing
 *      the <img> with a <picture> and <source>'s.
 *
 *      Due to the extra configuration needed to get this to work, we've set this up as an opt-in feature.
 *      We highly, _highly_ recommend a read of the docs above before turning this on.
 *
 *      Some notes:
 *          1. All <img> tags without a `data-img2picture-ignore` attribute will be optimised. This is an expensive
 *             action and can increase build times by around a second per image.
 *
 *          2. All <img> tags that are not already contained in a <picture> will be turned into <picture>s with
 *             a responsive set of <source> attributes. Again, a `data-img2picture-ignore` attribute can be used
 *             to bypass this.
 *
 *          3. To reduce the build times, the plugin is set up to cache generated images locally and when deployed
 *             to Netlify. This means cold starts (where no images are in /public) will take the longest. After
 *             this initial setup, future builds become much quicker.
 *
 *          4. Any classes on the <img> tag will be hoisted onto the <picture>, allowing CodeStitch stitches
 *             to work like normal.
 *
 *      Instructions for using this plugin (CS-TODO):
 *          1. To prevent unintentionally turning <img>s that should stay as <img> tags (typically icons), you
 *             can use the below regex to do a find-and-replace across the project. You'll need to use the
 *             "square and star" icon to turn on regex mode, and use the "..." to only include .html files:
 *
 *                  Find: <img(.+)>(?!(.*)\n(.*)</picture>)
 *                  Replace: <img$1 data-img2picture-ignore>
 *
 *          2. Uncomment the plugin in .eleventy.js to turn it on.
 *
 *          3. Going forward, all <img> tags without the ignore attribute will have their images optimised. <img>
 *             tags not in a <picture> tag will also have their HTML modified to use the newly responsive images.
 *
 *          4. By default, 10 images will be made with widths from 150 to 1500. This can be configured below
 *             with the minWidth, maxWidth and widthStep attributes. You can also manually specify the widths
 *             to be generated with data-img2picture-widths="". We would recommend manually specifying the images
 *             to ensure that only the necessary number of images get created.
 *
 *          5. The default size attribute will be 100vw, which can also be changed below, or manually specified
 *             with a sizes="" attribute on the image, just like a normal image.
 *
 *      If using this kit with CodeStitch, you should be able to:
 *          1. Move the class tag from the <picture> onto the <img>.
 *          2. Remove the <picture> and <source> tags.
 *          3. Set the desired widths (with data-img2picture-widths) and sizes (with sizes).
 *
 *      The same Stitch HTML will be generated, just with responsive images!
 */

const path = require("path");

module.exports = {
    eleventyInputDir: "./src",
    imagesOutputDir: "public/assets/images",
    urlPath: "/assets/images/",
    fetchRemote: true,
    minWidth: 150,
    maxWidth: 1500,
    hoistImgClass: true,
    widthStep: 100,
    sizes: "100vw",
    sharpAvifOptions: {
        quality: 80,
    },
    sharpWebpOptions: {
        quality: 80,
    },
    sharpJpegOptions: {
        quality: 80,
    },
    filenameFormat: function (id, src, width, format) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);

        return `${name}-${width}w.${format}`;
    },
};
