import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.input}>Đăng nhập</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 14,
        marginVertical: 5,
        borderRadius: 80,
        backgroundImage: 'linear-gradient(to right, #3390fb, #55bbfb)',
        alignItems: 'center'
    },
    input: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'white'
    }
})
export default CustomButton