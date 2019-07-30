export class Elective {
  constructor(idElective='',name='', teacherId='', needLab=false) {

      this.idElective = idElective;
      this.name = name;
      this.teacherId = teacherId;
      this.needLab = needLab;
  }

  name: string;
  teacherId: string;
  needLab: boolean;
  idElective:string;
}
