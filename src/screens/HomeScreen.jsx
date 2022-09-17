import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity,TouchableHighlight, Pressable, Modal } from 'react-native';
import advisorData from '../data/data.json';
import { useState, useEffect, useTransition } from 'react';
import AdvisorItem from '../components/AdvisorItem';
import {Ionicons} from '@expo/vector-icons';
import { ObjectStatus } from '../mock-api/status';


const HomeScreen = () => {
    const [fillterAdvisor, setFillterAdvisor] = useState([]);
    const [view, setView] = useState(false);
    const [search, setSearch] = useState("")
    const [viewSearch,setViewSearch]= useState([...fillterAdvisor]);
    const [modalVisible, setModalVisible] = useState(false);
    const [status, setStatus] = useState('');

    const changeSearch = (text) => {
        setSearch(text)
        if(text==""){
            setViewSearch([...fillterAdvisor]);
            return;
        }
        setViewSearch([...fillterAdvisor.filter((adv)=>adv.displayName.match(new RegExp(text,'i')))]);
    }

    const changeView = () => {
        setView(prevCheck => !prevCheck);
    }

    const changeStatus = () => {
        if(status==""){
            setViewSearch([...fillterAdvisor]);
            return;
        }
        setViewSearch([...fillterAdvisor.filter((adv)=>adv.status.includes(status))]);
    }

    useEffect(() => {
        const advisorList  = advisorData.data.advisorProfileCollection.items;
        setFillterAdvisor(advisorList);
        setViewSearch(advisorList);
    }, []);

    return (
        <View >
            <View style={styles.header}>
                <Text>Unitz Test - Hoang Trung Quan</Text>
                <Text>Advisor List</Text>
            </View>
        <StatusBar style="auto" />
        <View style={styles.searchBar}>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>(changeSearch(text))}
                value={search}
                placeholder="Type to search advisors ..."
            />
            <TouchableOpacity style={styles.searchBarFilter} onPress={()=> setModalVisible(true)}>
                <Ionicons name="ios-filter-outline" size={20} color="#ABA7A7" style={{alignSelf:'center'}} />
            </TouchableOpacity>
        </View>
        <View style={styles.viewCenterModalStatus}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>    
                    <View style={styles.modalView}>
                    <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>X</Text>
                    </Pressable>
                        <Text style={styles.modalText}>Fillter by status:</Text>
                        {
                            ObjectStatus.map((item, index)=>(
                                <View style={{width:100, height:30, }} key={index}>
                                    <TouchableHighlight
                                        value={item.value}
                                        underlayColor='#f2f2f2'
                                        onPress={() => {
                                            setStatus(item.value);
                                            changeStatus();
                                            setModalVisible(!modalVisible)
                                        }}
                                        style={{borderWidth:1, height:20, borderRadius:15}}
                                        color={item.isChecked ? "#4630EB" : undefined}>
                                        <Text style={{ paddingLeft: 5 }}>{item.name}</Text>
                                    </TouchableHighlight>
                                </View>
                            ))
                        }
                        {/*  */}
                    </View>
                </View>
            </Modal>
        </View>
        <View>
            <TouchableOpacity
                style={styles.swichView}
                onPress={()=>changeView()}
            >
            <Text>Switch View</Text>
        </TouchableOpacity>
        </View>
        <ScrollView 
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}
            horizontal={view}
        >
            {viewSearch && viewSearch?.length === 0 ? (
                <Text>No items </Text>
            ) : viewSearch.map(advisor => (
                <AdvisorItem key={advisor.sys.id} advisor={advisor}/>
            )) }
        </ScrollView>
        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    header:{
        margin:20
    },
    container: {
        backgroundColor: '#fff',
        margin:20,
        paddingBottom:200,
    },
    input: {
        height: 36,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        width:'75%'
    },
    selected: {
        marginVertical: 30,
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderColor: "#666",
    },
    swichView:{
        marginLeft:20,
        marginRight:20,
        marginBottom:10
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
       
    },
    searchBarFilter: {
        width: 36,
        height: 36,
        borderRadius: 4,
        justifyContent: "center",
        backgroundColor: "white",
    },


    // Show Status
    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "flex-end",
        marginTop:130
    },
    modalView: {
        margin: 20,
        width:200,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    button: {
        borderRadius: 20,
        // padding: 10,
        elevation: 2, 
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: 'right'
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

});