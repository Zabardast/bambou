import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/service/operations.service';

@Component({
  selector: 'app-add-gamme-list-item',
  templateUrl: './add-gamme-list-item.component.html',
  styleUrls: ['./add-gamme-list-item.component.css']
})
export class AddGammeListItemComponent implements OnInit {

  name: string = "";

  constructor(public readonly service_operation: OperationsService) { }

  ngOnInit(): void {
    this.service_operation.readOperations();
  }

  save(): void {

  }

}
