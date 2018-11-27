import { Teacher } from "../teacher/teacher";

export class SchoolClass {
    constructor(
    public id: number,
    public name: string,
    public classTeacher: Teacher,
    public subjectList:any[],
    public studentsList:any []){}
}
