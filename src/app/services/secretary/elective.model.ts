export class Elective {
  constructor(_id=null,idElective='',name='', teacherId='', needLab=false) {
      this._id = _id;
      this.idElective = idElective;
      this.name = name;
      this.teacherId = teacherId;
      this.needLab = needLab;
  }

  _id: string;
  name: string;
  teacherId: string;
  needLab: boolean;
  idElective:string;
}
