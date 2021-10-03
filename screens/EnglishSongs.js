import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Audio } from 'expo-av';
import DJButton from '../DJButton';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  OldEnglish: require('../assets/fonts/OldeEnglish.ttf'),
};

export default class EnglishSongs extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  keyExtractor = (item, index) => index.toString();

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/musicPics1.jfif')}
          style={{
            width:200,
            height:200,
            marginLeft:100,
            marginTop:20}}>
        </Image>

        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FBeliever%20Mp3%20Imagine%20Dragons.mp3?v=1632237670914"
            style={styles.musicButton}
            text="Believer"
            bgcolor="purple"
          />
          </View>

          <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FImagine%20Dragons%20-%20Thunder.mp3?v=1632452583859"
            text= ' Imagine Dragons - Thunder'
            bgcolor="yellow"
          />
          </View>

          <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FDharia%20-%20(Uh%20Nai%20Na)%20Sugar%20And%20Brownies.mp3?v=1632626926905"
            text=" Dharia - (Uh Nai Na) Sugar And Brownies"
            bgcolor="green"
          />
         </View>
            <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FThe%2BChainsmokers%2BDon%2Bt%2BLet%2BMe%2BDown%2BOfficial%2BVideo%2Bft%2BDaya.mp3?v=1632626855408"
            text="The Chainsmokers-Dont Let Me Down"
            bgcolor="blue"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FShake%20It%20Off%20(With)%20-%20Taylor%20Swift.mp3?v=1632452531491"
            text="Shake It Off (With)"
            bgcolor="crimson"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FAdele%20-%20Hello%20PARODY.mp3?v=1632626168675"
            text="Adele - Hello"
            bgcolor="aqua"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FCadmium%20-%20Not%20Your%20Baby%20(feat.%20Jex).mp3?v=1632626204291"
            text="Cadmium - Not Your Baby"
            bgcolor="pink"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FCounting%20Stars%20X%20Mining%20Ores.mp3?v=1632626211045"
            text="Counting Stars X Mining Ores"
            bgcolor="orange"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FI%20Prevail%20-%20Blank%20Space%20(Taylor%20Swift%20Cover)%20-%20Punk%20Goes%20Pop%20Vol.%206.mp3?v=1632626227201"
            text="I Prevail - Blank Space (Taylor Swift Cover)"
            bgcolor="gold"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FJustin%20Bieber%20-%20Sorry.mp3?v=1632626236673"
            text="Justin Bieber - Sorry"
            bgcolor="violet"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FShawn%20Mendes%2C%20Camila%20Cabello%20-%20Se%C3%B1orita.mp3?v=1632626269929"
            text="Shawn Mendes, Camila Cabello - Señorita"
            bgcolor="lime"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FSee%20You%20Again%20Mp3%20By%20Charlie%20Puth%20and%20Wiz%20Khalifa.mp3?v=1632626272051"
            text="See You Again Mp3 By Charlie Puth and Wiz Khalifa"
            bgcolor="orchid"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FKaty%20Perry%20-%20Dark%20Horse%20ft.%20Juicy%20J.mp3?v=1632626272753"
            text="Katy Perry - Dark Horse ft. Juicy J"
            bgcolor="teal"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FAlan%20Walker%20-%20Faded.mp3?v=1632626272908"
            text="Alan Walker - Faded"
            bgcolor="navy"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FRoar%20-%20Katy%20Perry.mp3?v=1632626273676"
            text="Roar - Katy Perry"
            bgcolor="cyan"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FMajor%20Lazer%20%26%20DJ%20Snake%20-%20Lean%20On%20(feat.%20M%C3%98)%20(Official).mp3?v=1632626276441"
            text="Major Lazer & DJ Snake - Lean On"
            bgcolor="lavender"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FMaroon%205%20-%20Sugar%20PARODY.mp3?v=1632626279694"
            text="Maroon 5 - Sugar PARODY"
            bgcolor="azure"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FMark%20Ronson%20-%20Uptown%20Funk%20(Official%20Video)%20ft.%20Bruno%20Mars.mp3?v=1632626367400"
            text="Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars"
            bgcolor="olive"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FMeghan%20Trainor%20_%20All%20about%20that%20bass.mp3?v=1632626400058"
            text="Meghan Trainor _ All about that bass"
            bgcolor="magenta"
          />
        </View>  

        <View style={styles.musicButtonContainer}>
            <DJButton
            uri="https://cdn.glitch.com/292f71f5-a910-4207-bb19-350d09bd6c93%2FBe%2BFree%2BPallivaalu%2BBhadravattakam%2Bft%2BVandana%2BIyer.mp3?v=1633237866495"
            text="Vidya Vox - Pallivaalu Bhadravattakam"
            bgcolor="indigo"
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
  },
  musicButton :{
    width:200,
    height: 1000,
    justifyContent:'center',
    alignItems:'center',
    borderRadius : 30,
    backgroundColor : 'red',
    borderWidth:10,    
  },
});

