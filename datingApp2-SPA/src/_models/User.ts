import { Photo } from './Photo';

export interface User {
    id:number;
    userName:string;
    knownAs:string;
    age:number;
    password:string;
    gender:string;
    created:Date;
    lastActive:Date;
    dateOfBirth:Date;
    url:string;
    city:string;
    country:string;
    interests:string;
    introduction:string;
    lookingFor:string;
    photos?:Photo[];
}
