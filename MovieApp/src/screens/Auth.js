import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Auth = () => {
    const [user, setuser] = useState()
    const getUser = () => {
        axios.get('http://localhost:3000/user')
            .then(response => {
                setuser(response.data)
            })
            .catch(error => {
                console.log(error);
                alert(error)
            });
    }
    useEffect(() => {
        getUser()
    }, [])
    
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