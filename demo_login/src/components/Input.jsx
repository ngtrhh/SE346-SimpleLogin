import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const Input = props => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.labelText}>{props.label}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={text => props.onChangeText(text)}
          autoFocus={props.autoFocus}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  label: {
    marginBottom: 4,
  },
  labelText: {
    color: '#2E2F3B',
    fontWeight: 500,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#F7F9FC',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default Input;
