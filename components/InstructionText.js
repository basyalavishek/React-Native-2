import { Text , StyleSheet } from 'react-native'
import Colors from '../constants/Colors'



const InstructionText = ({children}) => {
  return (
    <Text style={styles.textInstruction}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    textInstruction: {
        color: Colors.accent500,
        fontSize: 24,
        fontFamily:'open-sans'
      },
})