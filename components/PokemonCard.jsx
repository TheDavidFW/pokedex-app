import { View, StyleSheet, Text, Image, Pressable} from "react-native";
import { PokemonType } from "./PokemonType";
import { Link } from "expo-router";

export function PokemonCard({pokemon}){

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <View key={pokemon.id} style={styles.box}>
            <View style={styles.imageboard}>
            <Link href= {`/${pokemon.id}`} asChild>
                <Pressable>
                    <Image source={{uri: pokemon.sprites.other['official-artwork'].front_default}} style={styles.image}/>
                 </Pressable>
            </Link>
            </View>
            <Text style={styles.name}> {capitalizeFirstLetter(pokemon.name)} </Text>
            <PokemonType pokemon={pokemon}/>
        </View>
        
    )
}


const styles = StyleSheet.create({
    box:{
        backgroundColor: 'white',
        width:195,
        height:250, 
        borderRadius: 10,
        margin: 5
    },
    imageboard: {
        backgroundColor: '#F2F2F2',
        width:195,
        height:180, 
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
    },
    image: {
        width: 180,
        height: 170,
        alignItems: 'center'
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 5
    },

  });