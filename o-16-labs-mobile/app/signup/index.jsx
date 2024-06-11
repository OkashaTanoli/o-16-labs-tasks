import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientButton, GradientText, InputField, SocialLogin, TopLogo, Wrapper } from '../../components';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { Link } from 'expo-router';


const formSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(1, 'Password is required'),
    contact: z.string().min(1, 'Contact number is required'),
    find: z.string().min(1, 'This field is required'),
    isChecked: z.boolean(),
});

function SignUp() {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            contact: '',
            find: '',
            isChecked: false
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
                <Text style={styles.title}>Sign Up</Text>
                <View style={styles.formContainer}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <InputField
                            control={control}
                            label={"First Name"}
                            name={'firstName'}
                            style={{ width: '50%' }}
                        />
                        <InputField
                            control={control}
                            label={"Last Name"}
                            name={'lastName'}
                            style={{ width: '50%' }}
                        />
                    </View>
                    <InputField
                        control={control}
                        name={'email'}
                        placeholder=""
                        label={'Email'}
                        keyboardType="email-address"
                    />
                    <InputField
                        control={control}
                        name={'password'}
                        type='password'
                        label={'Password'}
                        placeholder=""
                        autoCapitalize="none"
                    />
                    <InputField
                        control={control}
                        name={'contact'}
                        label={'Contact'}
                        placeholder=""
                        keyboardType='numeric'
                    />
                    <InputField
                        control={control}
                        name={'find'}
                        type='select'
                        options={
                            [
                                { label: 'Facebook', value: 'facebook' },
                                { label: 'Instagram', value: 'instagram' },
                                { label: 'Friend', value: 'friend' },
                                { label: 'Other', value: 'other' },
                            ]
                        }
                        label={'How did you find us?'}
                        placeholder=""
                    />
                    <View style={styles.checkboxContainer}>
                        <Controller
                            control={control}
                            name={'isChecked'}
                            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                                <Checkbox
                                    style={styles.checkbox}
                                    value={value}
                                    onValueChange={onChange}
                                    color={'#1E8EF5'}
                                />

                            )}
                        />
                        <Text style={styles.checkboxText}>
                            Keep me updated with special offers, exciting products and news
                        </Text>
                    </View>
                </View>
                <GradientButton text="SIGN UP" onPress={handleSubmit(onSubmit)} />
                <View style={styles.signInContainer}>
                    <Text style={{ color: '#1F1F1F' }}>Already have an account?</Text>
                    <Text style={styles.signInText}><Link href={'/'}>Sign In</Link></Text>
                </View>
                <GradientText text={'Continue as guest'} style={{ textAlign: 'center' }} />
                <SocialLogin />
            </Wrapper>
        </ScrollView>
    );
}


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
    checkboxContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20
    },
    checkbox: {
        marginTop: 4,
        borderWidth: 1,
    },
    checkboxText: {
        color: '#1F1F1F',
        fontWeight: 'regular',
        lineHeight: 20
    },
    signInContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        fontWeight: 'regular'
    },
    signInText: {
        color: '#1E8EF5',
        marginLeft: 5,
    }
})

export default SignUp;