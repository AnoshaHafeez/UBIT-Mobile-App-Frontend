import { View, Text, StyleSheet } from "react-native";

export default function SuccessIcon(){

return(

<View style={styles.circle}>
<Text style={styles.check}>✓</Text>
</View>

);
}

const styles = StyleSheet.create({

circle:{
width:100,
height:100,
borderRadius:50,
backgroundColor:"#2e7d32",
justifyContent:"center",
alignItems:"center"
},

check:{
fontSize:50,
color:"#fff",
fontWeight:"bold"
}

});