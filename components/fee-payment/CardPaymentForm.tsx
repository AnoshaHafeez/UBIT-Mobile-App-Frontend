import { View, TextInput, StyleSheet, Text } from "react-native";

export default function CardPaymentForm(){

return(

<View style={styles.container}>

<Text style={styles.title}>Card Details</Text>

<TextInput
placeholder="Card Number"
style={styles.input}
/>

<TextInput
placeholder="Card Holder Name"
style={styles.input}
/>

<View style={styles.row}>

<TextInput
placeholder="Expiry Date"
style={[styles.input, styles.small]}
/>

<TextInput
placeholder="CVV"
style={[styles.input, styles.small]}
/>

</View>

</View>

);
}

const styles = StyleSheet.create({

container:{
margin:20
},

title:{
fontWeight:"bold",
marginBottom:10
},

input:{
backgroundColor:"#fff",
padding:14,
borderRadius:10,
marginBottom:10,

shadowColor:"#000",
shadowOpacity:0.05,
shadowRadius:6,
elevation:3
},

row:{
flexDirection:"row",
justifyContent:"space-between"
},

small:{
width:"48%"
}

});