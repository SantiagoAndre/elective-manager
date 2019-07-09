export class Electiva {

    constructor(_id=null,name='', teacherId='', needLab=false) {
        this._id = _id;
        this.name = name;
        this.teacherId = teacherId;
        this.needLab = needLab;
    }

    _id: string;
    name: string;
    teacherId: string;
    needLab: boolean;
}
