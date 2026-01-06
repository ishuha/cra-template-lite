# Create React App Template Lite

A lightweight, feature-packed template for [Create React App](https://github.com/facebook/create-react-app) designed to jumpstart your development with essential tools pre-configured.

## 🚀 Overview

`cra-template-lite` provides a clean and modular foundation for React applications. It comes pre-configured with:
-   **Routing**: [React Router 6](https://reactrouter.com/) with protected route implementation.
-   **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) setup for scalable state management.
-   **API Handling**: [Axios](https://axios-http.com/) configured with interceptors for streamlined API requests.
-   **Folder Structure**: A scalable and organized directory structure best suited for small to medium-sized projects.

## 🛠 Features

-   **Clean & Lightweight**: No unnecessary bloat, just the essentials.
-   **Authentication Flow**: Includes a basic structure for Login and Protected Home routes.
-   **Modular Architecture**: Components, Pages, and Services are logically separated.
-   **Production Ready**: Includes `serve` for testing production builds locally.

## 📦 Installation
To use this template, pass `--template lite` when creating a new React app:

```sh
npx create-react-app my-app --template lite
```

Or for an existing project folder:
```sh
npx create-react-app . --template lite
```

## 📂 Folder Structure

The project structure is designed for scalability and maintainability:

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── pages/           # Application pages (views)
├── redux/           # Redux store and slices (features)
├── routes/          # Route definitions and Protected Route wrapper
├── services/        # API services and Interceptors
├── styles/          # Global styles
└── utils/           # Utility functions and constants
```

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run build-and-serve`
Builds the project and serves it locally using a static server. Great for verifying production builds.

## 🤝 Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/ishuha/cra-template-lite).

## 📄 License
This project is licensed under the MIT License.