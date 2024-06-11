// components/GradientButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({ text, onPress, disabled = false }) => (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
        <LinearGradient colors={['#089FE8', '#087BBA']} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 15,
        paddingVertical: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        textShadowColor: 'rgba(0,0,0,.2)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        fontWeight: '600',
    },
});

export default GradientButton;
