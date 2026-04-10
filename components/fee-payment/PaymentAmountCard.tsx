import { View, Text, StyleSheet } from "react-native";

export default function PaymentAmountCard({ amount }: { amount:number }) {

return (

<View style={styles.card}>

<Text style={styles.label}>Amount to Pay</Text>

<Text style={styles.amount}>
PKR {amount}
</Text>

</View>

);
}

const styles = StyleSheet.create({

card:{
backgroundColor:"#fff",
margin:20,
padding:25,
borderRadius:16,
alignItems:"center",

shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:10,
elevation:5
},

label:{
color:"#777",
marginBottom:6
},

amount:{
fontSize:28,
fontWeight:"bold",
color:"#B40000"
}

});