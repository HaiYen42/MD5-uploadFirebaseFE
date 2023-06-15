import { Component } from '@angular/core';

@Component({
  selector: 'app-dad',
  templateUrl: './dad.component.html',
  styleUrls: ['./dad.component.css']
})
export class DadComponent {
listStudent = ['hà', 'chuân', 'yến'];
addStudent(student: string){
  this.listStudent.push(student);
  console.log('students --->', this.listStudent)
}
}
