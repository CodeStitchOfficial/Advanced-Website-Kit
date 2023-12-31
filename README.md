<p align="center">
  <a href="https://github.com/CodeStitchOfficial/Advanced-Website-Kit">
    <img src="https://camo.githubusercontent.com/32198e70924052fbe04426590239b31e4c9c969f66a5fd14f5d4892e3b38ee7f/68747470733a2f2f636f64657374697463682e6170702f66726f6e74656e642f696d616765732f69636f6e2e706e67" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Advanced Starter Kit</h3>

  <p align="center">
Welcome to the highly anticipated <b>Advanced Starter</b> Kit by <b>CodeStitch</b>. This comprehensive kit is designed to address the needs of small to medium-sized businesses, offering a wide range of features neatly organized in their own dedicated branches. With this kit, you have the flexibility to "build your kit" and tailor your project to each client's specific requirements, utilizing only the features that are essential.<br/>
    <br/>
    <a href="https://theadvancedkit.com">View Demo</a>
    .
    <a href="https://github.com/CodeStitchOfficial/Advanced-Website-Kit/issues">Report Bug</a>
    .
    <a href="https://github.com/CodeStitchOfficial/Advanced-Website-Kit/issues">Request Feature</a>
  </p>
</p>

<div align="center">
  <img src="https://img.shields.io/github/stars/CodeStitchOfficial/Advanced-Website-Kit?color=dark-green" alt="Stars" />
  <img src="https://img.shields.io/github/contributors/CodeStitchOfficial/Advanced-Website-Kit?color=dark-green" alt="Contributors" />
  <img src="https://img.shields.io/github/issues/CodeStitchOfficial/Advanced-Website-Kit?color=dark-green" alt="Issues" />
  <img src="https://img.shields.io/github/license/CodeStitchOfficial/Advanced-Website-Kit" alt="License" />
</div>
 
# Table of Contents

