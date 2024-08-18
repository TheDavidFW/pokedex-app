import { View, Text, StyleSheet } from 'react-native';

export function PokemonType({ pokemon }) {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const getTypeStyle = (type) => {
        switch (type) {
            case 'grass':
                return { backgroundColor: '#9bcc50', color: '#212121' };
            case 'poison':
                return { backgroundColor: '#b97fc9', color: '#fff' };
            case 'fire':
                return { backgroundColor: '#fd7d24', color: '#fff' };
            case 'flying':
                return { backgroundColor: '#3dc7ef', color: '#212121' };
            case 'water':
                return { backgroundColor: '#4592c4', color: '#fff' };
            case 'bug':
                return { backgroundColor: '#729f3f', color: '#fff' };
            case 'normal':
                return { backgroundColor: '#a4acaf', color: '#212121' };
            case 'electric':
                return { backgroundColor: '#eed535', color: '#212121' };
            case 'ground':
                return { backgroundColor: '#ab9842', color: '#212121' };
            case 'fairy':
                return { backgroundColor: '#fdb9e9', color: '#212121' };
            case 'dark':
                return { backgroundColor: '#707070', color: '#fff' };
            case 'fighting':
                return { backgroundColor: '#d56723', color: '#fff' };
            case 'ice':
                return { backgroundColor: '#51c4e7', color: '#212121' };
            case 'rock':
                return { backgroundColor: '#a38c21', color: '#fff' };
            case 'steel':
                return { backgroundColor: '#9eb7b8', color: '#212121' };
            case 'psychic':
                return { backgroundColor: '#f366b9', color: '#fff' };
            case 'ghost':
                return { backgroundColor: '#7b62a3', color: '#fff' };
            case 'dragon':
                return { backgroundColor: '#f16e57', color: '#fff' };
            default:
                return { backgroundColor: '#fff', color: '#212121' }; // Default style
        }
    };

    const type1Style = getTypeStyle(pokemon.types[0].type.name);
    const type2Style = pokemon.types[1] ? getTypeStyle(pokemon.types[1].type.name) : null;

    return (
        <View style={styles.types}>
            <View style={[styles.typeContainer, { backgroundColor: type1Style.backgroundColor }]}>
                <Text style={{ color: type1Style.color }}> {capitalizeFirstLetter(pokemon.types[0].type.name)} </Text>
            </View>
            {type2Style && (
                <View style={[styles.typeContainer, { backgroundColor: type2Style.backgroundColor }]}>
                    <Text style={{ color: type2Style.color }}> {capitalizeFirstLetter(pokemon.types[1].type.name)} </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    typeContainer: {
        width: 60,
        height: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2
    },
    types: {
        paddingHorizontal: 5,
        flex: 1,
        flexDirection: 'row'
    }
});
