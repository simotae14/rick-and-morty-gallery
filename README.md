# Project Name: Rick and Morty Gallery

## Description of the Project

Using the Rick & Morty API (rickandmortyapi.com) display the profiles of the characters (with
pagination).
The profile of a character should include:

- Image
- Character information (name, species, etc).
- Origin and location information (name, dimension, amount of residents, etc).
- Name of the chapters the character is featured on.
  The API provides REST and GraphQL versions.
  You are free to use any library/framework or even language. Be ready to explain the rationale
  for your choices.
  The exercise should be submitted to a public repository. Make sure that running your solution
  requires no global dependencies (besides node/npm/yarn) and it's possible to run it with only
  one command (besides yarn/npm install).
  Write the code with production standards in mind.

## Project Status

This project is provided with unit tests, end to end tests with playwright and documentation with storybook.

Here some pictures of the resulting pages

/ (the Homepage)
![localhost_5173_](https://github.com/simotae14/rick-and-morty-gallery/assets/2589748/d5d65c0c-360f-4c70-9fc1-f7de3b48c65b)

/details (the Detail page)
![localhost_5173_ (1)](https://github.com/simotae14/rick-and-morty-gallery/assets/2589748/188aed72-06c5-4075-aa39-7dafc053194c)

## Installation and Setup Instructions

<span style="color:red"> Important! </span>
In order to run all the scripts you need to install `node`. I reccomend to use the version `16.16.0` to ensure that all the other dependencies in the package.json are supported

### Install dependencies:

`npm install`

### To run the web app:

Use the command:

`npm run dev`

To Visit App:

[http://localhost:5173/](http://localhost:5173/)

### To run the build version of the web app:

Use the command:

`npm run build`

to build the web app
and after that

Use the command:

`npm run preview`

to execute the production version of our web app

To Visit App:

[http://localhost:5173/](http://localhost:5173/)

### To run the test suite:

You can run the unit test from the root of the project with the command

`npm test`

the e2e tests

`npm run test:e2e`

and if you want to see the coverage of the code

`npm run coverage`

### To see the documentation:

You can see the documentation of every single component made with storybook running the script

`npm run storybook`

And are available at the address:

[http://localhost:6006](http://localhost:6006)

### Pre-commit

I have configured the pre-commit with husky and lint-staged

### Github Actions

I have created some github actions to run

- tests
- coverage
- format of the code with prettier
- lint of the code

## Final Reflections

This was a 5 days long project built for the Cloud Academy offer. Project goals included using a sort of production environment:

- I used `vite` with `ssr`, `React` and `TypeScript`
- `apollo-graphql` for querying GraphQL
- `styled-components`

I have also added:

- `react-testing-library` for the unit tests with `vitest`
- `storybook` for documenting the Components
- `zustand` to manage the state of our application
- `error-boundary` to handle the errors inside the Application
- `React.Suspense` to handle the lazy loading of the routes
- `react-router-dom` to handle the different pages and links
- `React.lazy` to import dinamically the pages
- `husky` and `lint-staged` for the pre-commit
- accessibility with `axe` integrated in the unit tests, inside the storybook

Originally I started with a `Component driven` user interface, to implement the components creating the UI from "the bottom up" starting with basic components to progressively combine them to assemble the pages. This approach in addiction to the `Atomic design` let me start with easy steps and organizing the code in a structured way.
Also this solution lets me implement starting from the zero the unit tests and the storybooks for every component.

The most challenging thing for me was to use some technologies like Vite, because I was curious to see how it works in a bigger project

In addiction I decided to introduce a lightweight library that I use in my last work experience, called `zustand` to handle the state of the app, I have decided to store the minimum data needed like the `detailId` and the `currentPage` to syncrhonize the pagination between the two pages.

I have also realized from scratch the pagination component used.

I have decided to redirect to the homepage the user when he goes to the details page from outside the site or refreshing the page, maybe in the next iteraction I can persist this state in session storage or in the local storage.
Also we can increase the number of assertions in unit test and with some time add also some automation tests with Playwright.

The navigation is simple, a user land to the gallery page and can select one of the characters, when he selects the Character then he goes to the Details page. The user can select other characters, to go back to the homepage he can click the X button on the Detail element or the title.
