import { ScrollView, Text} from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

export default function About(){
    return (
        <Screen>
        <ScrollView>
            <Text style={{color: 'white'}}> About </Text>
            <Text style={{color: 'white'}}> lorem ipsum dolor sit amet,</Text>
            <Text style={{color: 'white'}}> lorem ipsum dolor sit amet,</Text>
            <Text style={{color: 'white'}}> lorem ipsum dolor sit amet,</Text>
            <Text style={{color: 'white'}}> lorem ipsum dolor sit amet,</Text>
            <Text style={{color: 'white'}}> lorem ipsum dolor sit amet,</Text>
        </ScrollView>
        </Screen>
    )
}