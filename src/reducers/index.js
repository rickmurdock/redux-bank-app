// import {combineReducers} from 'redux';
import {USER_SELECTED, ACCOUNT_SELECTED, WITHDRAW_FUNDS} from '../actions/index';
import userList from '../data/users';
// import update from 'immutability-helper';
import _ from 'lodash';

const initialState = {
    users: userList(),
    selectedUser: null,
    selectedAccount: null
}

const reducer = function(state = initialState, action) {

		let newState = _.cloneDeep(state);
    switch (action.type) {
			case USER_SELECTED:
				let userId = action.payload;
				newState.selectedUser = newState.users.find(element => {
					return element._id === userId;
				});
				return newState;

			case ACCOUNT_SELECTED:
				newState.selectedAccount = action.payload;
				return newState;
			/*

				You will need to correct a reducer case for ACCOUNT_SELECTED here - HINT: it should mimic closely the USER_SELECTED case.

			*/
			case WITHDRAW_FUNDS:
        newState = _.cloneDeep(state);
        const account = newState.selectedAccount;
        account.balance -= action.payload;
        return newState;
			// case WITHDRAW_FUNDS:
			// 	// const userIdx = newState.users.findIndex(user => user._id === newState.selectedUser);
			// 	// const accountIdx = newState.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount);
			// 	const account = newState.accout.balance;
			// 	newState.users[userIdx].accounts[accountIdx].balance -= action.payload;
			// 	return newState;

					// return update(state, {      THIS IS FROM IMMUTABILITY HELPER - WE ARE USING LODASH INSTEAD
					//     users: {
					//         [userIdx]: {
					//             accounts: {
					//                 [accountIdx]: {
					//                     balance: {
					//                         $apply: function(balance) {
					//                             return balance - action.payload
					//                         }
					//                     }
					//                 }
					//             }
					//         }
					//     }
					// })
			default:
				return state;
    }
}

export default reducer;
