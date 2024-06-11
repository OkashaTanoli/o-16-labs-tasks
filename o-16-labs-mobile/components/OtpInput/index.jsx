// components/OTPInput.js
import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput = ({ length, value, onChangeText }) => {
    const inputs = useRef([]);
    const [focusedInput, setFocusedInput] = useState(null);

    const handleChangeText = (text, index) => {
        const newValue = value.split('');
        newValue[index] = text;
        onChangeText(newValue.join(''));

        if (text && index < length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    return (
        <View style={styles.container}>
            {Array(length).fill(0).map((_, index) => (
                <View key={index} style={{ position: 'relative' }}>
                    <TextInput
                        style={[
                            styles.input,
                            { borderBottomColor: focusedInput === index ? '#1E8EF5' : '#DFDFDF' },
                            value[index] && focusedInput !== index && styles.inputFilled
                        ]}
                        keyboardType="numeric"
                        maxLength={1}
                        value={value[index] || ''}
                        onFocus={() => setFocusedInput(index)}
                        onChangeText={(text) => handleChangeText(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        ref={el => inputs.current[index] = el}
                    />
                    {
                        value[index] && focusedInput !== index &&
                        <View style={{
                            width: 20,
                            height: 20,
                            borderRadius: 9999,
                            backgroundColor: '#1E8EF5',
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: [
                                { translateX: -10 },
                                { translateY: -10 }
                            ]
                        }}></View>
                    }
                </View>
            ))
            }
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 25
    },
    input: {
        position: 'relative',
        width: 40,
        height: 50,
        borderBottomWidth: 1.8,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
});

export default OTPInput;
