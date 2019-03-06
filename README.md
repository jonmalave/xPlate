# xPlate

<p align="center"><img align="center" height="300px" src="https://xplate.netlify.com/img/preview.png"/></p>

> Use xPlate to quickly get started with building your next responsive static site or single-page application. 

## Demo
[Demo](https://xplate.netlify.com)


### Layout
* `layout/default.vue` contains four components: `Navbar`, `Navmenu`, `Overlay`, `Nuxt`
* `action()` method handles emit events from the `Navbar` and `Navmenu` components
* CSS classes (*in BEM style) that is used globally across all example pages included 

### Navbar
* Props `title` and `logo` bind to `site` properties found in `modules/store.js`
* `toggleMenu()` method is used to toggle between the `Navemenu` display states
* `action()` method is used to emit a single route change event when clicking on the title or logo 

### Navmenu
* Props `title` and `logo` bind to `site` properties found in `modules/store.js`
* `action()` method is used to emit events triggered by clicks on the links in the menu list
* Navmenu links and actions are defined in `menu` properties found in `modules/store.js`

### Overlay
* Used to prevent interaction with a page when `Navmenu` is displayed and blocking partial view of the page on smaller screen sizes

### Nuxt
* Required in layout to render all pages

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
