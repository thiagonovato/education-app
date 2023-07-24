import { StyleSheet } from 'react-native'
import color from '../../shared/colors'
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -20,
    backgroundColor: color.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: 'center',
    marginHorizontal: 30
  },
  login: {
    fontWeight: 'bold',
    marginTop: 40,
    fontSize: 20,
    textAlign: 'center',
  }
})

export default styles