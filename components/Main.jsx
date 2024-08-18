import { useEffect, useState } from "react";
import { StyleSheet, FlatList, ActivityIndicator, View } from "react-native";
import { getPokemons } from "../lib/pokedex";
import { PokemonCard } from "./PokemonCard";
import { StatusBar } from 'expo-status-bar';
import { Screen } from "./Screen";


export function Main() {
    const [pokemons, setPokemons] = useState([]);
    const renderItem = ({ item }) => <PokemonCard pokemon={item} />;

    useEffect(() => {
        getPokemons().then((pokemons) => {
            setPokemons(pokemons);
        });
    }, []);

    return (
        <Screen>
            <StatusBar style="light" />
            {pokemons.length === 0 ? (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator color={'white'} size={'large'} />
                </View>
            ) :(
                <View style={{alignItems: 'center',justifyContent: 'center'}}>
                    <FlatList
                    data={pokemons}
                    keyExtractor={pokemon => pokemon.id}
                    renderItem={renderItem}
                    numColumns={2}
                    contentContainerStyle={styles.container}
                />
                </View>
            )}
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center'
    },
    nav: {
        marginBottom: 10,
    }
  });