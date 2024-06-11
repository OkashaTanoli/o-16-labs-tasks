import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const InputField = ({ control, name, label, style = {}, type = 'text', ...otherProps }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <View style={[styles.inputContainer, style]}>
                    <Text style={styles.inputLabel}>{label}</Text>
                    {
                        type === 'text' ?
                            <TextInput
                                style={styles.input}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                {...otherProps}
                            />
                            :
                            type === 'select' ?
                                <Picker
                                    selectedValue={value}
                                    onValueChange={onChange}
                                    onBlur={onBlur}
                                    style={styles.input}
                                >
                                    <Picker.Item enabled={false} label="Select" value="" />
                                    {
                                        otherProps.options.map((option, i) => {
                                            return (
                                                <Picker.Item key={i} label={option.label} value={option.value} />
                                            )
                                        })
                                    }
                                </Picker>
                                :
                                <View style={styles.passwordContainer}>
                                    <TextInput
                                        style={styles.inputPassword}
                                        secureTextEntry={!showPassword}
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        {...otherProps}
                                    />
                                    <TouchableOpacity
                                        style={styles.eyeIcon}
                                        onPress={() => setShowPassword(!showPassword)}
                                    >
                                        <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="grey" />
                                    </TouchableOpacity>
                                </View>
                    }
                    {error && <Text style={{ color: 'red' }}>
                        {error.message}
                    </Text>
                    }
                </View>
            )
            }
        />
    )
}





const styles = StyleSheet.create({
    inputContainer: {
        gap: 5,
        width: '100%'
    },
    inputLabel: {
        color: '#1F1F1F',
        opacity: 0.5,
        fontSize: 12,
        fontWeight: '500'
    },
    input: {
        width: '100%',
        backgroundColor: '#F9F9F9',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    inputPassword: {
        flex: 1,
        paddingVertical: 10
    },
    eyeIcon: {
        padding: 5,
    },
})

export default InputField;