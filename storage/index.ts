import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string) => {
    try{
        const stringValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, stringValue);
    } catch(e) {
        console.error(err.message);
    }
}

export const getData = async (key: string) => {
    try{
        const value = await AsyncStorage.getItem(key);
      if(value!=null){
        const data= JSON.parse(value);
        return data;
      }
    }catch(err:any){
        console.error(err.message);
    } 
}

export const containKey = async (key: string)=>{
    try{
        const keys = await AsyncStorage.getAllKeys();
        return keys.includes(key);
    }catch(err:any){
        console.error(err.message);
    }
}

export const removeItem= async(key: string)=>{
try{await AsyncStorage.removeItem(key);
}catch(err:any){
    console.error(err.message);