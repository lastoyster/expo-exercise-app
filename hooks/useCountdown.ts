import { useEffect,useRef,useState } from "react";

export function useCountDown(
    index:number,
    initialCount:number =-1
){
    const intervalRef = useRef<number>();
    const [countdown,setCountDown] = useState(initialCount);
    const [isRunning,setIsRunning] = useState(false)

    useEffect(()=>{
        if(index == -1) return;
    }

    if(isRunning && !intervalRef.current){  
        intervalRef.current = window.setInterval(() => { 
            setCountDown((count)=>{
    return count-1;
            }
    },1000)
}

return cleanup();
},[index,isRunning]);


useEffect(()=>{
    setCountDown((initialCount)
},[initialCount]) 

useEffect(()=>{
    if(countdown === 0){
        cleanUp();
    }
},[countDown]);

const cleanup = ()=>{
    if(intervalRef.current){
        setIsRunning(false);
        window.clearInterval(intervalRef.current);
    intervalRef.current = undefined;    
    }
}

return{
    countdown,
    isRunning,
    stop:cleanUp,
    start:(count?:number)=>{
        setCountDown(count ?? initialCount)
        setIsRunnig(true);
    }
};


