import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {appColors, shadow} from '../../utils/appColors';
import {scale} from 'react-native-size-matters';
import Label from '../Label';
export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  InputStyle,
  IconRight,
  IconLeft,
  label,
}) {
  const [focused, setFocused] = useState(false);
  const onFocus = () => {
    setFocused(!focused);
  };
  return (
    <View style={[styles.container, focused ? styles.activeBorder : styles.blurBorder]}>
      {label && (
        <View style={{paddingVertical: scale(10)}}>
          <Label style={{color: appColors.darkGray}} text={label} />
        </View>
      )}
      {/* IconLeft && <IconLeft /> */}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input, InputStyle]}
        onBlur={onFocus}
        onFocus={onFocus}
      />
      {IconRight && <IconRight />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    //paddingHorizontal: scale(10),
    //margin: scale(5),
    //height: scale(45),
    // alignItems: "center",
    backgroundColor: appColors.white,
    borderBottomWidth: scale(0.4),
    // borderRadius:scale(25),
    // ...shadow
  },
  input: {
    paddingVertical: scale(10),
    flex: 1,
    fontSize: scale(14),
  },
  blurBorder:{
      borderColor:appColors.darkGray
  },
  activeBorder:{
    borderColor:appColors.primary,
    borderBottomWidth: scale(1),

  }
});
