import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OperationModel, Operation_detail_Model } from 'src/app/model/operation.model';
import { OperationsService } from 'src/app/service/operations.service';

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
  
  visible_details: boolean = false;
  visible :boolean = true;

  operation_reel :OperationModel = new OperationModel()

  constructor(public readonly operation_service :OperationsService) { }

  ngOnInit(): void {
  }

  details(): void {
    this.operation_reel = this.operation_service.operations[this.operation_service.operations.findIndex((res)=>{return res.id === this.operation.id})];
    this.visible_details = (this.visible_details)? false : true;
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
