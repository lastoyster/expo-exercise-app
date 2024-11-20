import { LinkingOptions } from "react-native";
import * as Linking from "expo-linking";

import {RootStackParamList} from "../types/";

const linking :LinkingOptions <RootStackParamList>={
    prefixes: [Linking.makeUrl("/")],
    config:{
screens:{
    TabOne:{
        screens:[
            TabOneScreen:"One",
    },
},
TabTwo:{
    screens:{
        TabTwoScreen:"Two",
    },
    },
},
},
Modal:'modal',
NotFound:'*',

export default Linking;