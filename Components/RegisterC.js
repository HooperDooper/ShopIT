import React from 'react'

import { StyleSheet, View, Button, TextInput} from 'react-native'


class RegisterC extends React.Component{
  render(){
    return(
      <View style={ styles.mainContainer}>
        <TextInput style={styles.textinput} placeholder="Login"/>
        <TextInput style={styles.textinput} placeholder="Email"/>
        <TextInput style={styles.textinput} placeholder="Mot de Passe"/>
        <TextInput style={styles.textinput} placeholder="Confirmer Mot de Passe"/>

        <Button style={styles.btn} title="S'inscrire" onPress={ ()=>{} } />


      </View>

    );
  }


}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
    color: 'white'

  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 30

  },
  btn: {
    marginTop: 50
  }
});

export default RegisterC
