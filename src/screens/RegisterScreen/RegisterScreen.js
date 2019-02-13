import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, TouchableOpacity, AsyncStorage, TextInput,
} from 'react-native';
import axios from 'axios';

import HeaderButton from '../../components/HeaderButton/HeaderButton';

import styles from './styles';

class RegisterScreen extends Component {
  static navigationOptions = {
    title: 'Inloggen',
  };

  state = {
    name: null,
    surename: null,
    email: null,
  }

  // _signInAsync = async () => {
  //   const { navigation: { navigate } } = this.props;
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   navigate('App');
  // };

  inputHandler = (text, type) => {
    this.setState({ [type]: text });
  }

  handleSubmit = () => {
    // const { name, surename, email } = this.state;

    // axios.post('https://veluweb.nl/2018/extranet/api/auth.php', {
    //   name,
    //   email,
    //   password: '12345',

    // })
    //   .then((response) => {
    //     console.log('response', response);

    //     // Handle the JWT response here
    //   })
    //   .catch((error) => {
    //     console.log('error', error);
    //     // Handle returned errors here
    //   });

    const { navigation: { navigate } } = this.props;
    navigate('TabNav');
  }

  render() {
    const { name, surename, email } = this.state;
    return (
      <View style={styles.componentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Om gebruik te maken van deze NiCW App vragen we je enkel je voornaam, achternaam en e-mail op te geven.
          </Text>
        </View>
        <Text style={styles.mainContainerTitle}>
          Inloggen
        </Text>
        <View style={styles.inputComponent}>
          <Text style={styles.inputTitle}>
            Voornaam
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.inputHandler(text, 'name')}
            value={name}
          />
        </View>
        <View style={styles.inputComponent}>
          <Text style={styles.inputTitle}>
            Achternaam
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.inputHandler(text, 'surename')}
            value={surename}
          />
        </View>
        <View style={styles.inputComponent}>
          <Text style={styles.inputTitle}>
            E-mail
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.inputHandler(text, 'email')}
            value={email}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox}>
            <Text style={styles.checkboxChecked}>+</Text>
          </TouchableOpacity>
          <Text style={styles.checkboxTitle}>ja, ik ga akkoord met de </Text>
          <Text style={[styles.checkboxTitle, { color: 'red' }]}>privacyverklaring </Text>
        </View>

        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={this.handleSubmit}
        >
          <View style={styles.button}>
            {/* {Icon && (
              <Icon
                style={styles.itemIcon}
                name={name}
                size={10}
                color="#900"
              />
            )} */}
            <Text style={styles.text}>versturen</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default RegisterScreen;
