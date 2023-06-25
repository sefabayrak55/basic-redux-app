import React, { Component } from 'react'
import { connect } from 'react-redux';
import { decreaseCounter, increaseByTwoCounter, increaseCounter } from '../redux/actions/counterActions';
import { bindActionCreators } from 'redux';

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e=>{
          this.props.dispatch(increaseByTwoCounter());
        }}>
          +2
        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions:bindActionCreators(increaseByTwoCounter, dispatch)};
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);