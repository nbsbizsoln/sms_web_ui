import { Parent } from "./parent";
import { SchoolClass } from "../school-class/school-class";

export class Student {

    constructor(
        public id:number,
        public name:string,
        public rollNumber:string,
        public age: number,
        public sex:string,
        public dob:Date,
        public address:string,
        public phoneNumber:string,
        public email:string,
        public active:boolean,
        public createdDate:Date,
        public parent1:Parent,
        public parent2:Parent,
        public schoolClass:SchoolClass
    ){}
}
