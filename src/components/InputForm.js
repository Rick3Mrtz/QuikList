import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react';

const InputForm = () => {

    const [newItem, setNewItem] = useState('');

    useEffect(() => {
    }, [newItem]);

    function handleSubmit(e) {
        e.preventDefault();
    
        // Trim the newItem to remove leading/trailing whitespace before checking if it's empty
        const trimmedNewItem = newItem.trim();
    
        if (trimmedNewItem !== '') {
          const newItemObj = {
            id: Math.random().toString(36).slice(2, 9),
            title: trimmedNewItem,
            completed: false,
          };
          setTodos((currentTodos) => [...currentTodos, newItemObj]);
        }
    
        setNewItem('');
      }

      const { width: screenWidth } = Dimensions.get('window');
      const vw = screenWidth * 0.01; // 1% of the screen width


  return (
    <View style={styles.form}>
      <TextInput style={styles.input} 
      id='item'
      placeholder='Need Anything?' 
      value={newItem} onChange={(e) => setNewItem(e.target.value)}>
      </TextInput>
    </View>
  )
}

export default InputForm;

const styles = StyleSheet.create({
    form: {
        flex: 1,
        flexDirection: 'row'
    },
    input: {
      height: 40,
      width: '100%',
      backgroundColor: 'white'
    }
})