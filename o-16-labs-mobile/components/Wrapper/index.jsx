import React from 'react';
import { StyleSheet, View } from 'react-native';

function Wrapper({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: '#fff',
    }
})


export default Wrapper;