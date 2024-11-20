import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { clearWorkouts,initWorkouts } from "../storage/workout";

export default function useCachedWorkouts() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    useEffect(()=>{
    async function loadResourcesAndDataAsync() {
        try{
    SplashScreen.preventAutoHideAndAsync();
    await initWorkouts();
    await Font.loadAsync({
        "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
        })
    }catch(e){
    console.warn(e);
    }finally{
    setLoadingComplete(true);
    SplashScreen.hideAsync();
    }
    }

    loadResourcesAndDataAsync();
},[]);

return isLoadingComplete;
}