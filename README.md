<p align="center">
  <a href="https://applitools.com">
    <img alt="Applitools" src="https://applitools.com/wp-content/uploads/2022/08/Applitools-Logo-Set-V2_Applitools_1c_Green_Applitools_fullcolor_tagline-1.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Applitools eCommerce Demo (Powered by Gatsby and Shopify)
</h1>

In this eCommerce Demo for Applitools, we'll show you how easy to is to start automating testing with artificial intelligence using Applitools. The following demo consists of a headless eCommerce site, powered by Gatsby and Shopify, and a two testing tools, Cypress and Applitools.

You'll need to sign up for a Shopify account and integrate a few different things with Gatsby, but the instructions are straightforward. 

## Deploying The Website

### Option 1. Deploying on Gatsby Cloud

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.png" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-shopify)


### Option 2. Deploy Locally 

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the Shopify starter.

    ```shell
    # create a new Gatsby site using the Shopify starter
    npx gatsby new my-shopify-store https://github.com/gatsbyjs/gatsby-starter-shopify
    ```

2.  **Link to your store**

    Follow these instructions here to [link your Shopify store](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-shopify#readme). Create a `.env` file with your Shopify store URL, password, and Storefront access token, using the `.env.example` file as an example. If you want to try with a development store, see [the sample data and instructions here](example/).

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-shopify-starter/
    npm start
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.
    .
    ├── example
    ├── src
    ├── static
    ├── cypress
    ├── .env.example
    ├── gatsby-browser.js
    ├── gatsby-config.js
    └── gatsby-node.js

1. **`/example`**: This directory includes a CSV file containing sample data to import into a development store. There are also instructions on generating your own sample data, and a link to a dataset with 30,000 SKUs.

2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3. **`/static`**: Every file in this directory will be copied over to the `public` folder during the build. Learn more about [using the `static` folder](https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/). In this project it holds the `og:image` and favicons.

4. **`/cypress`**: This folder is for our Cypress tests and other testing options. 

5. **`/.env.example`**: Duplicate this file, rename it to `.env`, and fill out the keys. You'll need to define those environment variables to get the source plugin, cart and search working.

## Start Testing

```shell
    npx cypress open
    ```

