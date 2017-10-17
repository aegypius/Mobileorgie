import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-material-ui';
import { COLOR } from 'react-native-material-ui';
import HtmlView from 'react-native-htmlview';
import {uniqBy} from 'lodash';
import ReviewCard from '../Review/ReviewCard';

const apiEndpoint = 'http://www.metalorgie.com/api/';

const fetchData = (start = 0, limit = 10) => {
  const url = `${apiEndpoint}/review.php?start=${start}&limit=${limit}`;
  return fetch(url)
    .then(response => response.json())
    // .then(response => {console.log(response); return response;})
    .catch(error => console.error(error))
  ;
}

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 16,
    padding: 16,
  },
  a: {
    color: COLOR.red500
  }
});

export default class Review extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      refreshing: true,
      offset: 0,
      limit: 10,
      data: []
    };
  }

  fetchData() {
    const {offset, limit, data} = this.state;
    this.setState({ loading: true });
    return fetchData(offset, limit)
      .then(results => {
        this.setState({
          data: uniqBy([...data, ...results], 'id'),
          error: results.error || null,
          loading: false,
          refreshing: false
        })
      })
      .catch(error => {
        this.setState({
          error,
          loading: false,
          refreshing: false,
        })
      })
    ;
  }

  componentDidMount() {
    this.fetchData();
  }

  handleRefresh() {
    this.setState({
      offset: 0,
      refreshing: true
    }, () => this.fetchData())
  }

  handleMore() {
    this.setState({
      offset: this.state.data.length
    }, () => this.fetchData())
  }

  renderFooter() {
    if (!this.state.loading || this.state.data.length === 0) {
      return null;
    }

    return (
      <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  render() {
    const {refreshing, data} = this.state;
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          refreshing={refreshing}
          ListFooterComponent={() => this.renderFooter()}
          onRefresh={() => this.handleRefresh()}
          onEndReached={() => this.handleMore()}
          onEndReachedThreshold={5}
          renderItem={({item}) => (
            <ReviewCard album={{
              cover: item.album.image || item.album.image_thumb,
              coverThumb: item.album.image_thumb,
              title: item.album.name
            }}/>
          )}
        />
      </View>
    );
  }
}
