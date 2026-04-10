import { View, Text, StyleSheet } from "react-native";

export default function SuccessDetailsCard({
amount,
method,
date,
transactionId
}:{
amount:number
method:string
date:string
transactionId:string
}){

return(

<View style={styles.card}>

<Text style={styles.row}>Amount Paid: PKR {amount}</Text>

<Text style={styles.row}>Payment Method: {method}</Text>

<Text style={styles.row}>Date: {date}</Text>

<Text style={styles.row}>Transaction ID: {transactionId}</Text>

</View>

);
}

const styles = StyleSheet.create({

card:{
backgroundColor:"#fff",
width:"100%",
padding:20,
borderRadius:16,
marginBottom:20,

shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:10,
elevation:5
},

row:{
marginBottom:6,
color:"#444"
}

});