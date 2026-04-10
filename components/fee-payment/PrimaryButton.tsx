import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function PrimaryButton({title,onPress}:{title:string,onPress:()=>void}){

return(

<TouchableOpacity
style={styles.button}
onPress={onPress}
>

<Text style={styles.text}>{title}</Text>

</TouchableOpacity>

);
}

const styles = StyleSheet.create({

button:{
backgroundColor:"#B40000",
padding:16,
borderRadius:12,
width:"100%",
alignItems:"center",
marginBottom:10
},

text:{
color:"#fff",
fontWeight:"bold",
fontSize:16
}

});