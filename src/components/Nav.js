import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HiOutlinePencilAlt } from 'react-icons/hi';

const Nav = () => {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <HiOutlinePencilAlt size={30} />
        </View>
      </View>
    );
  };
  

export default Nav

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        top: 15,
        right: 15,
    },


    icon: {
        color: '#c0bda5',
    },

})