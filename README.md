# art-prints

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">art prints</h3>
  <p align="center">
    A responsive weather dashboard and mobile app.
    <br>
    Vanilla JS, Leaflet, OpenWeatherMap, OpenStreetMap, MVC, Sass
    <br />
    <a href="https://main--tubular-seahorse-1bbe92.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/mike-uffelman/art-prints/issues">Report Bug</a>
    ·
    <a href="https://github.com/mike-uffelman/art-prints/issues">Request Feature</a>
  </p>
<br>

[![weather showcase][product-screenshot]]('./images/weather-showcase.png')
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

--> brief discussion about the application

--> built using

[Demo the app here](https://main--tubular-seahorse-1bbe92.netlify.app/).

### Basic Usage

--> basic usage of the application

<br>

### Built With

| Technology Stack                                | Description                               |
| ----------------------------------------------- | ----------------------------------------- |
| JavaScript                                      |                                           |
| [OpenWeather API](https://openweathermap.org/)  | Weather and geocoding                     |
| [React](https://react.dev/)                     | front end                                 |
| [React Router](https://reactrouter.com/en/main) | Page routing                              |
| [React Redux](https://react-redux.js.org/)      | State management                          |
| [Redux Toolkit](https://redux-toolkit.js.org/)  | State management tool                     |
| [uuid](https://www.npmjs.com/package/uuid)      | **U**niversally **U**nique **ID**entifier |

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

Navigate to localhost

```
localhost:3000
```

<p align="right">(<a href="#art-prints">back to top</a>)</p>

## Background and Discussion

--> brief discussion - what is the project, what you were looking to achieve

This application was conceived to practice using React, React Router, and React Redux...the application features a responsive layout...

<p align="right">(<a href="#art-prints">back to top</a>)</p>

## Architecture and Design

### Architecture

---

- built with ... architecture

---

--> react front end component based
--> redux state management,

<br>

### Design

--> responsive design, router for pages

<p align="right">(<a href="#art-prints">back to top</a>)</p>

## Challenges

--> Discuss challenges

--> code splitt

Throughout the development of this project, there were many challenges that arose, from layout headaches to broken functionality.

<details>
  <summary>Navigation & Menu Positioning</summary>
    <ul>Building a responsive navigation and menu proved challenging as the layout design had navigation inside and outside the rendered weather component, depending on if the weather had been rendered or not.</ul>
    <ul>For example, if the user blocks their location, the app will load and render the menu at the bottom (in mobile view) or in the lower right corner (in dashboard view). When the user selects a location and the weather loads, the navigation menu will hide in dashboard view and appear in the component itself.</ul>
    <ul>In order to achieve this, the menu had to be rendered twice and hidden depending on the screen size using media queries. Using CSS grid properties it was not possible to render the menu once and display it inside the component as all grid children have to be inside the parent (which would not have been loaded).</ul>
</details>

<br>

<p align="right">(<a href="#art-prints">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This is the basic usage of the application:

### App Start

The user may enter a keyword into the search input or select a suggested keyword from the history icon.

--> screenshot of search bar and history

  <br>

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
[product-screenshot]: public/images/weather-showcase.png
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
