import { School } from "../school/ischool";
import { ClassSubject } from "../subject/subjectclass";

export class Teacher {
    constructor(
    public id:number,
    public name:string,
    public age:number,
    public sex:string,
    public contactNumber:string,
    public address:string,
    public email:string,
    public dob:Date,
    public school:School
    ){}
}
