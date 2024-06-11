// GradientText.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const GradientText = ({ text, style }) => {
    return (
        <MaskedView
            maskElement={
                <Text style={[styles.maskedText, style]}>{text}</Text>
            }
        >
            <LinearGradient
                colors={['#089FE8', '#087BBA']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                 <Text style={[{opacity:0}, style]}>{text}</Text>
            </LinearGradient>
        </MaskedView>
    );
};

const styles = StyleSheet.create({
    maskedText: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor:'transparent'
    },
    gradient: {
        flex: 1,
        paddingVertical:5
    },
});

export default GradientText;
