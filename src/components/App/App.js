import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NativeModules, StatusBar, View, Text, DrawerLayoutAndroid } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import { Toolbar, COLOR, ThemeProvider } from 'react-native-material-ui';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../actions'

import Routes from '../../routes';
import Drawer from '../Drawer/Drawer';
import Container from '../../containers/Container';

const UIManager = NativeModules.UIManager;

const uiTheme = {
  palette: {
    primaryColor: COLOR.red500,
    accentColor: COLOR.red500,
  },
};

class App extends Component {

  static propTypes = {
    showDrawer: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    showDrawer: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.showDrawer !== this.props.showDrawer) {
      if (this.props.showDrawer) {
        this.drawer.openDrawer();
      } else {
        this.drawer.closeDrawer();
      }
    }
  }

  static configureScene(route) {
    return route.animationType || Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator) {
    const {Page} = route;
    const {openDrawer, closeDrawer} = this.props;
    return (
      <Container>
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
        <View style={{ backgroundColor: COLOR.red500, height: 24 }} />

        <DrawerLayoutAndroid
          ref={drawer => { this.drawer = drawer; }}
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          onDrawerOpen={openDrawer}
          onDrawerClose={closeDrawer}
          renderNavigationView={() => <Drawer route={route} navigator={navigator} />}
        >
          <Toolbar
            key="toolbar"
            leftElement="menu"
            onLeftElementPress={() => openDrawer()}
            centerElement={route.title}
            rightElement={null}
            searchable={{}}
          />
          <Page route={route} navigator={navigator} />
        </DrawerLayoutAndroid>

      </Container>
    );
  }

  componentWillMount() {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Navigator
          configureScene={App.configureScene}
          initialRoute={Routes.HOME}
          ref={this.onNavigatorRef}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
        />
      </ThemeProvider>
    );
  }
}

function mapStateToProps({drawer}) {
  return {
    showDrawer: drawer.opened
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
