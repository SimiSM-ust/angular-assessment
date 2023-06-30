import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inverted-child',
  templateUrl: './inverted-child.component.html',
  styleUrls: ['./inverted-child.component.css']
})
export class InvertedChildComponent {

  inputData!: string;

  @Output('child') childEvent= new EventEmitter<string>();

  onClick(){

  this.childEvent.emit(this.inputData);
  this.inputData='';
}


}
