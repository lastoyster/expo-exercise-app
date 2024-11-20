export type Difficulty ='easy'| 'normal'|'hard'
export type Sequence ='exercise'|'stretch'| 'break'

export interface Workout {
    slug: string;   
    name:string;
    duration:number;
    difficulty:string;
    sequence:string;
}

export interface SequenceItem {
    slug:string;
    name:string;    
    type:SequenceItem,
    duration:number;
    reps?:number;
}

