import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Constant from 'expo-constants'

//const username ;


export default class App extends Component{
    state={
        email:"",
        password:"",
    }
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
                        fontWeight: 'bold',
                    }}>Login</Text>
                </View>
                <View style={styles.textEmailPw}>
                    <Text style={{
                        color: darkBlue,
                        fontSize: 16,
                    }}>Username/email</Text>
                </View>
                <View style={styles.boxInput}>
                    <TextInput style ={styles.inputText} placeholder="contoh: wuri@gmail.com" 
                    placeholderTextColor='gray'
                    onChangeText={text => this.setState({email:text})}/>
                </View>
                <View style={styles.textEmailPw}>
                    <Text style={{
                        color: darkBlue,
                        fontSize: 16,
                    }}>Password</Text>
                </View>
                <View style={styles.boxInput}>
                    <TextInput 
                        secureTextEntry
                        style ={styles.inputText} placeholder="ketikan password anda" 
                        placeholderTextColor="gray"
                        onChangeText={text => this.setState({text})}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.boxLabel1}>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                        }}>Masuk</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:16, justifyContent: 'center', alignItems: 'center',}}>
                    <Text style={{
                        color: lightBlue, 
                        fontSize: 20,
                        }}>atau</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.boxLabel2}>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                        }}>Daftar?</Text>
                    </TouchableOpacity> 
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
        justifyContent: "center",
        alignItems:"flex-start",
        borderRadius: 10,
    },
    inputText:{
        height: 50,
        fontSize: 14,

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
        marginTop: 25,
        borderRadius: 14,
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
        borderRadius: 14,
    },
})

 