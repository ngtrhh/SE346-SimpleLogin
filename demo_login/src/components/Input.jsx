import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const Input = props => {
  return (
    <View style={styles.row}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View>
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
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
  row: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  title: {marginBottom: 4},
  titleText: {
    color: '#2E2F3B',
    fontWeight: 500,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#F7F9FC',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#30357E',
    padding: 12,
    alignItems: 'center',
    width: '60%',
    marginVertical: 20,
    shadowColor: '#30357E',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 600,
    fontSize: 16,
  },
});

export default Input;
