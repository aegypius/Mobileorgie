import { View } from 'react-native';
import {NewsList} from './components/News';
import {ReviewList} from './components/Review';

const Routes = {
  HOME: {
    title: 'Metalorgie',
    Page: NewsList,
    icon: 'stars'
  },
  BANDS: {
    title: 'Groupes',
    Page: View,
    icon: 'group'
  },
  REVIEWS: {
    title: 'Chroniques',
    Page: ReviewList,
    icon: 'play-circle-filled'
  },
  LIVE: {
    title: 'Concerts',
    Page: View,
    icon: 'speaker'
  },
  ALBUMS: {
    title: 'Sortie d\'albums',
    Page: View,
    icon: 'track-changes'
  },
  ARTICLES: {
    title: 'Articles',
    Page: View,
    icon: 'subject'
  },
  PICTURES: {
    title: 'Photos',
    Page: View,
    icon: 'photo-camera'
  },
  ABOUT: {
    title: 'À propos',
    Page: View,
    icon: 'help'
  }
};

export default Routes;
