import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const fullPicture = (props) => (
    <View style={styles.imageContainer}>
        <Image source={{ uri: props.source }} style={styles.image} />
    </View>
);

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 400
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default fullPicture;
