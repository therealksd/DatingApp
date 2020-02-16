import { Photo } from './Photo';

export interface User {
    id:number;
    username:string;
    knownAs:string;
    age:number;
    gender:string;
    created:Date;
    lastActive:Date;
    url:string;
    city:string;
    country:string;
    interests:string;
    introduction:string;
    lookingFor:string;
    photos?:Photo[];
}
