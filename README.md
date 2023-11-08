<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 id='art-prints' align="center">art prints</h3>
  <p align="center">
    E-commerce photo store app
    <br>
    React, React Router, React Redux, Unsplash
    <br />
    *Does not sell products*
<div align='center'>

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>

<a href="https://art-prints.netlify.app/">View Demo</a>
·
<a href="https://github.com/mike-uffelman/art-prints/issues">Report Bug</a>
·
<a href="https://github.com/mike-uffelman/art-prints/issues">Request Feature</a>

  </p>
<br>

![project showcase][home-screenshot]
<br>

</div>
<br>

<!-- TABLE OF CONTENTS -->

## Table of Contents

  <ul>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#background-and-discussion">Background & Discussion</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
<br>
<!-- ABOUT THE PROJECT -->

## About The Project

Art Prints is an e-commerce application, where users can search images and add them to a shopping cart.

This application is built to mimic the user experience of an e-commerce website. Features include keyword search, product customization (size and quantity), shopping cart review/edit/delete, search history, product reviews, similar product tags, and more.

This is a client-side single-page application (SPA) built using React for the client interface capabilities, React Redux for centralized state management, React Router for client-side routing, and Unsplash API for image search.

There is no checkout process implemented in the application.

[Demo the app.][demo-link]

### Built With

<div align='center'>

![JavaScript][javascript]
[![React][react-shield]][react-url]
[![Redux][redux-shield]][redux-url]
[![React Router][router-shield]][react-router-url]
[![UnSplash][unsplash-shield]][unsplash-url]

