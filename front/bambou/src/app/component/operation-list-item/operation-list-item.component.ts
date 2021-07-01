import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OperationModel, Operation_detail_Model } from 'src/app/model/operation.model';

@Component({
  selector: 'app-operation-list-item',
  templateUrl: './operation-list-item.component.html',
  styleUrls: ['./operation-list-item.component.css']
})
export class OperationListItemComponent implements OnInit {

  @Input()
  operation :Operation_detail_Model = new Operation_detail_Model();
  @Output()
  operationRemove = new EventEmitter<Operation_detail_Model>();


  @Input()
  edit :boolean = false;

  @Output()
  editChange = new EventEmitter<Operation_detail_Model>();

  // @Input()
  // op_id :number = 0;

  // @Output()
  // op_idChange = new EventEmitter<number>();

  visible :boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  details(id: number): void {

  }

  deleteOperation(id: number) {
    this.operationRemove.emit();
  }

  editOperation(ope: Operation_detail_Model) {
    // console.log("id: ",id)
    // this.op_id = id;
    this.editChange.emit(this.operation);
    // this.op_idChange.emit(id);
  }
}
