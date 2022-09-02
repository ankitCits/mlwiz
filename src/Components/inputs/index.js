import React, { useState } from 'react';
import { Text, TextInput,StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import Colors from '../../Themes/Colors';
import { IMAGES } from '../../Themes/Constants';

const Input = ({
  placeholder,
  value,
  isSecure,
  isOpen,
  onClickEye,
  onChangeText,
  ...rest
}) => {
  const [textValue, setTextValue] = useState(value);
  return (
    <>
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.textInput}
            value={textValue}
            placeholder={placeholder}
            onChangeText={text => { onChangeText(text); setTextValue(text); }} 
            {...rest}
            />
        </View>
        {isSecure && (
        <TouchableOpacity
        style={styles.eyeContainer}
        onPress={onClickEye}
        >
          <Image 
            style={styles.eye}
            source={isOpen ? IMAGES.eye_open : IMAGES.eye_close} />
        </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
  },
  textInput:{
    color:Colors.GREY3,
    padding:0,
    margin:0,
    color:Colors.GREY,
  },
  eyeContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    marginHorizontal:5,
  },
  eye:{
    marginTop:5,
    alignSelf:'center',
    width:13,
    height:13,
  }
});