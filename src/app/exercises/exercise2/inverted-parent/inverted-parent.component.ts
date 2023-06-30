import { Component } from '@angular/core';

@Component({
  selector: 'app-inverted-parent',
  templateUrl: './inverted-parent.component.html',
  styleUrls: ['./inverted-parent.component.css']
})
export class InvertedParentComponent {
  fromChild!: string;
  getEvent(data: string){
this.fromChild= data;
  }

}
