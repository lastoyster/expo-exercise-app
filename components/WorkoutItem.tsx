import {View,Text,StyleSheet,StyleProp} from "react-native";
import { Workout } from "../types/data";
import { formatSec } from "../utils/time";

export default function WorkoutItem({
    item,children,childStyleStyles={},

}:{
    item:Workout;
    children?:React.ReactNode;
    childStyleStyles?:StyleProp<ViewStyle>;
}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.title}>{item.duration}</Text>
            <Text style={styles.title}>{item.difficulty}</Text>
            <Text style={styles.title}>{formatSec(item.duration)}</Text>
            {children}
            </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        margin:5,
        borderWidth:1,
        borderRadius:10,
    },
    name:{
        fontSize:15,
        fontWeight:"bold",
        marginBottom:5,
    },
    duration:{
        fontSize:15,
    },
    difficulty:{
        fontSize:15,
    },
});