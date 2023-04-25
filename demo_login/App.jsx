import React, {useState} from 'react';
import {View, StyleSheet, Text, StatusBar, Alert} from 'react-native';
import Input from './src/components/Input';
import Button from './src/components/Button';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(username, password);
    if (username == '' || password == '')
      Alert.alert('Failed', 'Please fill full field to login', [
        {
          text: 'OK',
        },
      ]);
    else if (username != 'user' || password != '123456')
      Alert.alert('Failed', 'Incorrect username or password.', [
        {
          text: 'OK',
        },
      ]);
    else if (username == 'user' && password == '123456')
      Alert.alert('Success', ' ', [
        {
          text: 'OK',
        },
      ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ACA8B1"></StatusBar>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.body}>
        <Input
          label="Username"
          placeholder="Username"
          autoFocus={true}
          onChangeText={value => setUsername(value)}
        />
        <Input
          label="Password"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <Button text="LOGIN" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    margin: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 700,
    color: '#30357E',
  },
  body: {},
});

export default App;
