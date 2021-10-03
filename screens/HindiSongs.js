import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, ScrollView,Image } from 'react-native';
import { Audio } from 'expo-av';
import DJButton from '../DJButton';

export default class HindiSongs extends React.Component {
  render() {
    return (
      <View>
       <ScrollView>
       <View style={styles.container}>
        <Image
          source={require('../assets/musicPics3.jpg')}
          style={{
            width:200,
            height:200,
            marginLeft:100,
            marginTop:20}}>
        </Image>
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FRanjha%20-%20Shershaah%20128%20Kbps.mp3?v=1632494736066"
            text="Ranjha - Shershaah"
            bgcolor="purple"
          />
          </View>

          <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FRaatan%20Lambiyan.mp3?v=1632494731695"
            text="Raatan Lambiyan"
            bgcolor="yellow"
          />
          </View>
          
          <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FBachpan%20Ka%20Pyaar%20(Official%20Video)%20Badshah%2C%20Sahdev%20Dirdo%2C%20Aastha%20Gill%2C%20Rico.mp3?v=1632494673200"
            text="Bachpan Ka Pyaar (Official Video)"
            bgcolor="green"
          />
          </View>
        
           <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FGenda%20Phool%20-%20Badshah%20128%20Kbps.mp3?v=1632494746026"
            text="Genda Phool - Badshah"
            bgcolor="red"
          /> 
          </View>

          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FArijit%20Singh%20Lambiyaan%20Si%20Judaiyaan%20With%20Raabta%20Sushant%20Rajput%2C%20Kriti%20Sanon%20T-Series.mp3?v=1632494675764"
            text="Arijit Singh-Lambiyaan Si Judaiyaan"
            bgcolor="crimson"
          /> 
          </View>

          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FDil%20Ko%20Karaar%20Aaya%20-%20Neha%20Kakkar.mp3?v=1632494682690"
            text="Dil Ko Karaar Aaya - Neha Kakkar"
            bgcolor="navy"
          /> 
          </View>

           <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FMann%20Bharryaa%202.0%20-%20Shershaah%20128%20Kbps.mp3?v=1632494695459"
            text="Mann Bharryaa 2.0 - Shershaah"
            bgcolor="violet"
          /> 
          </View>

          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FBom%20Diggy%20Diggy%20%20(VIDEO)%20_%20Zack%20Knight%20_%20Jasmin%20Walia%20_%20Sonu%20Ke%20Titu%20Ki%20Sweety%20(320%20kbps).mp3?v=1632750821743"
            text="Bom Diggy Diggy"
            bgcolor="fuchsia"
          /> 
          </View>

          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FParam%20Sundari%20-%20Mimi%20128%20Kbps.mp3?v=1632494776565"
            text="Param Sundari - Mimi"
            bgcolor="aqua"
          /> 
          </View>

          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FFull%20Video%20Slow%20Motion%20Bharat%20Salman%20Khan%2CDisha%20Patani%20Vishal%20%26Shekhar%20Feat.Nakash%20A%2CShreya%20G.mp3?v=1632750927195"
            text="Slow Motion"
            bgcolor="cyan"
          /> 
          </View>

          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FRaabta-Title-Song-Deepika-Padukone-Sushant-Singh-Rajput-Kriti-Sanon-Pritam-Jam-8_pezrS5OBBs4.mp3?v=1632751481517"
            text="Raabta"
            bgcolor="lime"
          /> 
          </View>

          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FMP3QUACK.BIZ%20-%20Filhaal2%20Mohabbat%20_%20Akshay%20Kumar%20Ft%20Nupur%20Sanon%20_%20Ammy%20Virk%20_%20BPraak%20_%20Jaani%20_%20Arvindr%20Khaira.mp3?v=1632752270719"
            text="Filhaal2 Mohabbat _ Akshay Kumar"
            bgcolor="lavender"
          /> 
          </View>

          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FFilhall%20-%20B%20Praak%20320%20Kbps.mp3?v=1632752940329"
            text="Filhall - B Praak"
            bgcolor="azure"
          /> 
          </View>
          
          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FAbhi%20Toh%20Party%20Shuru%20Hui%20Hai%20-%20Khoobsurat%20(2014)%20128%20Kbps.mp3?v=1632752784839"
            text="Abhi Toh Party Shuru Hui Hai"
            bgcolor="olive"
          /> 
          </View>

           <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FDj%20Waley%20Babu%20-%20Badshah.mp3?v=1632753041541"
            text="Dj Waley Babu - Badshah"
            bgcolor="teal"
          /> 
          </View>

          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FAgar%20Tum%20Saath%20Ho%20-%20Tamasha%20128%20Kbps.mp3?v=1632753183532"
            text="Agar Tum Saath Ho - Tamasha"
            bgcolor="orchid"
          /> 
          </View>
        <View style={styles.stopButtonContainer}>
          <TouchableOpacity
            style = {styles.stopButton} 
            onPress={()=>{
              Audio.setIsEnabledAsync(false);
            }}
            >
            <Text>STOP MUSIC</Text>
          </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
   stopButtonContainer : {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    marginTop:40
  },
   musicButtonContainer : {
    justifyContent:'center', 
    alignItems:'center',
    borderWidth:5,
    borderColor:"red",
    fontFamily:"OldEnglish"
    // width:200,
  },
  stopButton :{
    width: '80%',
    height: 70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius : 30,
    backgroundColor : 'red',
    borderWidth:10,
    borderColor : 'green',
  }
});

