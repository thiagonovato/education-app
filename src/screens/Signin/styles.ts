import { Dimensions, StyleSheet } from 'react-native'
import color from '../../shared/colors'


const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: Dimensions.get('window').width
  },
  containerSecondary: {
    paddingTop: 50,
    marginTop: -25,
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