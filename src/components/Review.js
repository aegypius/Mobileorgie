import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Card, COLOR } from 'react-native-material-ui';
import HtmlView from 'react-native-htmlview';
import { fetchReviews } from '../lib/api';
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

export class ReviewCard extends PureComponent
{
  static propTypes = {
    album: PropTypes.shape({
      cover: PropTypes.string,
      coverThumb: PropTypes.string,
      title: PropTypes.string.isRequired,
      tracklist: PropTypes.arrayOf(PropTypes.string),
      year: PropTypes.string
    }).isRequired,
    rating: PropTypes.number.isRequired
  };

  static defaultProps = {
    rating: 0
  };

  render() {
    const { album } = this.props;
    console.log(album);

    return (
      <Card>
        {album.cover ? <Image source={{uri: album.cover }} style={{width: 350, height: 350}} resizeMode='cover'/> : null}
        <View style={styles.textContainer}>
          <Text>{album.title}</Text>
          <Text>{album.artist}</Text>
          {/* <HtmlView value={album} RootComponent={Text} stylesheet={styles} /> */}
        </View>
      </Card>
    );
  }
}

export const ReviewList = () => {
  return <List fetchData={fetchReviews} renderItem={item => (
    <ReviewCard album={{
      cover: item.album.image || item.album.image_thumb,
      coverThumb: item.album.image_thumb,
      title: item.album.name
    }}/>
  )}/>
};
