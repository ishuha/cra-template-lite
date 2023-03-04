# Getting Started with Create React App Template Lite.

> **_NOTE:_**  Currently this is a beta version so you may see some extra files or folders apart than the folder structure shown above but don't worry new updates will always be on the way.
If you found any issue or suggestions i will soon update a contact.

### This is a template for light weight projects including short flow for login, register and home which will be a protected route and important dependencies for project such as [routing](https://reactrouter.com/en/main), [state management](https://redux-toolkit.js.org/) etc.
##### It also gives you a short flow for a quick start, So you can forget about setting up the boiler plate all over again for each app you create each time.
##### Creating a light weight React template can be a great way to jumpstart your development process without any unnecessary bloat or overhead.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). and By [Ishuha](https://github.com/ishuha/cra-template-lite).

**Folder Structure in project.**

> **src** - This is the main directory.

> *  assets - This is for all assets.
> *
> *  components - This is for all common/reusable components be here.
> * > * componentName - This is a directory with component name.
> * > * > * Component_Name.jsx - jsx file containing component's code.
> * > * > * component_name.modules.css - css file containing component's and standalone component's related css.
> * > * > * standalone_component_name.jsx - If there are any more components needed which are only required for the component in this folder then those components can go here.

> *  pages - This is for main pages which will be having their own routes i.e home, login etc.
> * > * pageName - This is a directory with page name which will be having its one or more.
> * > * > * Page_Name.jsx - jsx file containing page's code.
> * > * > * page_name.modules.css - css file containing page's and standalone component's related css.
> * > * > * standalone_component_name.jsx - If there are any more components needed which are only required for the page in this folder then those components can go here.

> *  redux - This is for redux toolkit's.
> * > * Features - This is a directory in which all the feature's reducers/slices are created.
> * > * > * feature_name.jsx - jsx file all feature related code i.e Creating the reducer/slice etc.
> * > * index.js - This is where our store will be defined and reducer will get combined.

> *  routes - This id for defing all routes of your application.
> * > * index.jsx - This is file where all our routes will get defined.
> * > * ProtectedRoutes.jsx - This will be ProtectedRoute component.

> *  services - This is for services for our application i.e Api calling, service based functions etc.
> * > * api - This is where all the api functions are defined based on their functionality.
> * > * > * feature_name - This will be for all feature based api.
> * > * interseptor.jsx - this will be our interseptor where we can setup base url for api calls and we can intersept requests and responses.

> *  utils - This is for utilities i.e constants, utility functions etc.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.