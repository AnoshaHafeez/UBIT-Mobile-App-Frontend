import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function PaymentMethodSelector(){

const [selected,setSelected] = useState("Card");

const methods = ["Card","Easypaisa","JazzCash"];

return(

<View style={styles.container}>

<Text style={styles.title}>Select Payment Method</Text>

<View style={styles.row}>

{methods.map((method)=>{

const active = selected === method;

return(

<TouchableOpacity
key={method}
onPress={()=>setSelected(method)}
style={[styles.card, active && styles.active]}
>

<Text style={[styles.text, active && styles.activeText]}>
{method}
</Text>

</TouchableOpacity>

);

})}

</View>

</View>

);
}

const styles = StyleSheet.create({

container:{
marginHorizontal:20
},

title:{
fontWeight:"bold",
marginBottom:12
},

row:{
flexDirection:"row",
justifyContent:"space-between"
},

card:{
backgroundColor:"#fff",
padding:15,
borderRadius:12,
width:"30%",
alignItems:"center",

shadowColor:"#000",
shadowOpacity:0.08,
shadowRadius:8,
elevation:4
},

active:{
backgroundColor:"#B40000"
},

text:{
fontWeight:"600"
},

activeText:{
color:"#fff"
}

});