import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'

interface SkillCardPropos extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({skill, ...rest }: SkillCardPropos) {
    return (

        <TouchableOpacity  style={styles.buttonSkill} activeOpacity={.7} >
            <Text style={styles.textSkill} {...rest}>
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