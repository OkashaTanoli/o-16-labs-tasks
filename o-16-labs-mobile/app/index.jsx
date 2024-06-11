import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Logo from '../assets/logo.png'
import { GradientButton, GradientText, InputField, SocialLogin, TopLogo, Wrapper } from '../components';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { Link } from 'expo-router';

const formSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(1, 'Password is required'),
});


const LoginScreen = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data) => {
        Alert.alert("Data ==>> ", JSON.stringify(data))
    }

    return (
        <ScrollView>
            <Wrapper>
                <TopLogo />
                <Text style={styles.title}>Log In</Text>
                <View style={styles.formContainer}>
                    <InputField
                        control={control}
                        name={'email'}
                        placeholder="Email"
                        label={'Email'}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <InputField
                        control={control}
                        name={'password'}
                        type='password'
                        label={'Password'}
                        placeholder="Password"
                        autoCapitalize="none"
                    />
                </View>

                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}><Link href={'/forget-password'}>Forgot password?</Link></Text>
                </TouchableOpacity>
                <GradientButton text="LOG IN" onPress={handleSubmit(onSubmit)} />
                <View style={styles.signUpContainer}>
                    <Text style={{ color: '#1F1F1F' }}>Don't have an account?</Text>
                    <Text style={styles.signUpText}><Link href={'/signup'}>Sign Up</Link></Text>
                </View>
                <GradientText text={'Continue as guest'} style={{ textAlign: 'center' }} />
                <SocialLogin />
            </Wrapper>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1F1F1F'
    },
    formContainer: {
        gap: 10
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: '#1E8EF5',
        marginTop: 5
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        fontWeight: 'regular'
    },
    signUpText: {
        color: '#1E8EF5',
        marginLeft: 5,
    }
});

export default LoginScreen;
