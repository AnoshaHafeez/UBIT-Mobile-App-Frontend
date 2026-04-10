import { View, Text, StyleSheet } from "react-native";

export default function PaymentHistoryItem({
semester,
amount,
method,
date
}:{
semester:string
amount:number
method:string
date:string
}){

return(

<View style={styles.card}>

<Text style={styles.semester}>{semester}</Text>

<Text>Amount: PKR {amount}</Text>

<Text>Method: {method}</Text>

<Text>Date: {date}</Text>

</View>

);
}

const styles = StyleSheet.create({

card:{
backgroundColor:"#fff",
margin:20,
padding:18,
borderRadius:16,

shadowColor:"#000",
shadowOpacity:0.08,
shadowRadius:10,
elevation:4
},

semester:{
fontWeight:"bold",
marginBottom:5
}

});