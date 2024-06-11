import React from 'react';
import { GradientButton, InputField, Wrapper } from '../../components';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';



const formSchema = z.object({
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "*Please enter same password.",
    path: ["confirmPassword"],
});

function NewPassword() {
    const router = useRouter();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            password: '',
            confirmPassword: ''
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data) => {
        // Alert.alert("Data ==>> ", JSON.stringify(data))
        router.push('/success')
    }


    return (
        <Wrapper>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>New Password</Text>
                <Text style={styles.text}>Set your new password!</Text>
            </View>
            <View style={styles.formContainer}>
                <InputField
                    control={control}
                    label={'Password'}
                    name={'password'}
                    type='password'
                />
                <InputField
                    control={control}
                    label={'Confirm Password'}
                    name={'confirmPassword'}
                    type='password'
                />
                <View style={{ marginTop: 15 }}>
                    <GradientButton onPress={handleSubmit(onSubmit)} text={'NEXT'} />
                </View>
            </View>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 20,
        gap: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1F1F1F'
    },
    text: {
        color: '#1F1F1F',
        opacity: .5
    },
    formContainer: {
        gap: 10,
        marginTop: 20
    }
})


export default NewPassword;