import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Constant from 'expo-constants' 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default class App extends Component{

    render(){
        return(
           <View style={styles.container}>
               <View style={styles.aboutMe}>
                   <Text style={{fontSize: 36, color: darkBlue, fontWeight: 'bold'}}
                   >Tentang Saya</Text>
               </View>
               <View style={styles.icon}>
                   <Ionicons name="person" size={126} color= '#CACACA' />
               </View>
               <View style={styles.name}>
                   <Text
                   style={{fontSize: 24, color:darkBlue, fontWeight:'bold'}}
                   >Mukhlis Hanafi</Text>
               </View>
               <View style={styles.title}>
                   <Text
                   style={{fontSize: 16, color:lightBlue,}}
                   >React Native Developer</Text>
               </View>
               <View style={styles.portoBox}>
                   <View style={styles.portofolioText}>
                       <Text style={{fontSize: 18, color:darkBlue, fontWeight:'bold'}}>Portofolio</Text>
                   </View>
                   <View style={styles.portofolioUse}>
                       <View style={styles.portofolioContent}>
                           <MaterialCommunityIcons name="gitlab" size={59} color= "#3EC6FF" />
                           <Text style={{fontSize:16 ,color: darkBlue, fontWeight:'bold'}}>@mukhlish</Text>
                       </View>
                       <View style={styles.portofolioContent}>
                           <AntDesign name="github" size={45} color="#3EC6FF" />
                           <Text style={{paddingTop:11, fontSize:16 ,color: darkBlue, fontWeight:'bold'}}>@mukhlis-h</Text>
                       </View>
                   </View>
               </View>
               
               <View style={styles.contact}>
                   <View style={styles.contactText}>
                       <Text style={{fontSize: 18, color:darkBlue, fontWeight:'bold'}}>Hubungi Saya</Text>
                   </View>
                   <View style={styles.contactUse}>
                       <View style={styles.contactContent}>
                           <AntDesign name="facebook-square" size={44} color="#3EC6FF" />
                           <Text style={{paddingLeft:15,fontSize:16 ,color: darkBlue, fontWeight:'bold'}}>mukhlish.hanafi</Text>
                       </View>
                       <View style={styles.contactContent}>
                           <AntDesign name="instagram" size={48} color="#3EC6FF" />
                           <Text style={{paddingLeft:11, fontSize:16 ,color: darkBlue, fontWeight:'bold'}}>@mukhlis_hanafi</Text>
                       </View>
                       <View style={styles.contactContent}>
                           <AntDesign name="twitter" size={48} color="#3EC6FF" />
                           <Text style={{paddingLeft:11, fontSize:16 ,color: darkBlue, fontWeight:'bold'}}>@mukhlish</Text>
                       </View>
                   </View>

               </View>



           </View> 
        )
    }

}

const darkBlue= '#003366';
const lightBlue= "#3EC6FF";
const greyBackground= "#EFEFEF";

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:Constant.statusBarHeight,
    },
    aboutMe:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        marginTop:12,
        width:150,
        height: 150,
        marginLeft: 100,
        backgroundColor:greyBackground,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
    },
    name:{
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    portoBox:{
        marginTop: 10,
        marginLeft: 5,
        width:350,
        height: 140,
        backgroundColor: greyBackground,
        borderColor: 'grey',
        borderRadius: 12,
    },
    portofolioText:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop:4,
        marginLeft:8,
        borderBottomColor: darkBlue,
        width:334,
        height: 40,
        borderTopEndRadius: 12,
        borderTopStartRadius: 12,
        borderBottomColor: lightBlue,
        borderBottomWidth: 2,
    },
    portofolioUse:{
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    portofolioContent:{
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:darkBlue
    },
    contact:{
        marginTop: 9,
        marginLeft: 5,
        width:350,
        height: 250,
        backgroundColor: greyBackground,
        borderColor: 'grey',
        borderRadius: 12,
    },
    contactText:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop:4,
        marginLeft:8,
        borderBottomColor: darkBlue,
        width:334,
        height: 40,
        borderTopEndRadius: 12,
        borderTopStartRadius: 12,
        borderBottomColor: lightBlue,
        borderBottomWidth: 2,
    },
    contactUse:{
        marginTop:10,
        marginLeft: 90,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        //backgroundColor:darkBlue
    },
    contactContent:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
        //backgroundColor:darkBlue
    },



})