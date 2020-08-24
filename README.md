[![Netlify Status](https://api.netlify.com/api/v1/badges/8ec719ad-c2f8-4529-b97d-e7561a9eaf33/deploy-status)] &nbsp; https://twitter.com/populardotaf


## Features
- Built with GatsbyJS and Netlify CMS
- Option to Add, Edit, Update and Delete posts via Netlify CMS
- SEO friendly - Option to Add meta description
- Comes with dark mode

---

## Documentation

### Accessing Netlify CMS Admin
* Goto your Netlify site admin
* Goto **Access Control** > **OAuth** then **Install Provider** you need to select provider as `Github` as add `Client ID` and `Secret`
* Your Netlify CMS is ready. Goto you netlify site URL and append `/admin/`. for example `example.netlify.com/admin/`, You will see login with Github button.

### Managing Blog Posts in Netlify CMS
* Once logged in you will find all the blog post listed here.
* You can create, edit, update and delete like any CMS

### Editing Meta Data
Inside you Netlify CMS admin, `Settings > Config` or you can go to `site-meta-data.json`. Here you can edit following details
* Title
* Description
* Site URL
* Homepage Title
* Homepage Description

### Add Google Analytics
Change `trackingId` in `gatsby-config.js` at `gatsby-plugin-google-analytics` plugin


## Credits
- Awesome image used in demo is from [Unsplash](https://unsplash.com)
- CSS and SVG Icons by [CSS.gg](https://css.gg)

---

## Changelog
All notable changes to this project are listed here.

### [1.6.0] - 2020-05-03
#### Added
- Custom 404 page.
- Site name will be appended in blog posts and contact page.
- Reordering fields in Netlify CMS for better flow of post creation.
- Validation for path in Netlify CMS

### [1.5.0] - 2020-05-03
#### Added
- Settings page in Netlify CMS to customize site meta data.
- Site meta data is pulled from `site-meta-data.json`. maintained via Netlify CMS

### [1.4.0] - 2020-05-01
#### Added
- `gatsby-plugin-sitemap` Creates a sitemap for your Gatsby site in production.

#### Changed
- Changelog improvements
- Comments on `gatsby-config.js`
- Comments on `static/admin/config.yml`

### [1.3.0] - 2020-04-30
#### Added
- `gatsby-plugin-offline` drop-in support for making a GatsbyJS site work offline and more resistant to bad network connections.
- `gatsby-plugin-manifest` configures GatsbyJS to create a manifest.webmanifest file on every site build

### [1.2.0] - 2020-04-28
#### Added
- GatsbyJS Increment builds with Netlify deployment

### [1.1.0] - 2020-04-21
#### Added
- Dark mode compatibitly and toggle for user preference
