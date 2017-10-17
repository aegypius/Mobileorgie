import { View } from 'react-native';
import Home from './components/App/Home';
import Reviews from './components/App/Reviews';

const Routes = {
  HOME: {
    title: 'Metalorgie',
    Page: Reviews,
    icon: 'stars'
  },
  BANDS: {
    title: 'Groupes',
    Page: View,
    icon: 'group'
  },
  REVIEWS: {
    title: 'Chroniques',
    Page: Reviews,
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
