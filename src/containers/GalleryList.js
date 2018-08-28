import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

import Picture from '../components/Picture';

class GalleryList extends Component {
    static navigationOptions = {
        title: 'Gallery',
        headerStyle: {
            backgroundColor: '#1fbf1c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      };

    state = {
        pictures: []
    };

    componentWillMount() {
        const imagesPerPage = 30;
        const clientId = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';

        axios.get(`https://api.unsplash.com/photos/?per_page=${imagesPerPage}&client_id=${clientId
        }`)
            .then(response => this.setState({ pictures: response.data }));
    }

    renderPictures() {
        return this.state.pictures.map(picture => <Picture key={picture.id} picture={picture} navigation={this.props.navigation} />);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.flexContainer}>
                    {this.renderPictures()}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
});

export default GalleryList;
