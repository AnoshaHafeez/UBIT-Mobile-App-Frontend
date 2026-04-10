import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ConfirmPaymentButton({ onPress }: { onPress: () => void }) {

return(

<TouchableOpacity
style={styles.button}
onPress={onPress}
>

<Text style={styles.text}>
Confirm Payment
</Text>

</TouchableOpacity>

);
}

const styles = StyleSheet.create({

button:{
backgroundColor:"#B40000",
marginHorizontal:20,
marginBottom:40,
padding:18,
borderRadius:12,
alignItems:"center"
},

text:{
color:"#fff",
fontWeight:"bold",
fontSize:16
}

});