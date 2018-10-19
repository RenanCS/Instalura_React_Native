
import React from 'react'
import {Platform, StyleSheet} from 'react-native';

const margem = Platform.OS =='ios' ? 20 : 0;

const styles = StyleSheet.create({
    container: {
      marginTop: margem
    }
  })

export default styles