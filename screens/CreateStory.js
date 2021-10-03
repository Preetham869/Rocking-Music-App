import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';
import { Audio } from 'expo-av';
import DJButton from '../DJButton';
import AppHeader2 from '../AppHeader2';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  OldEnglish: require('../assets/fonts/OldeEnglish.ttf'),
};

export default class FamousSongs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: 'image_1',
      dropdownHeight: 40,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
           <AppHeader2 /> 
         <Image
          source={require('../assets/Music.jpg')}
          style={{
            width:200,
            height:160,
            marginLeft:100,
            marginTop:20}}>
        </Image>
           <ScrollView>
           
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FBeliever%20Mp3%20Imagine%20Dragons.mp3?v=1632237670914"
            text="Believer"
            bgcolor="purple"
          />
          </View>

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FImagine%20Dragons%20-%20Thunder.mp3?v=1632452583859"
            fontFamily= "OldEnglish"
            text="Imagine Dragons - Thunder"
            bgcolor="blue"
          />
        </View> 

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FBe%2BFree%2BPallivaalu%2BBhadravattakam%2Bft%2BVandana%2BIyer.mp3?v=1633237866495"
            text="Vidya Vox - Pallivaalu Bhadravattakam"
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
            bgcolor="blue"
          /> 
          </View>

         <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/ee26752b-bc86-4102-bf86-8f5fb10e73c2%2FBom%20Diggy%20Diggy%20%20(VIDEO)%20_%20Zack%20Knight%20_%20Jasmin%20Walia%20_%20Sonu%20Ke%20Titu%20Ki%20Sweety%20(320%20kbps).mp3?v=1632750821743"
            text="Bom Diggy Diggy"
            bgcolor="blue"
          /> 
          </View>
  
          <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/b8c764ff-affc-46fe-86ca-b52378052fee%2F%23BheemlaNayak%20Title%20Song%20Pawan%20Kalyan%20Rana%20Daggubati%20Saagar%20K%20Chandra%20Trivikram%20Thaman%20S.mp3?v=1632627506979"
            text="BheemlaNayak Title Song Pawan Kalyan"
            bgcolor="blue"
          />
        </View>

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
} }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
    fontFamily:"OldEnglish",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
   musicButtonContainer : {
    justifyContent:'center', 
    alignItems:'center',
    borderWidth:5,
    borderColor:"red",
    fontFamily:"OldEnglish",
    // width:200,
  },
  stopButton :{
    width: '60%',
    height: 70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius : 30,
    backgroundColor : 'red',
    borderWidth:10,
    borderColor : 'green',
    marginLeft:80,
  },
});
