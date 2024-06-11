import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GoogleIcon from '../../assets/google.png'
import FacebookIcon from '../../assets/facebook.png'
import AppleIcon from '../../assets/apple.png'

function SocialLogin() {
    return (
        <>
            <View style={styles.continueWithContainer}>
                <View style={styles.continueWithLine}></View>
                <Text style={styles.continueWithText}>Continue with</Text>
                <View style={styles.continueWithLine}></View>
            </View>
            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity>
                    <Image source={GoogleIcon} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={FacebookIcon} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={AppleIcon} style={styles.socialIcon} />
                </TouchableOpacity>
            </View>
        </>
    );
}





const styles = StyleSheet.create({
    continueWithContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 25
    },
    continueWithLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#1f1f1f',
        opacity: 0.35
    },
    continueWithText: {
        color: '#1f1f1f',
        opacity: 0.35,
        marginHorizontal: 10
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 35
    },
    socialIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
})

export default SocialLogin;