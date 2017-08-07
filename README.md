# Redux Bank App

Create an application using React, React Router v4, and Redux to mimic online banking.

* For this project, please download the following files:

> Download Starter Files

> bank-app-starter-files-1.zip (6 KB)

* To get started you will need to use `create-react-app` to quickly scaffold a project. You should migrate your `components` into a components folder in the `src` directory and the styles into a `styles` folder in the `src` directory. Link up all pages to make sure they working and test using `npm run start` in the console, use Ctrl+c to exit.

* You will need use `npm install --save redux`, `npm install --save react-redux`, and `npm install --save react-router-dom` in the terminal to save Redux to your project dependencies and make it available for import.

* In your `index.js` file in your `src` directory, you will need to copy and paste the contents of the `index.js` file from the **starter files**. This will set up your router and Redux store. Please take note of the way in which this file is set up and how the Router is nested within the `Provider` from Redux. This is the only way for a router to work correctly with Redux.

* You will need to create a `data` folder and you should use the `users.js` from the **starter_files** and place it inside of the `data` folder.

* You will need to create `containers`, `actions`, and `reducers` folders as well. You will need to add the corresponding files from the starter files to the folders in your application (for example actions/index.js in the starter files will need to be copied or moved into src/actions/index.js in your project). **Be sure to look at these files for hints and placement of certain requirements.**

* You should have the following separate components:

  * Components: `App.js`

  * Components: `BaseLayout.js`

  * Containers: `UserList.js`

  * Containers: `UserDetail.js`

  * Containers: `AccountDetail.js`

  * Containers: `Transaction.js`

* You should create a `BaseLayout` navigation component that wraps the application and provides a navbar for your application. **Hint**: This should wrap your `<Switch>` component in your index.js file and allow for `{this.props.children}` so other components/routes can be rendered within it.

* Your app should mimic the functionality of the example provided at the end of this document.

* In your `actions` folder, using the `index.js` file you have been provided, there is one action creator for selecting a user and another for making a withdrawal.

  * You should create another action creator for selecting a specific account of that user and place it where the commented section of code is in that file.

* In your reducer file (reducers/index.js) you will need to make sure that your reducers are working properly. You have been given (from the **starter_files**) a reducer for selecting a specific user.

  * You will need to create a reducer for your selectAccount action creator.

* In your `UserDetail` container component, you will need to create a `mapDispatchToProps` function to gain access to the account from using the action creator. **See the comments in that file**

* In your `UserList` component, take the time to review how all of the pieces are working.

  * We create a link out of each user's name and use that to set our URL params that flow through our Router on our `index.js` src file.

* Your `AccountDetail` container component will need to be created, and should include the following:

  * import `React` from `react`, `connect` from `react-redux`, `bindActionCreators` from `redux`, a `Link` from `react-router-dom`.

  * import `{ selectAccount }` from `../actions/index`;

  * `AccountDetail` should have access to the **user** that was selected and their **account** information. You will need to `mapStateToProps` as you did in the `UserDetail` container component.

  * the `state` should reflect the reducers `selectedUser` and `selectedAccount`.

  * You will need to `connect` you `mapStateToProps` to the `AccountDetail` component and export it.

  * See the attached video for an idea of how that information should displayed.

* You will need to create a `Transaction` container component. Inside the `Transaction` container component you should create a modal that enables you to withdraw money from a selected account (see video for ideas). **See Hints Help**

* All files should be linked and you should not receive any errors in your console.

* You will need to style your application (don't forget Bootstrap 4 as an easy one!) Change the name, lingo, and look of the project!

## Hints:  

* The `AccountDetail` component will need to `mapStateToProps` - the code to do this will be:

```jsx
function mapStateToProps(state) {
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount);
  return {
    account: state.users[userIdx].accounts[accountIdx],
    user: state.users[userIdx]
  };
}
```

* Don't forget `export` and to `connect` your `mapStateToProps` to your `AccountDetail` component.

* You will need to create a `Transaction` component that will provide a modal in which the user can select an amount to withdraw from the current account.

* **Double Hint:**

  * Reactstrap Getting Started

  * Reactstrap Modals

  * this is a great tool for using Bootstrap components in React, such as a modal.

The bottom of this component should look something like the following code:

```jsx
function mapStateToProps(state) {
  /*
    You will need to create a similar mapStateToProps as the one used in the AccountDetail component.


  */
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);
```

* The buttons in the modal window can hold a value... this can be helpful for withdrawing the money.

## Hard Mode:  

* Add the ability to add users and delete users and use Redux to do so.

## Super Hard Mode:  

* Add the ability to transfer funds from one account to another, and even one user to another!

Once complete, you should see the following functionality in your application:

* bankappfinal.gif