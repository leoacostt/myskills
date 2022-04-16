import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    FlatList,

} from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface SkillData {
    id: string,
    name: string,
    date?: Date,
}

export function Home() {

    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillData[]>([])
    const [greeting, setGreeting] = useState('')

    function handleAddNewSkill() {
        const dataSkill = {
            id: String(new Date().getTime()),
            name: newSkill
        } 
        setMySkills(oldState => [...oldState, dataSkill])
    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))
    }

    useEffect(() => {

        const currentHour = new Date().getHours()
        if (currentHour < 12){
            setGreeting('Bom dia!')
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Boa tarde!')
        } else {
            setGreeting('Boa noite!')
        }
    }, [mySkills])
    
    return (

        <View style={styles.container}>
            <Text style={styles.title}>
                 Welcome, Leonardo
            </Text>

            <Text style={styles.greetings}>
                {greeting}
            </Text>

            <TextInput 
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} title="Add" />

            <Text style={[styles.title, {marginVertical: 40}]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)} />
                )}    
            />

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
    },

    greetings: {
        color: '#fff',
        marginTop: 5,
    }

})