import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image } from "react-native";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getPokemon } from "../lib/pokedex";
import { PokemonType } from "../components/PokemonType";

export default function Details() {
    const { id } = useLocalSearchParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        if (id) {
            getPokemon(id).then(setPokemon);
        }
    }, [id]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const weightConverter = (peso) => {
        return (peso/4.53592).toFixed(1);
    }
    const heightConverter = (altura) => {
        const dmPerFoot = 3.048;
        const feet = Math.floor(altura / dmPerFoot);
        const remainingdm = altura - (feet * dmPerFoot);
        const inches = Math.ceil((remainingdm / 2.54)*10);
        return (`${feet}' ${inches}"`)
    }
    
    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerTintColor: 'white',
                    headerTitle: "POKEMON",
                    headerLeft: () => {},
                    headerRight: () => {}
                }}
            />
            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={styles.container}>
                    {pokemon === null ? (
                        <ActivityIndicator color={'black'} size={'large'} />
                    ) :(
                        <View>
                            <View style={{alignItems: 'center', marginBottom: 10,}}>
                                <Text style={styles.name}>{capitalizeFirstLetter(pokemon.name)}</Text>
                                <Text style={styles.id}>#{pokemon.id}</Text>
                            </View>
                            <View style={styles.imageboard}>
                                <Image source={{uri: pokemon.sprites.other['official-artwork'].front_default}} style={styles.image}/>
                            </View>
                            <View style={styles.infobox}>
                                <Text style={styles.info}>Height</Text>
                                <Text style={styles.subtitle}>{heightConverter(pokemon.height)}</Text>
                                <Text style={styles.info}>Weight</Text>
                                <Text style={styles.subtitle}>{weightConverter(pokemon.weight)} lbs</Text>
                                <Text style={styles.info}>Abilities</Text>
                                <Text style={styles.subtitle}>{pokemon.abilities[0].ability.name}</Text>
                            </View>
                            <Text style={styles.subtitle}>Type</Text>
                            <View style={styles.type}>
                                <PokemonType pokemon={pokemon}/>
                            </View>
                        </View>
                    )}
                </View>
            </ScrollView>
        </Screen>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    name:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#212121'
    },
    id:{
        fontSize: 30,
        color: '#616161'
    },
    subtitle:{
        color: '#212121',
        fontSize: 25
    },
    imageboard: {
        backgroundColor: '#F2F2F2',
        width: 370,
        height:365, 
        borderRadius: 10,
        marginBottom: 25,
        alignItems: 'center'
    },
    image: {
        width: 350,
        height: 350,
        alignItems: 'center'
    },
    infobox: {
        backgroundColor: '#30a7d7',
        width: 370,
        height: 260, 
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    info:{
        fontSize: 20,
        color: 'white',
        paddingTop: 20,
        paddingBottom: 5 
    },
    type: {
        paddingVertical: 10
    },

  });