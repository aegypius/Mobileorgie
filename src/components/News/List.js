import React from 'react';
import { fetchNews } from '../../lib/api';
import List from '../App/List';
import Card from './Card';

export default NewsList = () => {
  return (
    <List fetchData={fetchNews} renderItem={({item}) => (
      <Card image={item.image || null} texte={item.texte}/>
    )} />
  );
};
