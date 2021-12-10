import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'


const AppButton = ({title,onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        padding:15,
        width:"100%",
        
    },
    text:{
        color: colors.secondary,
        fontWeight:'bold',
        fontSize:18,
        textTransform:'uppercase'
    }
})

export default AppButton
