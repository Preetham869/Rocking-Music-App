import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>🎧⚡Special Songs🤟🎧</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'blue',
    height: 70,
  },
  text: {
    color: 'red',
    padding: 20,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'OldEnglish',
  },
});
