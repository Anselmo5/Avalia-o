import * as React from 'react';
import FlatList from '../Flatlist/Emalta';
import { Text, View, StyleSheet, Image, TextInput,Card, Linking,Button, Pressable, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Alta from './ProfileALte1.JS';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {

  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} 
from '@react-navigation/drawer';

export default function AssetExample({navigation}) {

  const alerta = () => {
    alert("funcionou")
  }
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>      
      <Image style={styles.logo} source={require('../assets/d.jpg')} />
       <TextInput style={styles.input}
       placeholder="Pesquisar Apps e Jogos"
      />

      <View style={styles.textform}> 
        <Pressable  style={styles.text2}  onPress={() => navigation.navigate('EmAlta')}>
          <Text style={styles.text1} >Em Alta</Text>
        </Pressable>
        <Pressable style={styles.text3}  onPress={() => navigation.navigate('Crianças')}>
          <Text style={styles.text1} >Crianca</Text>
        </Pressable>
        <Pressable style={styles.text4}  onPress={() => navigation.navigate('Eventos')}>
          <Text style={styles.text1} >Eventos</Text>
        </Pressable>
      </View>
      <FlatList/>

</View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:'#272727',
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius:200,
    bottom:0,
    marginLeft:240,
  },
  input:{
    bottom:40,
    marginRight:80,
    width:240,
    height:40,
    backgroundColor:'#474747',
    padding:10,
    borderRadius:5,
    color:'#fff',
    fontSize:15,
  },

  textform:{
    bottom:35,
    width:350,
    borderRadius:8,
    displat:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    marginRight:110,

  },
  text1:{
    color:'#fff',
    margin:10,
  },
});