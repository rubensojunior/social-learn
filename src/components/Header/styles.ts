import styled from 'styled-components/native'

import { Platform } from 'react-native'

export const Container = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 20 : 0}px;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #eee;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background: #fafafa;
`

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ImageLogo = styled.Image`
  height: 30px;
  width: 30px;
`

export const Title = styled.Text`
  color: #000;
  font-family: 'Poppins-Bold';
  height: 30px;
  font-size: 22px;
  margin-left: 5px;
`

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
`

export const Username = styled.Text`
  font-size: 10px;
  font-family: 'Poppins-Regular';
  color: #bbb;
`

export const UserImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 10px;
`
