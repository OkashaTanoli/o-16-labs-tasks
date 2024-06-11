import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Logo from '../../assets/logo.png'

function TopLogo() {
    return (
        <View style={styles.logoContainer}>
            <Image source={Logo} alt='logo' style={styles.logo} />
        </View>
    );
}


const styles = StyleSheet.create({
    logoContainer: {
        width: '100%',
        alignItems: 'center'
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
        resizeMode: 'contain'
    },
})


export default TopLogo;