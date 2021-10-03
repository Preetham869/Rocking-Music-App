import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  OldEnglish: require('./assets/fonts/OldeEnglish.ttf'),
};

export default class AppHeader extends React.Component{
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
  
  render(){
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>🎧⚡Music App🤟🎧</Text>
        <FlatList
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
      </View>
     )
    }
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
    height:70,
  },
  text:{
    color: 'red',
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: "OldEnglish",
  }
});
