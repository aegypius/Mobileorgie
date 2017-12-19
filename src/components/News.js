import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Card, COLOR } from 'react-native-material-ui';
import HtmlView from 'react-native-htmlview';
import { fetchNews } from '../lib/api';
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

export class ArticleCard extends PureComponent
{
  static propTypes = {
    image: PropTypes.string,
    texte: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Card>
        {this.props.image ? <Image source={{uri: this.props.image}} style={{width: 350, height: 200}} resizeMode='cover'/> : null}
        <View style={styles.textContainer}>
          <HtmlView value={this.props.texte} RootComponent={Text} stylesheet={styles} />
        </View>
      </Card>
    );
  }
}

export const NewsList = () => {
  return (
    <List fetchData={fetchNews} renderItem={({item}) => (
      <ArticleCard image={item.image || null} texte={item.texte}/>
    )} />
  );
};
