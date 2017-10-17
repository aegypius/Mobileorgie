import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StyleSheet } from 'react-native';
import { ActionCreators } from '../actions';

class Container extends Component {
  static propTypes = {
    children: PropType.node,
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(() => { return {} }, mapDispatchToProps)(Container);
