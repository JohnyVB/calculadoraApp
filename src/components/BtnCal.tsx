import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface btn {
    title: string;
    color?: string;
    width?: boolean;
    action: (textNumber: string) => void;
}

export const BtnCal = ({title, color, width = false, action}: btn) => {
    return (
        <TouchableOpacity onPress={() => action(title)}>
            <View style={[
                styles.button,
                (width) && styles.widthButton,
                (!color) 
                ? styles.defaultColor 
                : (color === 'orange') 
                ? styles.orangeColor
                : styles.grayColor
                
            ]}>
                <Text style={{
                    ...styles.textButton,
                    color: (color === 'gray')
                    ? 'black'
                    : 'white'
                }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    textButton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    defaultColor: {
        backgroundColor: '#2D2D2D'
    },
    grayColor: {
        backgroundColor: '#9B9B9B'
    },
    orangeColor: {
        backgroundColor: '#FF9427'
    },
    widthButton: {
        width: 180
    }
});