import { Component } from '@angular/core';

@Component({
  selector: 'app-regist-student',
  templateUrl: './regist-student.component.html',
  styleUrls: ['./regist-student.component.css']
})


export class RegistStudentComponent {
  Name: string = '';
  Age: number = 0;
  error: string = '';
  Students: stu[] = [];
  add(): void {
    this.error='';
    if (this.Name.trim() === '') {
      this.error = "name empty ";
    }
    if (this.Age.toString() === '' || this.Age === 0) {
      this.error += "- age empty or equal zero ";
    }
    if (this.Name.length <= 3) {
      this.error += "- name length must be greater than 3 ";
    }
    if (this.Age <= 18) {
      this.error += "- age must be greater than 18 years ";
      
    }
    else {
      let s: stu = { N: this.Name, A: this.Age };
      this.Students.push(s);
    }
   
  }
}
interface stu {
  N: string;
  A: number;
}