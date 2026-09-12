# Repository Explorer

A responsive public repository search application built with React and the GitHub REST API.

Repository Explorer allows users to search public GitHub repositories and explore useful information such as repository description, programming language, star count, and last update date.

This project was built as part of the **DevConnect Verified Frontend Internship**, with a focus on working with real API data and handling different application states clearly.

---

## Live Demo

[Repository Explorer](https://repository-explorer-2026.netlify.app/)

---

## Screenshots

### Desktop Homepage

![Desktop Homepage](<./screenshots/01. Desktop Homepage.png>)

### Successful Search

![Successful Search](<./screenshots/02. Desktop Successful Search.png>)

### Empty State

![Empty State](<./screenshots/03. Desktop Empty State.png>)

### Error State

![Error State](<./screenshots/04. Desktop Error State.png>)

### About Page

![About Page](<./screenshots/05. Desktop About Page.png>)

### Mobile Search

![Mobile Search](<./screenshots/06. Mobile Successful Search.png>)

---

## Overview

Repository Explorer is a lightweight web application for searching and discovering public GitHub repositories.

The application connects to GitHub's public repository search API and dynamically displays the returned repository data.

The main focus of the project is handling real asynchronous data and clearly representing different application states.

The application handles:

- Initial state
- Loading state
- Successful results
- Empty results
- Request errors

A successful request that returns zero repositories is treated as an **empty state**, not as an error.

---

## Features

- Search public GitHub repositories
- Fetch real repository data from GitHub
- Display repository name and description
- Display programming language
- Display star count
- Display last update date
- Open repositories directly on GitHub
- Loading, error, and empty states
- Responsive desktop and mobile layouts
- Mobile navigation drawer
- Separate About page
- Keyboard-accessible interactive elements
- Visible focus states
- External GitHub profile link

---

## Application States

### Initial State

When the application is first opened, no search has been performed.

The user can enter a search term and submit the search form.

### Loading State

When a search is submitted, the application displays:

> Searching repositories...

Previous repository results are cleared while the new request is being processed.

### Success State

When GitHub returns matching repositories, they are displayed as individual repository cards.

Each card includes:

- Repository name
- Description
- Programming language
- Star count
- Last update date
- Link to the repository on GitHub

### Empty State

A successful API request can return zero repositories.

The application displays:

> No repositories found for "search term".

This is treated as an empty result rather than an error.

### Error State

If the API request fails, the application displays:

> Unable to fetch repositories. Please try again.

The error state is kept separate from the empty state so users can distinguish between a failed request and a successful search with no results.

---

## Demonstrating the Required States

All required states can be demonstrated without modifying the source code.

### Success

Search for:

```text
javascript

Empty

Search for:

xyrepo98this

Error

Disconnect from the internet and search for:

react

Loading

Search for a common term such as:

react

The loading message appears while the API request is being processed.


---

How the Search Works

The search interface is controlled using React state.

When the user submits a search:

1. The default form submission is prevented.


2. The application checks that the search field is not empty.


3. The loading state is enabled.


4. Previous repository results and errors are cleared.


5. A request is sent to GitHub's repository search API.


6. The search term is encoded before being added to the request URL.


7. The returned repository data is stored in React state.


8. The loading state is disabled.


9. The appropriate UI state is displayed.



The search query uses:

encodeURIComponent(search)

to safely include the user's search term in the API request.


---

Responsive Design

The interface is designed to work across desktop and mobile screen sizes.

Desktop

Navigation links are displayed horizontally.

Search input and button are displayed in a row.

Repository information has more available horizontal space.


Mobile

Desktop navigation changes to a menu button.

Navigation opens in a side drawer.

Search controls stack vertically.

Repository content adapts to the available screen width.


The layout avoids unnecessary horizontal scrolling and keeps the main functionality usable on smaller screens.


---

Accessibility

Accessibility was considered throughout the interface.

Semantic HTML

Native HTML elements are used for interactive functionality where appropriate:

<button> for actions

<a> for navigation and external links

<form> for the search interface

<input> for user input


Using native interactive elements provides built-in keyboard behavior.

Keyboard Accessibility

Interactive elements can be reached using the keyboard.

Visible focus states are provided so keyboard users can identify the currently focused element.

Accessible Labels

Icon-only controls include descriptive accessible labels where necessary.

The mobile navigation includes labels for opening and closing the navigation drawer.

Repository external-link controls also include descriptive labels identifying the repository being opened.


---

Design Approach

The visual design was intentionally kept lightweight and focused on the repository-search experience.

The interface takes inspiration from modern developer tools and GitHub-style interfaces without attempting to reproduce GitHub's interface directly.

The design uses:

Light backgrounds

Subtle borders

Restrained colors

Clear typography

Minimal decoration

Simple repository cards

Blue repository links

Muted blue search button

Comfortable spacing


The goal was to create a professional developer-focused interface without unnecessary visual decoration.


---

Components

Navbar

Provides navigation between the Home and About pages and includes a link to the developer's GitHub profile.

On smaller screens, it changes to a mobile navigation drawer.

Hero

Contains the repository search interface and manages:

Search input

API requests

Loading state

Error state

Empty state

Repository results


RepositoryCard

Displays information about an individual repository returned by GitHub, including its name, description, language, star count, update date, and GitHub link.

About

Provides information about the project and its technology stack.

Layout

Combines the main shared elements used by the Home route.

Footer

Provides copyright information, developer attribution, and a GitHub profile link.


---

Tech Stack

React

JavaScript

Tailwind CSS

React Router

Lucide React

GitHub REST API

Vite

Netlify



---

Project Structure

src/
├── assets/
├── Common/
│   ├── About.jsx
│   ├── Footer.jsx
│   └── Navbar.jsx
├── Components/
│   └── Layout.jsx
├── Pages/
│   ├── Hero.jsx
│   └── RepositoryCard.jsx
├── App.jsx
├── index.css
└── main.jsx

Additional project files:

public/
├── favicon.png
└── _redirects

screenshots/
├── 01. Desktop Homepage.png
├── 02. Desktop Successful Search.png
├── 03. Desktop Empty State.png
├── 04. Desktop Error State.png
├── 05. Desktop About Page.png
└── 06. Mobile Successful Search.png


---

Getting Started

Prerequisites

Node.js

npm


Clone the Repository

git clone https://github.com/sohelkhan-07/devconnect-repository-search.git

Install Dependencies

cd devconnect-repository-search
npm install

Run the Development Server

npm run dev

Build for Production

npm run build


---

API

The application uses GitHub's public repository search API.

Endpoint:

https://api.github.com/search/repositories

The search term is provided through the q query parameter.

Example:

https://api.github.com/search/repositories?q=react

No API key or authentication token is required for the current implementation.

The frontend does not contain any private API credentials.


---

Key Implementation Decisions

Empty Results Are Not Errors

A request that successfully returns zero repositories is treated as an empty state rather than an error.

This allows users to distinguish between "nothing matched" and "the request failed."

Clearing Previous Results

Previous repository results are cleared when a new search starts so that outdated results are not displayed while new data is loading.

Loading State

The loading state is enabled before the request and disabled after it finishes.

The finally block ensures loading is stopped whether the request succeeds or fails.

Error Handling

The application checks the HTTP response before processing the returned data.

If the response is unsuccessful, an error message is displayed.

Semantic Interactive Elements

Native buttons and links are used for interactive controls to provide natural keyboard behavior and better accessibility.

Responsive Navigation

Desktop navigation changes to a mobile drawer on smaller screens to preserve usability without taking unnecessary horizontal space.

Public API Without Credentials

GitHub's public repository search endpoint is used without an API token, so the frontend does not expose any private API credentials.


---

Testing

The application was manually tested for:

Successful repository searches

Loading state

Empty state

Error state

Repository links

About page navigation

Mobile navigation

Responsive layouts

Keyboard interaction

Visible focus states

External GitHub links

Desktop and mobile layouts

Production build


The required loading, error, and empty states were tested without modifying the application source code.


---

DevConnect Requirements

This project was completed as part of the DevConnect Verified Frontend Internship.

The State and Data task required:

A real API

Public repository search

Loading state

Error state

Empty state

All three states demonstrable without code changes

Empty results treated as a successful result

Clear error messaging


All requirements are covered by the current implementation.


---

Status

Completed

Built and deployed as part of the DevConnect Verified Frontend Internship.


---

Author

Sohel Khan

GitHub: https://github.com/sohelkhan-07

LinkedIn: https://www.linkedin.com/in/sohelkhan07/