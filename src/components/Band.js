import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Avatar, Card, ListItem, COLOR } from 'react-native-material-ui';
import HtmlView from 'react-native-htmlview';
import { fetchBands } from '../lib/api';
import List from './App/List';

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 16,
    padding: 16,
  },
  a: {
    color: COLOR.red500
  }
});

export class BandCard extends PureComponent
{
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    style: PropTypes.string,
  };

  render() {
    const {name, description, style, image} = this.props;
    return (
      <Card>
        {image ? <Image source={{uri: image}} style={{width: 350, height: 200}} resizeMode='cover'/> : null}
        <View style={styles.textContainer}>
          <ListItem
            centerElement={{
              primaryText: name,
              secondaryText: description,
              tertiaryText: style,
            }}
          />
        </View>
      </Card>
    );
  }
}

export const BandList = () => {
  return (
    <List fetchData={fetchBands} renderItem={({item}) => (
      <BandCard
        name={item.name}
        description={item.description}
        style={item.style}
        image={item.image || null}
      />
    )} />
  );
};
