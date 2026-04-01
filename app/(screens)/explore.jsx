import ProductCard from "@/components/ProductCard";
import Shimmer from "@/components/SkeletonLoader";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

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
            {!loading ?
                <>
                    <ScrollView style={styles.container} scrollEnabled={false}>
                        {/* 1. SEARCH BAR PLACEHOLDER */}
                        <View style={styles.headerSection}>
                            <Shimmer width={40} height={50} style={{ borderRadius: 25 }} />
                        </View>

                        {/* 2. CATEGORIES ROW */}
                        <View style={styles.categoryRow}>
                            {[1, 2, 3, 4].map((i) => (
                                <View key={i} style={{ alignItems: 'center', marginRight: 15 }}>
                                    <Shimmer width={60} height={60} style={{ borderRadius: 30 }} />
                                    <Shimmer width={50} height={10} style={{ marginTop: 8, borderRadius: 4 }} />
                                </View>
                            ))}
                        </View>

                        {/* 3. SECTION TITLE */}
                        <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
                            <Shimmer width={150} height={25} style={{ borderRadius: 4 }} />
                        </View>

                        
                    </ScrollView>
                </> :
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

            }
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerSection: {
        padding: 20,
        marginTop: 10,
    },
    categoryRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
});

export default FakeStore;