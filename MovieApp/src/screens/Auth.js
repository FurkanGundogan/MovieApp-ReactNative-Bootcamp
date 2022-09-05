import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Auth = () => {
    const [user, setuser] = useState()
  return (
    <View>
        <Text>Auth</Text>
        {
            user ? <Text>Var</Text>:<Text>Yok</Text>
        }
      
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({})