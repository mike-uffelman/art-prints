# art-prints

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">art prints</h3>
  <p align="center">
    E-commerce photo store app
    <br>
    React, React Router, React Redux, Unsplash
    <br />
    <a href="https://main--tubular-seahorse-1bbe92.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/mike-uffelman/art-prints/issues">Report Bug</a>
    ·
    <a href="https://github.com/mike-uffelman/art-prints/issues">Request Feature</a>
  </p>
<br>

![weather showcase][home-screenshot]
<br>

</div>
<br>

<!-- TABLE OF CONTENTS -->

## Table of Contents

<details>
  <summary>Art Prints</summary>
  <ul>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#background-and-discussion">Background & Discussion</a></li>
    <li><a href="#architecture-and-design">Architecture & Design</a></li>
    <li><a href="#challenges">Challenges</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#going-forward">Going Forward</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</details>
<br>
<!-- ABOUT THE PROJECT -->

## About The Project

Art Prints is an e-commerce application, where users can search images and add them to a shopping cart.

This application is built to mimick the user experience of an e-commerce website. Features include image search, product customization (size and quantity), shopping cart review/edit/delete, search history, product reviews, similar product tags, and more.

This is a client-side single-page application (SPA) built using React for the client interface capabilities, React Redux for centralized state management, React Router for client-side routing, and Unsplash API for image search.

There is no checkout process implemented in the application.

