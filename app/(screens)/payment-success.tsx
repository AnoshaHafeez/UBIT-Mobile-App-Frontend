import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import SuccessIcon from "../../components/fee-payment/SuccessIcon";
import SuccessDetailsCard from "../../components/fee-payment/SuccessDetailsCard";
import PrimaryButton from "../../components/fee-payment/PrimaryButton";
import Header from "@/components/fee-payment/Header";

export default function PaymentSuccessScreen() {

const router = useRouter();

return (

<SafeAreaView style={styles.container}>
    <Header title="Payment Status" />

<View style={styles.content}>

<SuccessIcon />

<Text style={styles.title}>Payment Successful</Text>

<SuccessDetailsCard
amount={20000}
method="Card"
date="12 March 2026"
transactionId="TXN394857"
/>

<PrimaryButton
title="View Payment History"
onPress={() => router.push("/payment-history")}
/>

<PrimaryButton
title="Back to Home"
onPress={() => router.push("/fee-main")}
/>

</View>

</SafeAreaView>

);
}

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:"#F3F3F3",
justifyContent:"center"
},

content:{
padding:20,
alignItems:"center"
},

title:{
fontSize:24,
fontWeight:"bold",
marginVertical:20,
color:"#2e7d32"
}

});