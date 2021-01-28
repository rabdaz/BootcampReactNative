import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, Image } from 'react-native';
import Constant from 'expo-constants'


export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
                
                <View style={{marginTop: 45, justifyContent: 'center'}}>
                    <Image 
                    source={require('./assets/logo.png')}
                    style={{ width: 375, height: 102 }}
                    />
                </View>
                <View style={{marginTop:70, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                        color: darkBlue,
                        fontSize: 24,
                    }}>Login</Text>
                </View>
                <View style={styles.textEmailPw}>
                    <Text style={{
                        color: darkBlue,
                        fontSize: 16,
                    }}>Username/email</Text>
                </View>
                <View style={styles.boxInput}/>
                <View style={styles.textEmailPw}>
                    <Text style={{
                        color: darkBlue,
                        fontSize: 16,
                    }}>Password</Text>
                </View>
                <View style={styles.boxInput}/>
                <View style={styles.boxLabel1}>
                    <Text style={{
                        color: 'white',
                        fontSize: 24,
                        }}>Masuk</Text>
                </View>
                <View style={{marginTop:16, justifyContent: 'center', alignItems: 'center',}}>
                    <Text style={{
                        color: lightBlue, 
                        fontSize: 24,
                        }}>atau</Text>
                </View>
                <View style={styles.boxLabel2}>
                    <Text style={{
                        color: 'white',
                        fontSize: 24,
                    }}>Daftar?</Text>
                </View>
            </View>
        )
    }
}
const darkBlue= '#003366';
const lightBlue= "#3EC6FF";
const grayBackground= "#EFEFEF";

const styles=StyleSheet.create({
    container: {
        flex: 1,
        marginTop:Constant.statusBarHeight,
    },

    boxInput: {
        width: 294,
        height: 30,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: darkBlue,
        marginLeft: 41,
        marginTop: 4,
        justifyContent: "flex-start"
    //     borderRadius: 20,
    },
    textEmailPw:{
        marginLeft:41, 
        marginTop: 16, 
        justifyContent: "flex-start" 
    },
    boxLabel1:{
        width: 140,
        height: 40,
        backgroundColor: lightBlue,
        borderWidth: 1,
        //borderColor: darkBlue,
        justifyContent: "center",
        alignItems:"center",
        marginLeft: 118,
        marginTop: 16,
        borderRadius: 16,
    },
    boxLabel2:{
        width: 140,
        height: 40,
        backgroundColor: darkBlue,
        borderWidth: 1,
        //borderColor: darkBlue,
        justifyContent: "center",
        alignItems:"center",
        marginLeft: 118,
        marginTop: 16,
        borderRadius: 16,
    },
})

 