import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../../Themes/Colors';
import { IMAGES } from '../../Themes/Constants';

const Radio = ({ data, onSelect, selectedValue }) => {
  const [checked, setChecked] = useState(selectedValue);
  return (
    <View>
      <View style={styles.container}>
        {data.map((item, key) => {
          return (
            <View style={styles.btn} key={item}>
              {checked != key ? (
                <>
                  <TouchableOpacity
                    style={[styles.btn, styles.checked]}
                    onPress={() => {
                      { setChecked(key); onSelect(item) }
                    }}
                  >
                    <Image
                      style={styles.img}
                      source={IMAGES.radio}
                    />
                    <Text style={styles.itemText}>{item}</Text>
                  </TouchableOpacity>

                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      { setChecked(key); onSelect(item) }
                    }}
                    style={styles.btn}>
                    <Image
                      style={styles.img}
                      source={IMAGES.selected_radio}
                    />
                    <Text style={styles.itemText}>{item}</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  itemText: {
    color: Colors.SIGN_IN_TEXT,
  },
  btn: {
    flexDirection: 'row',
    marginBottom: 5
  },
});

export default Radio;