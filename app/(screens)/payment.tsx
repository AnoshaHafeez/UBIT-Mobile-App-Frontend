import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import PaymentAmountCard from "../../components/fee-payment/PaymentAmountCard";
import PaymentMethodSelector from "../../components/fee-payment/PaymentMethodSelector";
import CardPaymentForm from "../../components/fee-payment/CardPaymentForm";
import ConfirmPaymentButton from "../../components/fee-payment/ConfirmPaymentButton";
import Header from "@/components/fee-payment/Header";


export default function PaymentScreen(){
const router = useRouter();
return(

<SafeAreaView style={styles.container}>
<Header title="Make Payment" />

<ScrollView>

<PaymentAmountCard amount={20000} />

<PaymentMethodSelector />

<CardPaymentForm />

<ConfirmPaymentButton
onPress={() => router.push("/payment-success")}
/>

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