import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import Colors from '../../Themes/Colors';
import { IMAGES } from '../../Themes/Constants';

const Input = ({
  placeholder,
  value,
  isSecure,
  isOpen,
  onClickEye,
  onChangeText,
  labelText,
  type,
  ...rest
}) => {
  const [textValue, setTextValue] = useState(value);
  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{labelText}</Text>
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.textInput}
              value={textValue}
              keyboardType={type}
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
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  inputContainer: {
    padding: 4,
    paddingHorizontal: 12,
    marginBottom: 10,
    marginHorizontal: 5,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 5
  },
  textInput: {
    color: Colors.GREY3,
    padding: 0,
    color: Colors.GREY,
  },
  eyeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  eye: {
    // marginTop: 5,
    alignSelf: 'center',
    width: 13,
    height: 13,
  },
  label: {
    color: Colors.DARK_GREY,
  },
});