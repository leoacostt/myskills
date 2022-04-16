import React, { useState } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    TouchableOpacity,

} from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

export function Home() {

    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState([])

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                 Welcome, Leonardo
            </Text>
            <TextInput 
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill}/>

            <Text style={[styles.title, {marginVertical: 40}]}>
                My Skills
            </Text>

            {   
                mySkills.map(skill => (
                    <SkillCard key={skill} skill={skill}/>
                ))         
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,
    },

    title :{
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },

    input: {
        backgroundColor: '#1f1E25',
        color: '#FFF',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7,
    },

    buttonSkill: {
        backgroundColor: '#1f1E25',
        padding: 15,
        borderRadius: 7,
    },

    textSkill: {
        color: '#FFF',
        backgroundColor: '#1f1E25',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'

    }

})