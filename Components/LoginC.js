import React from 'react'

import { StyleSheet, View, Button, TextInput} from 'react-native'


class LoginC extends React.Component{
  render(){
    return(
      <View style={ styles.mainContainer}>
        <TextInput style={styles.textinput} placeholder="Login"/>
        <TextInput style={styles.textinput} placeholder="Mot de Passe"/>
        <Button style={styles.btn} title="Connecter" onPress={ ()=>{} } />
        <Button style={styles.btn} title="S'inscrire" onPress={ ()=>{} } />


      </View>

    );
  }


}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
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
    marginTop: 20
  }
});

export default LoginC