-   [Overview](#overview)
-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)
-   [Branches](#branches)
    -   [Main](#main)
        -   [Features](#features)
        -   [Development Notes](#development-notes)
        -   [Deployment Notes](#deployment-notes)
    -   [LESS/SASS](#less-sass)
        -   [Features](#features-1)
        -   [Development Notes](#development-notes-1)
        -   [Deployment Notes](#deployment-notes-1)
    -   [CMS](#cms)
        -   [Features](#features-2)
        -   [Development Notes](#development-notes-2)
        -   [Deployment Notes](#deployment-notes-2)
    -   [Optimization](#optimization)
        -   [Features](#features-3)
        -   [Development Notes](#development-notes-3)
        -   [Deployment Notes](#deployment-notes-3)
    -   [Shopify](#shopify)
    -   [Features](#features-4)
    -   [Development Notes](#development-notes-4)
        -   [Rendering Products/Collections](#rendering-products-collections)
            -   [An additional note on customizing the GraphQL query](#an-additional-note-on-customizing-the-graphql-query)
            -   [Setting up Purchase Functionality](#setting-up-purchase-functionality)
        -   [Deployment Notes](#deployment-notes-4)

<a name="overview"></a>

# Overview

At the heart of this kit lies **Eleventy**. Renowned as a "_simpler static site generator_", we've went against this notion, harnessing Eleventy's full capabilities to provide a complete set of features that cater to every SMB client's needs. Across four distinct branches, you'll find plugins for code and asset optimization, content management, eCommerce, and a selection of CSS styles to choose from.

The CMS branch is powered by **Decap CMS**, while the eCommerce branch leverages the power of **Shopify**. You can expand the kit in either, both, or neither of these directions, depending on the project's requirements.

<a name="prerequisites"></a>

# Prerequisites

Given the advanced nature of this kit, coupled with the extensive customizations and plugins it entails, a strong command of **HTML**, **CSS**, and **JavaScript** is essential.

Furthermore, experience with **Eleventy** is required, including proficiency in working with and debugging it. Concepts such as the Data Cascade, Plugins, and Collections should be second nature before using this kit.

If you intend to work with the **CMS** and **Shopify** branches, it's highly recommended to have a working knowledge of **Decap** and **Shopify**, respectively. To familiarize yourself with **Decap CMS**, we recommend referring to our [Intermediate Starter Kits](https://github.com/CodeStitchOfficial/Intermediate-Website-Kit-SASS/#overview), which offer a minimal **Decap** configuration.

While the **Shopify** branch simplifies many tasks, developers are expected to set up, maintain, and debug various aspects that extend beyond this kit's scope due to its headless nature. Functions like search functionality, user accounts, and wishlists cannot be achieved through a simple app installation. If you're unable to fulfill these larger requests, we suggest using this kit primarily for smaller clients.

As this kit operates at a fairly high level, this README has been written with the assumption that you're able to start, develop, deploy, and maintain an eleventy project, from start to finish, without any help. Some smaller details (basic terminal usage and Netlify deployment) have been missed out from the README and are therefore assumed as knowledge. Once again, our [Intermediate Starter Kits](https://github.com/CodeStitchOfficial/Intermediate-Website-Kit-SASS/#overview) provide a good start if you need a little more guidance on these things.

<a name="getting-started"></a>

# Getting Started

Since template repositories do not retain commit history, merging feature branches using the Git CLI is necessary, which may lead to conflicts. Below are instructions on how to manage this effectively:

1. At the top of the page, click **Use this template** > **Create a new repository**.

2. Tick the **Include all branches** checkbox. Complete the remaining details and click **Create repository**.

3. Clone the repository locally using your preferred method and open it in **VS Code**.

4. Launch the terminal in **VS Code**.

5. To merge the desired branch, use `git merge <BRANCHNAME> --allow-unrelated-histories`.

6. Resolve any conflicts that arise.

    - Conflicts should typically occur in `package.json`, `package-lock.json`, and `.eleventy.js` due to different dependencies merging at various stages in the commit history.
    - Resolving `package.json` conflicts is straightforward; accept both changes and remove any duplicate scripts or dependencies.
    - Handling `.eleventy.js` conflicts may require more manual intervention. You'll need to carefully select which plugins, filters, passthroughs, etc., to retain. Ensure everything is included.
    - Resolving `package-lock.json` conflicts is more challenging; simply run `npm install` to update the file.

7. To ensure that no dependencies have been missed, delete the `node_modules` folder and run `npm install` one final time. If any package files have been missed during merging, you should see an error prompting you to install them.

8. Run `npm start` to boot up the project.

9. (SASS/LESS ONLY) Optionally, move over the starting kit styles in your preferred CSS syntax from `./starter-styles` to `./src/assets/less` or `./src/assets/SASS`.

By following these steps, you should be 90% of the way to getting the project off to a start. Depending on which branches you have merged, you may have some additional steps that need to be completed to facilitate a complete beginning to the project. These steps have been denoted in comments across the kit, containing the phrase **CS-TODO**. Therefore, you should be able to do a global find across the whole of the codebase to find any instance of **CS-TODO** and take action accordingly. Once all outstanding **CS-TODO** tasks have been resolved, the kit will be properly set up.

<a name="branches"></a>

# Branches

The kit contains four different branches, each with their own bespoke feature contained within. You're welcome to merge as many or as few of these branches as possible, using the instructions outlined below, and enjoy all of the benefits that come with it.

Each branch has been listed below. Within each listing, we have outlined the features that come with the branch, some things to note while developing the project, and any extra steps that are required when deploying the kit.

We strongly recommend **Netlify** as the deployment provider for this kit. The kit has been developed with Netlify in mind, and it pairs seamlessly with their generous free tier. Using Netlify ensures that your hosting capabilities won't limit you when using this service.

<a name="main"></a>

## Main

The **main** branch of the kit provides a base for the rest of the branches to build on top of. All of the shared code between the other branches is stored within the **Main** branch, allowing for easy maintenance and merging of the other branches. The **main** branch is minimal and contains only what is necessary to get a project up and running. Chances are you won't just be using this branch, although if you do prefer a very minimal beginning to a project and want to use **eleventy**, you're welcome to exclusively use this branch.

<a name="features"></a>

### Features

-   A minimalistic preconfigured 11ty set up with a standardized source file structure.

-   Centralized client data.

-   A preconfigured HTML `<head>`, dynamic to the data provided in `_data/client.json`.

-   An automatically generated `robots.TXT` file.

-   A preconfigured `netlify.toml` file to facilitate one-click deployment.

<a name="development-notes"></a>

### Development Notes

Given the minimalistic nature of this branch, on its own, there are very few considerations when developing. However, we would recommend continuing to use the same front matter structure in all content pages and following the below file structure:

```
.
├── src/                        # Working code
│   ├── _data/                  # Global data
│   │   └── client.json         # Client-specific data to generate <head>
│   ├── includes/               # Shared code between templates
│   │   ├── components          # Smaller, reusable pieces of code
│   │   └── layouts             # Whole page templates
│   ├── assets/                 # Non-content files. Self-explanatory
│   │   ├── css
│   │   ├── favicons
│   │   ├── fonts
│   │   ├── images
│   │   ├── js
│   │   └── svgs
│   ├── config/                 # Configuration for Eleventy
│   │   └──
│   ├── content/                # Files to be turned into a page, using a template from _includes/layouts
│   │   └── pages
│   ├── index.html
│   └── robots.html             # Automatically generated to robots.txt
├── starter-styles              # SASS and LESS versions of the kit styles
├── .eleventy.js                # Where it all comes together
├── .gitignore
├── .prettierignore             # Ignores robots.html so the formatting doesn't mess it up
├── netlify.toml                # Configures Netlify for fastest deployment
├── package-lock.json
└── package.json
```

<a name="deployment-notes"></a>

### Deployment Notes

You should be able to deploy this project as if it were any other Netlify project. Most of the Netlify configuration has been done for you thanks to the `netlify.toml` file. Therefore, you should be able to link the GitHub repository with Netlify and have continuous deployment all set up for you.

Additional branches, such as the Shopify and CMS branches, may have additional deployment steps. As such, make sure you check the deployment notes in each of the branches you are using before attempting to deploy your project.

<a name="less-sass"></a>

## LESS/SASS

The **LESS** and **SASS** branches provide the respective preprocessors to add additional capabilities to your styling in the project. To make the project easier to maintain, we have provided these as their own separate branches instead of splitting out the repository's. Because of this, please only **merge one of these branches** and do not try to have both LESS and SASS running at the same time.

The kit only includes the preprocessors for these languages and does not contain any other styles. Merging other branches comes with their own LESS and SASS styles in the `./starter-styles` directory.

<a name="features-1"></a>

### Features

-   A **SASS** or **LESS** preprocessor

<a name="development-notes-1"></a>

### Development Notes

Once all branches have been merged in, you are able to move over the starting kit styles from the `./starter-styles` directory, should you wish. If you're going to be starting from scratch and don't want to modify what's already provided with the kit, you can go ahead and delete this directory.

<a name="deployment-notes-1"></a>

### Deployment Notes

No extra actions are needed when deploying with this branch.

<a name="cms"></a>

## CMS

This branch sets up a content management system provided by Decap CMS, allowing clients to modify aspects of the website in a non-technical way. These changes are reflected in the repository of the website, which triggers a rebuild in Netlify and builds the site with new content that the client has provided.

The CMS provides a range of collections within the cap which one can pick and choose from when building an actual project. The blog from the [Intermediate Starter Kits](https://github.com/CodeStitchOfficial/Intermediate-Website-Kit-SASS/#overview) has been included here and is identical to what you may be used to before.

<a name="features-2"></a>

### Features

-   An `admin/` directory, containing an index file to render the CMS single-page app and the `config.yaml` file to configure Decap.

-   A range of prebuilt configurations for the CMS for you to pick and choose from:

    -   Hooking up the `client.json` file to the CMS so clients can change their social media/contact information themselves.

    -   A blog, allowing clients to add, edit, and remove posts as they please.

        -   Data - `content/blog`
        -   Blog listing page - `content/pages/cms-blog.html`
        -   Blog article page - `_includes/layouts/post.html`
        -   Styles - `cms-blog.css/less/sass`

    -   A menu that scales with the different sections and meals that a client can define.
        -   Data - `\_data/menu.json`
        -   Menu page - `content/pages/cms-menu.html`
        -   Styles - `cms-menu.css/less/sass`

<a name="development-notes-2"></a>

### Development Notes

As explained above, we have created each CMS feature as its owner page with its configuration in the YAML file. Therefore, when creating the project, you should be able to keep the styles and pages you want, delete the others, and tidy up the configuration. You are then free to customize the existing pages to your heart's content.

<a name="deployment-notes-2"></a>

### Deployment Notes

1. Once deployed, click on Identity in the top navigation, then click **Enable Identity**.
2. Invite yourself and the client to the site.
3. While in the Identity tab, click the "Settings and usage" button to open the settings options.
4. Find "Registration Preferences," click "Edit Settings," and set registration from Public to Invite Only.
5. Find "Enable Providers" and add a provider. We recommend Google, so the client can log in with Google in 1 click.
6. Find "Git Gateway" and enable it.

<a name="optimization"></a>

## Optimization

Achieving high website page speed scores often requires significant manual effort to optimize code and assets. The **Optimization** branch provides you with a range of tools to streamline this process and enhance the performance of your website.

For the most part, the majority of this functionality is built into this branch and works without requiring extensive configuration on your part. Therefore, you should be able to merge this branch and immediately improve the quality of your production code. However, there are some additional features that allow for extensibility of this kit, such as automatic asset optimization and post-CSS support.

<a name="features-3"></a>

### Features

-   Automatic minification of your HTML, CSS, and JavaScript code. This feature is active when the website is deployed to Netlify, ensuring that you can enjoy fully commented code during development.

-   Inlining of critical CSS above the fold on a 1920x1080 pixel device.

-   Sitemap generation at build time, depending on the pages provided in the `content/` directory. Please note that there is a known bug resulting in Shopify pages not being included in the sitemap generation, and we are actively addressing it.

-   Adding CSS as a template language, allowing it to pass through a straightforward post-CSS configuration with automatic addition of vendor prefixes to CSS properties. This can be easily extended with the rest of the [PostCSS](https://postcss.org/) ecosystem.

-   Adding JavaScript as a template language, passing it through an ES build process. This provides bundling and minification of your scripts.

-   (Optional) Automatic resizing of images, generation of picture HTML, and serving them in next-generation formats.

<a name="development-notes-3"></a>

### Development Notes

As mentioned, most of the features in this branch are set-and-forget plugins, requiring minimal configuration beyond deciding whether to opt into the asset optimization part of the branch. Additionally, you have the option to include additional post-CSS plugins, which can be done by installing them through NPM and specifying them in the `config/eleventy/css.js` file.

If you wish to opt-in to asset optimization, you can find comprehensive instructions on how to do so and some important considerations in the `config/plugins/image.js` file. However, please note that this is entirely optional, and you can continue optimizing assets using your preferred methods if you prefer.

<a name="deployment-notes-3"></a>

### Deployment Notes

No extra actions are required when deploying with this branch.

<a name="shopify"></a>

## Shopify

The **Shopify** branch instantly provides a shop for the website by simply supplying Storefront API credentials. At build time, fresh data from the Shopify backend is fetched and used to dynamically render pages with full cart and checkout functionality. Customers can then buy products from your client and enjoy the benefits of Shopify's well-loved fulfilment services.

This branch includes a generic product listing and product detail page setup that adapts based on what collections and products are defined in the Shopify backend. We've also configured the Storefront API query to fetch additional product information, which is transformed before rendering the website in an easy-to-follow format. Setting up button functionality is as simple as defining the product ID on the page and specifying where you want the button to render.

However, please be aware of some limitations of this kit when offering e-commerce to a client:

1. To keep the store as up-to-date as possible with the Shopify backend, we need to set up webhooks to rebuild the store whenever a product is created, updated, or deleted. If a client has many products and makes frequent changes, this could consume your build minutes. Future plans for the kit involve finding a workaround to potentially limit story builds on a per-day basis.

2. As the frontend is completely disconnected from Shopify, we lose out on all the app features that come with Shopify. Certain e-commerce functionalities expected in modern storefronts, such as search, wish lists, user accounts, and review functionality, will need to be custom-built by you. Some of these features may require an additional backend and extensive custom JavaScript work. The kit primarily focuses on rendering product pages and listing pages.

3. While a lot of the heavy lifting is done for you, we **strongly** advise having a level of familiarity with the Shopify ecosystem. As a developer, you'll be responsible for setting up the Shopify Store, answering questions about it, and performing any maintenance tasks that arise. This kit serves to provide you with a head start on the frontend of the store, in a quick-to-set-up way that delivers a lightning-fast frontend, rivalling Shopify's own themes.

For small e-commerce clients who won't be making many changes and don't require extensive functionality, this kit should be perfect for them.

<a name="features"></a>

## Features

-   A generic product listing and product detail page setup that adapts based on what collections and products are defined in the Shopify backend.

-   A preset, GraphQL Storefront API query to fetch most commonly required products from Shopify.

-   Transforming the data at build-time to streamline the data-injection process while still keeping the raw GQL data.

<a name="development-notes-4"></a>

## Development Notes

Before starting e-commerce work, we recommend setting up a [Shopify Partners](https://www.shopify.com/uk/partners) account to allow you to manage all your clients in one place. This can be done free of charge, and you can even earn money by referring clients to use Shopify and handing over stores.

Assuming you are using a partner's account, you can then follow the below instructions to link the kit to the frontend.

1. Create a development store for your clients, following this [Shopify help text](https://help.shopify.com/en/partners/dashboard/managing-stores/development-stores). If you do it this way, you earn a [commission](https://help.shopify.com/en/partners/how-to-earn#development-store-referrals) for each of the stores that you hand over.

2. Once the store has been set up, create a [custom app](https://help.shopify.com/en/manual/apps/app-types/custom-apps). No Admin API scopes are required. All Storefront API scopes are required.

3. Creating the app should give you an access token. You can supply this to the `./.env` file at the root of the project. We will also need to supply the Shopify store URL and API version (stick to 2023-10 for the kit). Example credentials have been provided with the kit. The file should look like this:

```
SHOPIFY_STORE_URL=shopifystorename.myshopify.com
SHOPIFY_ACCESS_TOKEN=LongAccessTokenFromCustomApp
SHOPIFY_API_VERSION=2023-10
```

4. You should now see the store products show on the page.

Customising the kit beyond this point can be further broken down into two sections - Rendering Products/Collections and Setting up Purchase Functionality.

<a name="rendering-products-collections"></a>

### Rendering Products/Collections

Out-of-the-box, the kit makes a GraphQL query to the storefront API using the query defined in the `config/plugins/shopify.js` file. If you require additional information from Shopify, you can customize this query further using the Storefront API documentation.

To keep the kit accessible to people not familiar with this API structure, product and collection data is modified at build time under the `\_data/eleventyComputed.js` file. This file takes the data received from the GraphQL call, modifies it, adds additional data fields, and displays it under the `shopProducts` and `shopCollections` global data names. The raw data from the Shopify API call is also exposed as `shopify.products` and `shopify.collections`. You can use `{{ shopify.products | dump }}` or `{{ shopCollections | dump }}` in any page, for example, to print out the data being received from these steps.

Out of the box, the object structures look like this:

shopProducts

```
[
...
  {
    "title": "The Complete Snowboard",
    "id": "gid://shopify/Product/8843401986338",
    "idNumber": "8843401986338",
    "handle": "the-complete-snowboard",
    "description": "This PREMIUM snowboard is so SUPERDUPER awesome!",
    "descriptionHtml": "This <b>PREMIUM</b> <i>snowboard</i> is so <b>SUPER</b><i>DUPER</i> awesome!",
    "collections": [
      {
        "id": "gid://shopify/Collection/468508049698",
        "title": "Automated Collection",
        "image": null,
        "idNumber": "468508049698"
      }
    ],
    "images": [
      {
        "altText": "Top and bottom view of a snowboard. The top view shows abstract circles and lines in shades of teal.\n The bottom view shows abstract circles and lines in shades of purple and blue with the text “SHOPIFY” in a\n sans serif typeface on top.",
        "src": "https://cdn.shopify.com/s/files/1/0850/9197/5458/products/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1703420183"
      }
    ],
    "tags": [
      "Premium",
      "Snow",
      "Snowboard",
      "Sport",
      "Winter"
    ],
    "compareAtPriceRange": {
      "maxVariantPrice": {
        "amount": "899.95",
        "currencyCode": "USD",
        "price": "$899.95"
      },
      "minVariantPrice": {
        "amount": "799.95",
        "currencyCode": "USD",
        "price": "$799.95"
      }
    },
    "compareAtPrice": "From $799.95",
    "priceRange": {
      "maxVariantPrice": {
        "amount": "799.95",
        "currencyCode": "USD",
        "price": "$799.95"
      },
      "minVariantPrice": {
        "amount": "699.95",
        "currencyCode": "USD",
        "price": "$699.95"
      }
    },
    "price": "From $699.95",
    "saleAmount": "13"
  },
...
]
```

shopCollections

```
[
...
  {
    "id": "gid://shopify/Collection/468508049698",
    "idNumber": "468508049698",
    "title": "Automated Collection",
    "handle": "automated-collection",
    "description": "",
    "descriptionHtml": "",
    "image": null,
    "products": [
      {
        "id": "8843402314018",
        "idLink": "gid://shopify/Product/8843402314018"
      },
      {
        "id": "8843402182946",
        "idLink": "gid://shopify/Product/8843402182946"
      },
      {
        "id": "8843402150178",
        "idLink": "gid://shopify/Product/8843402150178"
      },
      {
        "id": "8843402051874",
        "idLink": "gid://shopify/Product/8843402051874"
      },
      {
        "id": "8843402019106",
        "idLink": "gid://shopify/Product/8843402019106"
      },
      {
        "id": "8843401986338",
        "idLink": "gid://shopify/Product/8843401986338"
      }
    ]
  },
...
]
```

shopify.products

```
[
...
    {
    "collections": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Collection/468508049698",
            "title": "Automated Collection",
            "image": null,
            "idNumber": "468508049698"
          }
        }
      ]
    },
    "handle": "the-complete-snowboard",
    "id": "gid://shopify/Product/8843401986338",
    "description": "This PREMIUM snowboard is so SUPERDUPER awesome!",
    "descriptionHtml": "This <b>PREMIUM</b> <i>snowboard</i> is so <b>SUPER</b><i>DUPER</i> awesome!",
    "images": {
      "edges": [
        {
          "node": {
            "altText": "Top and bottom view of a snowboard. The top view shows abstract circles and lines in shades of teal.\n The bottom view shows abstract circles and lines in shades of purple and blue with the text “SHOPIFY” in a\n sans serif typeface on top.",
            "src": "https://cdn.shopify.com/s/files/1/0850/9197/5458/products/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1703420183"
          }
        }
      ]
    },
    "compareAtPriceRange": {
      "maxVariantPrice": {
        "amount": "899.95",
        "currencyCode": "USD",
        "price": "$899.95"
      },
      "minVariantPrice": {
        "amount": "799.95",
        "currencyCode": "USD",
        "price": "$799.95"
      }
    },
    "priceRange": {
      "maxVariantPrice": {
        "amount": "799.95",
        "currencyCode": "USD",
        "price": "$799.95"
      },
      "minVariantPrice": {
        "amount": "699.95",
        "currencyCode": "USD",
        "price": "$699.95"
      }
    },
    "tags": [
      "Premium",
      "Snow",
      "Snowboard",
      "Sport",
      "Winter"
    ],
    "title": "The Complete Snowboard"
  },
...
]
```

shopify.collections

```
[
...
  {
    "id": "gid://shopify/Collection/468508049698",
    "title": "Automated Collection",
    "handle": "automated-collection",
    "description": "",
    "descriptionHtml": "",
    "image": null,
    "products": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Product/8843402314018"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/8843402182946"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/8843402150178"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/8843402051874"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/8843402019106"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/8843401986338"
          }
        }
      ]
    }
  },
  ...
]
```

As these objects are exposed through global data, you should be able to use the object name in your templating language of choice (default is Nunjucks) and access any key/value within the data structure. So, if you were to iterate over `shopProducts` (with the "product" title), and wanted to output the name, you'd use `{{ product.title }}`.

We then use [Eleventy Pagination](https://www.11ty.dev/docs/pagination/) to iterate over the global data and render a page for each product and collection. This takes place in the `content/pages/product.html` and `content/pages/collection.html`. The collection pages are also mapped to appear in the Shop dropdown, allowing your client to set up collections in Shopify and have their own page made on their website. The respective layouts contain the actual page content and can be found in `_includes/layouts`. Here, you can see the content output at work.

<a name="an-additional-note-on-customizing-the-graphql-query"></a>

#### _An additional note on customizing the GraphQL query_

Please note that customizing the GraphQL query to request additional data will not automatically result in that data being available in `shopProducts`/`shopCollections`. You will need to add this manually to the `eleventyComputed.js` file under the `shopify.products/collections.map` function. For example, if you have added "foo" to the product API call, you should go to the `data.shopify.products.map` function under the `shopProducts` key, find the return statement in that map, and add "foo" to the object being returned. We would **strongly, strongly** not recommend doing this unless you **seriously** know what you're doing here. If there's some data being missed that you would like to be added, please contact the kit team through the subreddit or raise an issue on the kit, and we'll be happy to add this for you.

<a name="setting-up-purchase-functionality"></a>

#### Setting up Purchase Functionality

The commerce functionality of the website is provided by Shopify's buy button JS library. This library works by supplying a product ID to a function, along with some configuration options, and a buy button will be rendered based on the variance and pricing information in Shopify.

As such, looking at the product detail pages, the variant selector, quantity changer, buy button, and cart are all supplied from this library and need to be customized within the library configuration. You can view how to do this on the [documentation for the library](https://shopify.github.io/buy-button-js/). Within the `assets/js/shopify.js` file, you can view the configuration objects for products and the cart and customize them as per the documentation.

Product and collection pages are set up in the includes folder, so you're free to adjust these pages as you see fit for the client's needs. If you wish to set up a new product page from scratch, you can call the buy button by using the below element, which will work automatically with the JavaScript written to render a product on the page:

```
<div id="cs-buy" data-product-id="{{ shopProduct.idNumber }}"></div>
```

The `cs-buy` ID will determine what element the buy button should be rendered inside of. The `data-product-id` attribute should hold the product's ID number, which can be accessed from the `shopProducts` array. This will render the buy button and all the appropriate configuration options that can be used in your templates.

<a name="deployment-notes-4"></a>

### Deployment Notes

To deploy this project on Netlify, follow the standard deployment process. However, please note that the first build may fail because the request to Shopify will fail without the necessary credentials. To resolve this, follow these steps to add the Shopify credentials to Netlify:

1. Navigate to Site configuration > Environment variables for site environment variables.
2. Select Add a variable > Import from a .env file.
3. Copy the contents of the .env file into the form.
4. Select "Import variables" to add the variables.
5. Rebuild the project by going to Site overview > Production deploys > Trigger deploy > Clear cache and deploy site.

Additionally, we also have to configure Netlify to rebuild the website whenever the data in Shopify changes. This can be done via webhooks, which are messages that get sent from Shopify to Netlify when specific events (Product Update, Product Change, etc) occur. This way, whenever these events occur, the website is rebuilt with the latest data available from Shopify. Please see the below instructions on how to do this:

1. From your Shopify admin, go to **Settings > Notifications**.
2. Scroll down to the **Webhooks** section.
3. Click the **Create webhook** button. A new window should appear.
4. From the first drop-down, select the "Event". For this example, we'll use "**Product Update**".
5. Choose the first event to set up. Keep the **Format** as **JSON**, and the **API version** as **2023-10** (or the version used in .env).
6. Open a new tab and go to the deployed site on Netlify.
7. Go to **Site configuration > Build & deploy > Continuous deployment > Build hooks**.
8. Create a Build Hook in Netlify, using the name "**Product Update**" (but an be anything). Click save. This generates a URL you can use in the **URL** field in the Shopify Product Update webhook setup wizard.
9. Save the Shopify webhook.
10. Repeat steps 3-9 for every Shopify event you wish to trigger a rebuild for. We recommend **Product Update**, **Product Creation**, and **Product Deletion**.
