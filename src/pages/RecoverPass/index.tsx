import React, { useRef, useCallback } from 'react'
import firebase from 'react-native-firebase'
import { Image, View, TextInput, Alert } from 'react-native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useNavigation } from '@react-navigation/native'
import { Container, Title, BackToSignIn, BackToSignInText } from './styles'
import logoImg from '../../assets/logo.png'
import Input from '../../components/Input'
import Button from '../../components/Button'

const RecoverPass: React.FC = () => {
  const recoverInputRef = useRef<TextInput>(null)

  const formRef = useRef<FormHandles>(null)

  const navigation = useNavigation()

  const handleRecoverPass = useCallback(
    async (data) => {
      try {
        await firebase.auth().sendPasswordResetEmail(data.email)
        Alert.alert(
          'Sucesso',
          'Um e-mail de verificação foi enviado para sua caixa de entrada',
        )
        navigation.navigate('SignIn')
      } catch {
        Alert.alert(
          'Falha',
          'Ocorreu um erro inesperado, tente novamente mais tarde',
        )
      }
    },
    [navigation],
  )

  return (
    <Container>
      <Image source={logoImg} />

      <View>
        <Title>Faça seu login</Title>
      </View>

      <Form ref={formRef} onSubmit={handleRecoverPass}>
        <Input
          ref={recoverInputRef}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="email"
          icon="mail"
          placeholder="E-mail"
          returnKeyType="send"
          onSubmitEditing={() => {
            formRef.current?.submitForm()
          }}
        />

        <Button
          onPress={() => {
            formRef.current?.submitForm()
          }}
        >
          Recuperar
        </Button>
      </Form>

      <BackToSignIn onPress={() => navigation.navigate('SignIn')}>
        <BackToSignInText>voltar para login</BackToSignInText>
      </BackToSignIn>
    </Container>
  )
}

export default RecoverPass
