import React from 'react';
import { fetchReviews } from '../../lib/api';
import List from '../App/List';
import Card from './Card';

export default ReviewList = () => {
  return <List fetchData={fetchReviews} renderItem={item => (
    <Card album={{
      cover: item.album.image || item.album.image_thumb,
      coverThumb: item.album.image_thumb,
      title: item.album.name
    }}/>
  )}/>
};