[Demo the app.](https://main--tubular-seahorse-1bbe92.netlify.app/)

<br>

### Built With

<div align='center'>

![JavaScript][javascript]
[![React][react-shield]][react-url]
[![Redux][redux-shield]][redux-url]<br/>
[![React Router][router-shield]][react-router-url]
[![UnSplash][unsplash-shield]][unsplash-url]

</div>
<p align="right">(<a href="#art-prints">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Open the [live demo here](https://main--tubular-seahorse-1bbe92.netlify.app/), or clone the repository, (node and npm are required).

Install npm packages

```
npm install
```

Start Server

```
npm start
```

Navigate to localhost in your browser

```
localhost:3000
```

<p align="right">(<a href="#art-prints">back to top</a>)</p>

## Background and Discussion

The primary purpose for the application was to practice building a modern Single Page Application (SPA) using several modern development libraries including:

- React - front end user interface and reusable components
- React Router - for client side routing and navigation of pages
- React Redux - global state management

A few secondary objectives included responsive layout, ...

Some additional objectives included application optimization via images file type and loading priority, as well as coding splitting using Reacts Suspense and Lazy features to download components in chunks as needed.

## Primary Features

<details>
<summary style="font-weight: bold">Search</summary>
<br/>

<hgroup><h1>Search by term</h1></hgroup>

Search by term is a key feature of any e-commerce application. The user must be able to find the product they are looking for and search is the most common method of doing so. In the UI this is the text input field where the user can type in their desired keyword.

<dl>
<dt>Tags</dt>

<dd>Tags are a useful feature that allows the user to browse products that have been identified with a keyword to be similar or adjacent to their initial search. This can be found at the top of the results page and in the product details.</dd>

</dl>
#### History

History is a listing of all the searches and tag clicks have have occured in the current session. It is a useful feature for users to allow them to browse and return later. This feature can be found in the header of the application next to the search input field.

#### Implementation

The Search, Tags, and History components share state types (e.g search term) and event handlers, therefore a higher order component (HOC) can be utilized. The HOC wraps around the original component and passes the state and event handlers down through props to the original component. This eliminates duplicate code written in each of these components and allows for the HOC to be the single location which defines the pieces of state and event handlers. When the component is called to render, the component first passes through the HOC to return a new component with the required state and event handlers now available.

The execution of the search for all three features is very similar thanks to the HOC. When the user submits a term via the search input field or clicks a tag or history item, the submit type (e.g. 'search', 'tags', 'history') and the term is sent passed to the handleSubmit callback where the term will be sent to a data helper called 'search' to submit a request to Unsplash for results of the term. The response will be processed through additional helpers to generate products and tags for the results, then create a new results object for the results. After which the results are dispatched to Redux and the user is redirected to the results page.

Tags and History also share a very similar approach of mapping over an array to return React Router Link components and could likely be refactored to a single component, as after all both components are simply producing a list of links.

</details>

---

<details>
<summary>Cart</summary>
asdfasdfasdf
</details>

### Product

#### Secondary Features

### Pagination

Anytime a user will be browsing a large listing of items, it's always a good idea to implement pagination. Doing so breaks down the information in a structured way providing a more meaningful and easily digestible user experience.

Pagination is implemented in two components of the application, the first in the results component, where the user can click 'Load More' to show more search results, as there are rate limits on the API this was kept to a button with limited results as opposed to an infinite scroll that may eat up the rate limit. The other component that features pagination is in the product reviews, where if there are more reviews than fits the page limit, the pagination will display at the bottom of the reviews as a numbered list of pages with forward and back arrows. |

#### Modals

<p align="right">(<a href="#art-prints">back to top</a>)</p>

## Architecture and Design

### Architecture

---

- built with ... architecture

---

--> react front end component based - discuss components, reusability
--> redux state management, reducer slices for each state value - cart, history, reviews, search, toasts
--> react router - discuss routing, layouts, pages

<br>

### Design

--> responsive design, router for pages

<p align="right">(<a href="#art-prints">back to top</a>)</p>

## Challenges

--> Discuss challenges

--> code splitting
--> image optimization
-->

Throughout the development of this project, there were many challenges that arose, from layout headaches to broken functionality.

<details>
  <summary>Challenges Item summary</summary>
    <ul>discussion here...</ul>
</details>

<br>

<p align="right">(<a href="#art-prints">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

The basic usage of the application is as follows:

1. Upon load of the application the user may navigate to the search bar at the top and enter a search term for a desired search result, e.g. "nature", and click the 'Search' button or hit enter. The user may also select the history icon, to view suggested searches.

<div align='center'>

![search-image][search-screenshot]

![history-image][history-screenshot]

</div>
2. Once the search results have been loaded, the user may:

- browse the results
- select 'Load More' at the bottom of the results listing to fetch more results
- select a tag from above the results for similar search results

<div align='center'>

![results-image][results-screenshot]

</div>
3. When you user has selected a product, the user will be redirected to the product page where the user will be able to view the product in detail. The user may review the product, select the quantity, change the desired size, read reviews, navigate to similar results, and add the product to their cart.
<div align='center'>

![product-image][product-screenshot]

</div>
4. In the user's cart, the user will see a listing of products added to the cart and the subtotal of all the products for checkout. Here the user may edit an existing cart item, which will direct them to a page similar to the product page where they can edit the quantity and size selections. The user may also delete the item from the cart.

<div align='center'>

![cart-image][cart-screenshot]

</div>

NOTE: There is no checkout feature built into this application.

### Results

User may browse the returned results, and select a desired product. The user may also, select a new similar keyword from the tags listed above the search results. User can also, expand on the returned results by selecting 'Load More' at the bottom of the results.

--> Screenshot of results, tags, load more here

[![Password Generator ouput screenshot][form-screenshot]]('public/images/search-form.png')

### Product

User may view the selected product, see the price, select a size and a quantity, and add to their cart. There is no user authentication or persistence built in, so it is all a single browser session. User may also, read reviews for the product, read a description, and browse keywords associated with the product. Once the user has selected their desired size and quantity, the product can be added to the cart.

[![Bookmark the location][bookmark-location]]('./images/bookmark-location.png')

### Cart

In the cart the use may view all the items added to the cart, edit individual products or delete products from the cart. The can also view the cart subtotal. There is not checkout functionality built in to this application.

<p align="right">(<a href="#art-prints">back to top</a>)</p>

## Going Forward

Additional features may include:

- Rest API for server/db storage persistence of products/cart

Known items to refactor:

<p align="right">(<a href="#art-prints">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#art-prints">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[![LinkedIn][linkedin-shield]][linkedin-url]
[![GitHub][github-shield]][github-url]
[![Project][project-shield]][project-repo]
![JavaScript][javascript]<br/>
[![React][react-shield]][react-url]<br/>
[![Redux][redux-shield]][redux-url]<br/>
[![React Router][router-shield]][react-router-url]<br/>
[![UnSplash][unsplash-shield]][unsplash-url]

<p align="right">(<a href="#art-prints">back to top</a>)</p>

[issues-shield]: https://img.shields.io/github/issues/mike-uffelman/weather-app.svg?labelcolor=green
[issues-url]: https://github.com/mike-uffelman/art-prints/issues
[license-shield]: https://img.shields.io/github/license/mike-uffelman/weather-app.svg
[license-url]: https://github.com/mike-uffelman/weather-app/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-profile-blue
[linkedin-url]: https://www.linkedin.com/in/michael-uffelman-34289521/
[github-url]: https://github.com/mike-uffelman
[github-shield]: https://img.shields.io/badge/GitHub-profle-orange
[project-repo]: https://github.com/mike-uffelman/art-prints
[home-screenshot]: src/images/home-screenshot.jpg
[search-screenshot]: src/images/search-screenshot.jpg
[history-screenshot]: src/images/history-screenshot.jpg
[results-screenshot]: src/images/results-screenshot.jpg
[product-screenshot]: src/images/product-screenshot.jpg
[cart-screenshot]: src/images/cart-screenshot.jpg
[form-screenshot]: public/images/search-form.png
[icons-screenshot]: images/readMeImgs/icons.png
[project-shield]: https://img.shields.io/badge/GitHub-repo-gray?color=#6cc644
[shield-search]: images/check_password.svg
[copy-icon]: images/copy2.svg
[info-icon]: images/info.svg
[checked-passwords]: ./images/readMeImgs/password-validation.png
[usage-demo]: ./images/readMeImgs/pw_generator_demo.gif
[bookmarks]: ./images/bookmarks_black_24dp.svg
[bookmark-location]: public/images/bookmark-location.png
[bookmarks-screenshot]: public/images/bookmarks-screenshot.png
[mobile-nav]: public/images/mobile-nav.png
[desktop-nav]: public/images/desktop-nav.png
[javascript]: https://img.shields.io/badge/JavaScript-grey?style=for-the-badge&logo=javascript
[react-shield]: https://img.shields.io/badge/React-grey?style=for-the-badge&logo=react
[react-url]: https://react.dev/
[redux-shield]: https://img.shields.io/badge/Redux-grey?style=for-the-badge&logo=redux
[redux-url]: https://react-redux.js.org/
[redux-toolkit-url]: https://redux-toolkit.js.org/
[rtk-shield]: https://img.shields.io/badge/Redux%20Toolkit-grey?style=for-the-badge&logo=redux-toolkit
[react-router-url]: https://reactrouter.com/en/main
[router-shield]: https://img.shields.io/badge/React%20Router-grey?style=for-the-badge&logo=react-router
[unsplash-url]: https://unsplash.com/
[unsplash-shield]: https://img.shields.io/badge/Unsplash-grey?style=for-the-badge&logo=unsplash

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
