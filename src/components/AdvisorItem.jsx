import React from 'react'
import { View, Text, Image , StyleSheet, FlatList} from 'react-native'

const AdvisorItem = ({advisor}) => {
    return (
        <View style={styles.container}>
            <View style={styles.advisorItem}>
                <Image source = {{uri: advisor.avatarUrl?.url}} style={styles.imageCustom}/>
                <View style={styles.contentCustom}>
                    <Text>Name: {advisor.displayName}</Text>
                    <Text>Phone: {advisor.phone}</Text>
                    <View >
                        <Text>Skills:</Text>
                        <View >
                            <Text>{advisor.skillsCollection?.items.map(skill => (
                                    <View style={styles.category}>
                                        <Text  key={skill.id}> + {skill.displayName}</Text>
                                    </View>
                            ))}</Text>
                        </View>
                    </View>
                    <View >
                        <Text>Categories:</Text>
                        <View >
                            <Text>{advisor.categoriesCollection?.items.map(type => (
                                    <View style={styles.category}>
                                        <Text  key={type.id}> + {type.displayName}</Text>
                                    </View>
                            ))}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style = {styles.lineStyle} />
        </View>
    )
}

export default AdvisorItem;

const styles = StyleSheet.create({
    container: {
        width:350,
        
    },
    advisorItem:{
        display:'flex',
        flexDirection:'row',
        padding:10
    },

    imageCustom: {
        height: 170,
        width:120,
        paddingLeft:10
    },
    
    contentCustom:{
        marginLeft:10,
        flexWrap:'wrap',
        display:'flex',  
    },
    skills:{
        width:200,
        display:'flex', 
        flexDirection:'column',},
    category:{
        width:200,
        display:'flex', 
        flexDirection:'column',
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
        width:'90%'
   }
});