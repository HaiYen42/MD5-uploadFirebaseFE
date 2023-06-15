import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent {
listStudent = ['hà', 'chính']
  @Output() sendData = new EventEmitter;
  addStudent(value: string) {
    this.listStudent.push(value);
    this.sendData.emit(this.listStudent);
  }
}
