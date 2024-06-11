import React, { useState } from 'react';
import { GradientButton, Wrapper } from '../../components';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import Verify from '../../assets/confirm-email.png'
import OtpTextInput from 'react-native-text-input-otp';
import OTPInput from '../../components/OtpInput';
import { useRouter, useGlobalSearchParams } from 'expo-router';

function Verification() {
    const [otp, setOtp] = useState('');
    const router = useRouter();
    const queryParams = useGlobalSearchParams();

    function onSubmit() {
        // Alert.alert("Data ==>> ", JSON.stringify(otp))
        router.push('/new-password')

    }

    return (
        <Wrapper>
            <View style={styles.imageContainer}>
                <Image source={Verify} alt='verify' />
            </View>
            <Text style={styles.codeSentText}>
                Code has been sent to registered email {queryParams?.email}
            </Text>
            <Text style={styles.codeText}>Please enter 4 digit code</Text>
            <View style={{ marginTop: 10 }}>
                <OTPInput length={4} value={otp} onChangeText={setOtp} />
            </View>
            <View style={styles.resendContainer}>
                <Text style={{ color: '#1F1F1F' }}>Didn't receive code?</Text>
                <Text style={styles.resendText}>Resend</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <GradientButton disabled={otp.length !== 4 ? true : false} text={'VERIFY'} onPress={onSubmit} />
            </View>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        paddingVertical: 30
    },
    codeSentText: {
        color: '#1f1f1f',
        opacity: 0.5,
        textAlign: 'center',
        lineHeight: 25
    },
    codeText: {
        color: '#1f1f1f',
        fontWeight: 'regular',
        textAlign: 'center',
        marginTop: 20,
    },
    resendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
        fontWeight: 'regular'
    },
    resendText: {
        color: '#1E8EF5',
        marginLeft: 5,
    }
})
export default Verification;