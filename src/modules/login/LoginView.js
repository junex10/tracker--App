import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import { saveData, retrieveData } from './../../redux/actions';
import { user } from './../../redux/actions';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { TextInput, Button } from './../../components';
import { AuthService } from './../../services';

function LoginScreen(props) {
    
  const [form, setForm] = useState({
    email: null,
    password: null
  });

  const handleLogin = async () => {
    
    if (!isValidForm()) return false;

    const auth = await AuthService.login(form);

    if (!auth?.error) {
      props.saveData(auth?.data)
      console.log(props, ' PROPS ')
    }
  }

  const isValidForm = () => {
    if (!form.email)
        return false;

    if (!form.password)
        return false

    return true;
  }

  const change = (field, value) => {
    setForm({
        ...form,
        [field]: value
    })
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.section}>
          <Text size={20} white>
            Logins
          </Text>
        </View>
        <View style={[
            styles.section, 
            styles.sectionLarge
        ]}>

            <View style={styles.input}>
                <TextInput 
                    placeholder='Email' 
                    value={form.email} 
                    onChangeText={(value) => change('email', value)} 
                />
            </View>
            <View style={styles.input}>
                <TextInput 
                    placeholder='Password'
                    value={form.password} 
                    onChangeText={(value) => change('password', value)}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    large
                    secondary
                    rounded
                    style={styles.button}
                    caption="Log in"
                    onPress={() => handleLogin()}
                />
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    top: 40
  },
  input: {
    width: '100%',
    marginTop: 40
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
    width: '100%'
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    bottom: 80
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
const mapStateToProps = (state) => ({
  savedData: state.data.savedData,
});

export default connect(mapStateToProps, { saveData, retrieveData })(LoginScreen);