</div>
<p align="right">(<a href="#art-prints">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Open the [live demo here][demo-link], or clone the repository, (node and npm are required).

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

The primary purpose for the application was to plan and practice building a modern Single Page Application (SPA) using several modern development libraries including:

- **React** - front end user interface and reusable components
- **React Router** - for client side routing and navigation of pages
- **Redux** - global state management
  <br/>

A few secondary/add-on objectives included:

- Working with APIs
- Responsive layout
- Optimization
  - Code Splitting, using React Suspense and Lazy
  - Image Optimization, via file type, loading priority, and screen size
- Testing with React Testing Library

### Selected Features

<details>
<summary style="font-weight: bold">Search</summary>

<fieldset style="margin: 15px">
<hgroup><h4 style='font-weight: bold'>Search by term</h4></hgroup>

Search by term is a key feature of any e-commerce application. The user must be able to describe the product they are looking for and search is the most common method of doing so. In the UI this is the text input field where the user can type in their desired keyword.

</fieldset>
<fieldset style="margin: 15px">
<h4 style='font-weight: bold'>Tags</h4>

Tags are a feature that allows the user to browse products that have been identified with a keyword to be similar or adjacent to their initial search. This can be found at the top of the results page and in the product details.

</fieldset>
<fieldset style="margin: 15px">
<h4 style='font-weight: bold'>History</h4>

History is a listing of all the unique searches and tag clicks that have occured in the current session. It's a useful feature that allows users to browse and return at later time. This feature can be found in the header of the application next to the search input field.

</fieldset>
<fieldset style="margin: 15px">
<h4 style='font-weight: bold'>Implementation</h4>
<p><span style="font-weight: bold">TLDR</span> - higher order components were utiziled to give state and event handlers to the components.</p>

The Search, Tags, and History components share state types (e.g search term) and event handlers, therefore a higher order component (HOC) can be utilized. The HOC wraps around the original component and passes the state and event handlers down through props to the original component. This eliminates duplicate code written in each of these components and allows for the HOC to be the single location which defines the pieces of state and event handlers. When the component is called to render, the component first passes through the HOC to return a new component with the required state and event handlers now available.

The execution of the search for all three features is very similar thanks to the HOC. When the user submits a term via the search input field or clicks a tag or history item, the submit type (e.g. 'search', 'tags', 'history') and the term is passed to the handleSubmit callback where the term will be sent to a data helper called 'search' to submit a request to Unsplash for results of the term. The response will be processed through additional helpers to generate products and tags for the results, then create a new results object for the results. After which the results are dispatched to Redux and the user is redirected to the results page where the results will render.

Tags and History also share a very similar approach of mapping over an array to return React Router Link components and could likely be refactored to a single component, as after all both components are simply producing a list of links.

</fieldset>
</fieldset>
</details>
</fieldset>
<details>
<summary style="font-weight: bold">Cart</summary>
<fieldset style="margin: 15px">
<h4 style='font-weight: bold'>Review Cart Items</h4>
The ability for the user to review the items they have added to their cart is essential for any e-commerce application. Users want to be able to confirm that the items in their cart are what they are buying.
<br/>
<br/>

In this shopping cart, the user can see their selected product, the customization they have applied (i.e. size and quantity), and the price for the product given their selections. The user may also click on the image or the product title and be redirected back to the product page.

</fieldset>
<fieldset style="margin: 15px">
<h4 style='font-weight: bold'>Edit/Delete Cart Items</h4>

Additional useful features of a shopping cart is the ability to edit or delete the product the user has added to their cart.

These features have been added such that the user may simply click the delete button listed in each cart item and the application state will update the shopping cart and re-render showing the updated cart items.

</fieldset>

<div align='center' style="margin: 15px">

![cart-demo][cart-demo2]

</div>
</details>

<details>
<summary style="font-weight: bold">Responsive Design</summary>
<fieldset style="margin: 15px">
A responsive design is an essential feature in any modern web application and greatly improves the user experience. A good responsive design is intuitive and helps the user interact with the application to achieve their purpose for using the application. This application is designed to work on a mobile, tablet, or desktop screensizes.
</fieldset>
</details>

<details>
<summary style="font-weight: bold">Pagination</summary>
<fieldset style="margin: 15px">
Anytime a user will be browsing a large listing of items, it's always a good idea to implement pagination. Doing so breaks down the information in a structured way, thus providing a more meaningful and easily digestible user experience.

<br/>

Pagination is implemented in two components of the application, the first in the results component, where the user can click the 'Load More' button to show more search results. The other component that features pagination is in the product reviews, where if there are more reviews than fits the page limit, the pagination will display at the bottom of the reviews as a numbered list of pages with forward and back arrows for navigation.

<div align='center'>

![pagination-results2][results-pagination-demo2]
![pagination-reviews][reviews-pagination-demo]

</div>

</fieldset>

</details>
<details>
<summary style="font-weight: bold">Modals</summary>
<fieldset style="margin: 15px">
A modal is used to draw the user's attention to an action or to highlight something they have interacted with. In this application modals are used to display the search history component and view the product (image) in isolation when clicked on.
<br/>

To implement modals, React's `createPortal()` method was employed to render the component outside the flow of the component where is it called.

</fieldset>
</details>

<details>
<summary style="font-weight: bold">Data Generators</summary>
<fieldset style="margin: 15px">
This application doesn't actually sell real products, it uses the Unspash API which hosts a huge collection of high-quality photographs from photographers world-wide for free. Therefore, "products" had to be generated, to achieve this, functions were created to transform the search results into fake products that could be rendered and interacted with by the user.

<br/>

The response from the Unsplash API returns an array of objects, each of which include various properties about the image, e.g. image urls, owner information, and other data necessary for usage of the results. However, for this application more data was needed to flesh out products, such as a base amount for pricing, likes, reviews, and product tags.

When the response from Unsplash is received, the results are passed into a function called `buildProducts()` which maps over the results array and returns a new array of product objects with the following properties:

```
{
    id: product.id,
    description: product.description || 'none',
    alt_description: product.alt_description || 'none',
    image_urls: product.urls || 'none',
    tags: product.tags || [],
    base_amt: (Math.random() * 10 + 6).toFixed(2),
    width: product.width || 2500,
    height: product.height || 1600,
    orientation: product.width > product.height ? 'landscape' : 'portrait',
    quantity_available: stockQuantity(),
    owner: product.user || 'none',
    likes: (Math.random() * 1000).toFixed(),
    created_at: product.created_at,
    review_count: Math.round(Math.random() * 1000)

}
```

In addition to generating products, another function `buildReviews()` generates fake product reviews using the Faker API, here is an example of a single review object returned by the function:

```
{
    product_id: product.id,
    review_id: uuidv4(),
    comment: {
        title: faker.lorem.words(),
        comments: faker.lorem.paragraph(),
    },
    date: date.toString(),
    user: faker.internet.userName(),
    rating: Math.ceil(Math.random() * 5),
}
```

All the products and reviews are added to their respective arrays then dispatched to be updated in the application state.

<br/>

</fieldset>
</details>
<p align="right">(<a href="#art-prints">back to top</a>)</p>

## Usage

The basic usage of the application is as follows:

1. Upon load of the application the user may navigate to the search bar at the top and enter a search term for a desired search result, e.g. "nature", and click the 'Search' button or hit enter. The user may also select the history icon, to view suggested searches.

<div align='center' style='padding: 5rem;'>

![search-image][search-screenshot]

![history-image][history-screenshot]

</div>
2. Once the search results have been loaded, the user may:

- browse the search results
- select 'Load More' at the bottom of the results listing to fetch more results
- select a tag from above the results for similar search results

<div  align='center' style='padding: 5rem;'>

![results-image][results-screenshot]

</div>
3. When you user has selected a product, the user will be redirected to the product page where the user will be able to view the product in detail. The user may review the product, select the quantity, change the desired size, read reviews, navigate to similar results, and add the product to their cart.
<div align='center' style='padding: 5rem;'>

![product-image][product-screenshot]

</div>
4. In the user's cart, the user will see a listing of products added to the cart and the subtotal of all the products for checkout. Here the user may edit an existing cart item, which will direct them to a page similar to the product page where they can edit the quantity and size selections. The user may also delete the item from the cart.

<div align='center' style='padding: 5rem;'>

![cart-image][cart-screenshot]

</div>

NOTE: There is no checkout feature built into this application.

<p align="right">(<a href="#art-prints">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#art-prints">back to top</a>)</p>

<!-- CONTACT -->

## Contact

<div align='center'>

[![LinkedIn][linkedin-shield]][linkedin-url]
[![GitHub][github-shield]][github-url]
[![Project][project-shield]][project-repo]

</div>

<p align="right">(<a href="#art-prints">back to top</a>)</p>

[issues-shield]: https://img.shields.io/github/issues/mike-uffelman/art-prints.svg?labelcolor=green
[issues-url]: https://github.com/mike-uffelman/art-prints/issues
[license-shield]: https://img.shields.io/github/license/mike-uffelman/art-prints.svg
[license-url]: https://github.com/mike-uffelman/art-prints/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-profile-blue
[linkedin-url]: https://www.linkedin.com/in/michael-uffelman-34289521/
[demo-link]: https://art-prints.netlify.app/
[github-url]: https://github.com/mike-uffelman
[github-shield]: https://img.shields.io/badge/GitHub-profle-orange
[project-repo]: https://github.com/mike-uffelman/art-prints
[home-screenshot]: src/images/home-screenshot.jpg
[search-screenshot]: src/images/search-screenshot.jpg
[history-screenshot]: src/images/history-screenshot.jpg
[results-screenshot]: src/images/results-screenshot.jpg
[product-screenshot]: src/images/product-screenshot.jpg
[cart-screenshot]: src/images/cart-screenshot.jpg
[results-pagination-demo2]: src/images/results-pagination-demo2.gif
[reviews-pagination-demo]: src/images/reviews-pagination-demo.gif
[cart-demo2]: src/images/cart-demo2.gif
[project-shield]: https://img.shields.io/badge/GitHub-repo-gray?color=#6cc644
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
