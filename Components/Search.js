import React from 'react'

import { StyleSheet, View, Button, TextInput, Text, FlatList} from 'react-native'

import MagItem from './MagItem.js'
import {getFilmSearch} from '../API/api.js'

class Search extends React.Component{
//Constructeur.
  constructor(props){
    super(props)
    this._films = []

  }


//Méthodes.
    _loadFilms(){
        getFilmSearch("black").then(data =>{
          this._films = data.results
          this.forceUpdate()

        })
    }


  render(){
    return(
      <View style={ styles.mainContainer}>

        <Button title="Scanner" onPress={ ()=>this._loadFilms() } />
        <Button title="Retour a la liste" onPress={ ()=>this._loadFilms() } />
        <FlatList
          data={this._films}
          keyExtractor= {(item) => item.id.toString()}
          renderItem={({item}) => <MagItem mag={item}/>}
        />

      </View>

    );
  }

}

//Ajout et definition des éléments de style.
const styles = StyleSheet.create({
  textinput: {

    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
    color: 'black'
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 30


  }
});



export default Search
