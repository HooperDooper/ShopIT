import React from 'react'

import { StyleSheet, View, Text, Image, Button} from 'react-native'



class MagItem extends React.Component{
  render() {
    console.log(this.props)
    const mag = this.props.mag
   return (
     <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: ""}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>mag.nom</Text>
            <Button title="Retirer" onPress={ @expo._retirer(); } />
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>0.8 euros</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>En Stock !</Text>
          </View>
        </View>

      </View>

   )
 }

}

//Styles

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    marginTop: 50
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1,
    flexDirection: 'row'
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default MagItem
