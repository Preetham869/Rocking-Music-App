import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppHeader from '../AppHeader';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';

let customFonts = {
  OldEnglish: require('../assets/fonts/OldeEnglish.ttf'),
};

export default class HomeScreen extends Component {
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
          <AppHeader />
          <SafeAreaView style={styles.droidSafeArea} />
          
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/giphy.gif')}
                style={styles.iconImage}>
              </Image>
              <Image
                source={require('../assets/Welcome.gif')}
                style={{
                  width: RFValue(300),
                  height: RFValue(100),
                  marginBottom: 100,
                  marginLeft: 290,
                  marginTop: -690,
                }}>
                </Image>
              <Image
                source={require('../assets/Hamburger.jpg')}
                style={styles.hamburgers}></Image>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
          </View>
          <Text style={{
            fontFamily:"OldEnglish",
            fontSize:50,
            marginBottom:90,
            color:"red"}}>
            {`Drag ➡➡➡ for \n         songs`}
          </Text>
          <View style={{ flex: 0.08 }} />
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
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: RFValue(295),
    height: RFValue(245),
    marginBottom: 280,
    marginLeft: 290,
    marginTop: 100,
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'red',
    fontSize: RFValue(33),
    fontFamily: 'OldEnglish',
    marginLeft: -75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 0.85,
  },
  hamburgers: {
    width: RFValue(45),
    height: RFValue(45),
    marginTop: -280,
    marginLeft: -10,
    margin: 50,
  },
});
