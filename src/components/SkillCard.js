import React from 'react';
import {TouchableOpacity, Text, StyleSheet } from 'react-native'

export function SkillCard({skill}) {
    return (

        <TouchableOpacity  style={styles.buttonSkill} activeOpacity={.7} >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1f1E25',
        padding: 15,
        borderRadius: 7,
        marginVertical: 10
    },

    textSkill: {
        color: '#FFF',
        backgroundColor: '#1f1E25',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})