import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

const FakeStore = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json();
                setProducts(data)
                console.log(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [])

    return (
        <>
            {
                loading ? (
                    <>
                        <Text style={{ fontSize: 36 }}>Loading, please wait...</Text>
                    </>
                ) : (
                    <>
                        <ScrollView>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                    padding: 10,
                                    gap: 30
                                }}
                            >
                                {
                                    products.map((product) => (
                                        <ProductCard key={product.id} details={product} />
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </>
                )
            }
        </>
    )

}

export default FakeStore;