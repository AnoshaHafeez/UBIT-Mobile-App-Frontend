import { Image, Text, View } from "react-native";

const ProductCard = ({ details }, onPress) => {
    return (
        <>
            <View style={{ width: '46%' }}>
                <View style={{ backgroundColor: 'lightgray', borderRadius: 10, padding: 20 }}>
                    <Image source={{ uri: details.image }}
                        style={{ width: '100%', height: 200 }}
                    />

                </View>
                <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular' }}>{details.title.slice(0, 50) + "..."}</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 10,
                    }}
                >
                    <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: '#c99504' }}>Rs. {details.price}</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Add to Cart</Text>
                </View>
            </View >
        </>
    )
}

export default ProductCard;