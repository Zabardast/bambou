import { Component, Input, OnInit } from '@angular/core';
import { GammeModel } from 'src/app/model/gamme.model';
import { UserModel } from 'src/app/model/user.model';
import { GammeService } from 'src/app/service/gamme.service';
import { OperationsService } from 'src/app/service/operations.service';

@Component({
  selector: 'app-gamme-list-item',
  templateUrl: './gamme-list-item.component.html',
  styleUrls: ['./gamme-list-item.component.css']
})
export class GammeListItemComponent implements OnInit {

  @Input()
  gamme :GammeModel = new GammeModel();

  visible: boolean = false;
  visible_operation: boolean = false;

  constructor(public readonly service_gamme: GammeService,public readonly service_operation: OperationsService) { }

  ngOnInit(): void {
    this.service_operation.readOperations();
  }

  deleteGamme(id: number): void {
    this.service_gamme.deleteGamme(id);
  }

  updateGamme(p_gamme: GammeModel): void {
    this.service_gamme.updateGamme(p_gamme);
  }

  details(id: number): void {
    this.visible_operation = this.visible_operation ? false : true;
  }

}
