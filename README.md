# [TITLE GOES HERE]

## Available Scripts

In the project directory, you can run:

### `npm i` or `npm install`

To install all the dependencies to run the project

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

### Deployment

Deployment will happen automatically thanks to **Vercel** whenever you push to or merge a PR into main branch

## Tools used

These are the tools used to make our life easier

- **Husky**: To run scripts before and after a commit, used to lint and format the project before a commit
- **Prettier**: format files code to meet our project requirements and settings.
- **Eslint**: Help shipping a clean code with no unused variables and so on...
- **Testing Library**: Tests the application :-)

## Hooks for Husky

- pre-commit: This will run before each commit to make sure everything is correct. It will run eslint which it will run prettier also.

## Github Workflows

Until now we have only one action which set to run on every push or merge to the main branch, it will test the application before mereging to the main branch.
