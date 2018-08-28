import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const image = ({ source, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Image source={{ uri: source }} style={styles.image} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 90,
        borderRadius: 5
    }
});

export default image;
