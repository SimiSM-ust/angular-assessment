import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public inputData =null;

  public parentText = null;
constructor(){}


ngOnInit(): void {

}
onClick(){

  this.parentText = this.inputData;
  this.inputData=null;
}
}

