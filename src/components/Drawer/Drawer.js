import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Drawer, Toolbar } from 'react-native-material-ui';
import Routes from '../../routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 260,
    elevation: 4,
    backgroundColor: 'white'
  }
});

export default class CustomDrawer extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  };

  render() {
    const routes = [];
    for (var route in Routes) {
      routes.push({key: route, ...Routes[route]});
    }
    return (
      <Drawer>
        <Drawer.Section
          divider
          items={routes.map(route => ({
            key: route.key,
            active: route.title === this.props.route.title,
            value: route.title,
            icon: route.icon || null,
            onPress: () => this.props.navigator.push(route)
          }))}
        />
      </Drawer>
    );
  }
}
