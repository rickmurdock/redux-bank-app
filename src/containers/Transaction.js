/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { withdrawFunds } from '../actions/index.js'
import { bindActionCreators } from 'redux';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Withdraw Funds</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Make a Withdrawal</ModalHeader>
          <ModalBody>
            Please pick an amount to withdraw from your credit account. Your current balance is: {this.props.account.balance}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={e => {this.toggle(); return this.props.withdrawFunds(5)}}>$5</Button>{' '}
            <Button color="success" onClick={e => {this.toggle(); return this.props.withdrawFunds(10)}}>$10</Button>{' '}
            <Button color="info" onClick={e => {this.toggle(); return this.props.withdrawFunds(20)}}>$20</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    withdrawFunds: withdrawFunds
  }, dispatch)
}

export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);