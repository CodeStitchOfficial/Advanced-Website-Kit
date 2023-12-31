# A placeholder file to keep the directory open between the kit branches

## content/page

Any content that's to be used to render a page from a template goes here.

Any directory data (such as the blog files for the CMS) get its own content/ directory.

HTML that's shared between pages has a layout created in \_includes/layouts.

Files created in the content/ directory must have the following frontmatter - note the eleventyNavigation object is optional, only needed if you want the page to appear in the header/footer navs:

A content.json file has been created to automatically tag any content/ file with a "sitemap" tag. If the optimization branch is used, the sitemap collection is used to generate a sitemap.xml file

---

title: "Page title that's used directly in the <title> tag"
description: "A short, 2-3 line description for use in SERPs and OG tags"
permalink: 'slug-name-with-slash-AFTER/'
eleventyNavigation:
    key: 'Name for the navigation'
    order: 'Lowest number comes first'
    parent: 'Supply another pages key here to create a dropdown (if using a CodeStitch dropdown navigation)'

---

_CS-TODO - Delete this file_
