import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TitleInput = () => {
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.space}
      placeholder='Ex: Groceries'
      // value=''
      // onChange={}
      // onBlur={}
      // onKeyPress={}
      ></TextInput>
    </View>
  )
}

export default TitleInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginHorizontal: 2,
        paddingHorizontal: 2,
        fontSize: 43,
        fontStyle: 'bold',
        marginTop: 200,
        marginBottom: 50,
    },

    space: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: 'black',
        color: '#c0bda5',
        height: '15%',
    }
})