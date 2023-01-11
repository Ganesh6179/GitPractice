import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserScreen = ({route}) => {
  return (
    <View>
      <Text>Name:{route.params.name}</Text>
      <Text>Phone:{route.params.phone}</Text>
      <Text>Email:{route.params.email}</Text>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({})