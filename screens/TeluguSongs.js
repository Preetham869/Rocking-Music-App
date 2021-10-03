import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Audio } from 'expo-av';
import DJButton from '../DJButton';

export default class TeluguSongs extends React.Component {
  render() {
    return (
       <View style={styles.container}>
        <ScrollView>
         <Image
          source={require('../assets/musicPics2.png')}
          style={{
            width:200,
            height:200,
            marginLeft:100,
            marginTop:20}}>
        </Image>
        
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://cdn.glitch.com/b8c764ff-affc-46fe-86ca-b52378052fee%2F%23AlaVaikunthapurramuloo%20-%20ButtaBomma%20Allu%20Arjun%20Trivikram%20Thaman%20S%20%23AA19.mp3?v=1632627085761"
            text="AlaVaikunthapurramuloo - ButtaBomma"
            bgcolor="purple"
          />
          </View>

          <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://cdn.glitch.com/b8c764ff-affc-46fe-86ca-b52378052fee%2F%23AlaVaikunthapurramuloo%20-%20Ramuloo%20Ramulaa%20Full%20Video%20Song%20Allu%20Arjun%20Trivikram%20Thaman%20S.mp3?v=1632627289194"
            text="AlaVaikunthapurramuloo - Ramuloo Ramulaa"
            bgcolor="yellow"
          />
          </View>

          <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://cdn.glitch.com/b8c764ff-affc-46fe-86ca-b52378052fee%2FMaari%202%20-%20Rowdy%20Baby%20(Video%20Song)%20Dhanush%2C%20Sai%20Pallavi%20Yuvan%20Shankar%20Raja%20Balaji%20Mohan.mp3?v=1632627360767"
            text="Maari 2 - Rowdy Baby"
            bgcolor="green"
          />
          </View>
          
          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/b8c764ff-affc-46fe-86ca-b52378052fee%2F%23BheemlaNayak%20Title%20Song%20Pawan%20Kalyan%20Rana%20Daggubati%20Saagar%20K%20Chandra%20Trivikram%20Thaman%20S.mp3?v=1632627506979"
            text="BheemlaNayak Title Song Pawan Kalyan"
            bgcolor="red"
          />
        </View>

         <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/b8c764ff-affc-46fe-86ca-b52378052fee%2F%23Leharaayi%20Song%20MostEligibleBachelor%20Songs%20Akhil%20Akkineni%2CPooja%20Hegde%20Gopi%20Sundar%20Sid%20Sriram.mp3?v=1632627739082"
            text="Leharaayi Song"
            bgcolor="aqua"
          />
        </View>

         <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/b8c764ff-affc-46fe-86ca-b52378052fee%2FMP3QUACK.BIZ%20-%20%23SarangaDariya_%20_%20Love%20story%20Songs%20_%20Naga%20Chaitanya%20_%20Sai%20Pallavi%20_%20Sekhar%20Kammula%20_%20Pawan%20Ch.mp3?v=1632751190898"
            text="SarangaDariya"
            bgcolor="lime"
          />
        </View>

         <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/b8c764ff-affc-46fe-86ca-b52378052fee%2FBullettu%20bandi%20song%20%23fullhdvideo%20%23Saisreeya_weds_Ashok%20%23Sismarriage%F0%9F%A5%B3%20%23bharatdance%20%23trending%20%23tv5news.mp3?v=1633246076572"
            text="Bullettu bandi"
            bgcolor="magenta"
          />
        </View>

         <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/b8c764ff-affc-46fe-86ca-b52378052fee%2Fyt1s.com%20-%20Pushpa%20%20The%20Rise%20Telugu%20%20Daakko%20Daakko%20Meka%20%20Allu%20Arjun%20Rashmika%20%20DSP%20%20Sivam%20%20Sukumar.mp3?v=1633246080649"
            text="Pushpa - Daakko Daakko Meka"
            bgcolor="turquoise"
          />
        </View>

         <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/b8c764ff-affc-46fe-86ca-b52378052fee%2FDigu%20Digu%20Digu%20Naaga.mp3?v=1633246080172"
            text="Digu Digu Digu Naaga"
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
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#15193c',
    fontFamily:"OldEnglish",
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

