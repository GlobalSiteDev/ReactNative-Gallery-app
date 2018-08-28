import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';

import GalleryList from './src/containers/GalleryList';
import PictureDetails from './src/components/PictureDetails';


const App = () => (
    <AppNavigator /> 
);

const AppNavigator = createStackNavigator({
    Main: GalleryList,
    Details: PictureDetails
});

export default App;

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
