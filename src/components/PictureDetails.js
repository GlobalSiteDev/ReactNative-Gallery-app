import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import FullPicture from './FullPicture';
import UserInfo from './UserInfo';

class PictureDetails extends Component {
    static navigationOptions = {
        title: 'Picture Details',
        headerStyle: {
            backgroundColor: '#1fbf1c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    };

    render() {
        return (
           <View style={styles.container}>
               <UserInfo 
                    bio={this.props.navigation.state.params.user.bio}
                    author={this.props.navigation.state.params.user.name} />
               <FullPicture source={this.props.navigation.state.params.urls.regular} />
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        borderColor: 'grey'
    }
});

export default PictureDetails;
