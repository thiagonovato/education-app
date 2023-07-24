import { StyleSheet } from 'react-native'
import color from '../../shared/colors'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.blue,
    padding: 10,
    margin: 30,
    borderRadius: 10
  },
  icon: {
    paddingHorizontal: 10,
    color: color.white,
  },
  text: {
    textAlign: 'center',
    color: color.white,
    fontSize: 16
  }
})

export default styles