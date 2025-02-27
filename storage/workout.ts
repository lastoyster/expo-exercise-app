import {WorkoutService} from "../types/workout.service";
import {getData,containKey,removeKey,storeData, removeItem} from "./index";
import data from "./data.json";

export const getWorkouts =async():Promise<Workout[]> =>{
    const workouts =await getData("workout-data");
    return workouts;
}
export const getWorkoutBySlug =async(slug:string):Promise<Workout>=>{
    const workouts = await getWorkouts();
    const workout = workouts.filter(w => w.slug === slug)[0];
    return workout;
}

export const initWorkouts =async():Promise<boolean> =>{
    const hasWorkouts =await containKey("workout-data");
    if(!hasWorkouts){
    await storeData("workout-data",data);
    return true; 
    }
    return false;
}

export const storeWorkout =async(newWorkout:Workout):Promise<boolean>=>{
    const workouts = await getWorkouts();
    await storeData("workout-data",[newWorkout,...workouts]);
    return true;
}

export const clearWorkouts =async()=>{
    await removeItem("workout-data");
}

