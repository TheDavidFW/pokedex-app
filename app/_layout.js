import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Logo } from "../components/Logo";

export default function Layout(){
    return (
            <View style={styles.container}>
            <Stack screenOptions={{
                headerStyle: {backgroundColor: '#000' },
                headerTitle: "",
                headerLeft: () => <Logo />,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    nav:{
        marginBottom: 20
    }
  });