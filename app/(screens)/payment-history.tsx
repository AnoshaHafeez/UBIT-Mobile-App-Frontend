import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import PaymentHistoryItem from "../../components/fee-payment/PaymentHistoryItem";
import Header from "@/components/fee-payment/Header";

export default function PaymentHistoryScreen(){

const payments = [
{
semester:"Semester 5",
amount:20000,
method:"Card",
date:"12 March 2026"
},
{
semester:"Semester 4",
amount:55000,
method:"Easypaisa",
date:"10 Aug 2025"
}
];

return(

<SafeAreaView style={styles.container}>

<ScrollView>
    <Header title="Payment History" />

{payments.map((payment,index)=>(
<PaymentHistoryItem
key={index}
semester={payment.semester}
amount={payment.amount}
method={payment.method}
date={payment.date}
/>
))}

</ScrollView>

</SafeAreaView>

);
}

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:"#F3F3F3"
}
});