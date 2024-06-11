import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Wrapper } from '../../components';
import SuccessImage from '../../assets/password-changed-success.png'

function Success() {
    return (
        <Wrapper>
            <View style={styles.imageContainer}>
                <Image source={SuccessImage} alt='logo' style={styles.image} />
            </View>
            <Text style={styles.successText}>Your password has been changed successfully</Text>
        </Wrapper>
    );
}


const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 40
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 10,
        resizeMode: 'contain'
    },
    successText: {
        width: '80%',
        marginHorizontal:'auto',
        fontSize: 20,
        color: '#1f1f1f',
        opacity: .5,
        textAlign: 'center'
    }
})


export default Success;