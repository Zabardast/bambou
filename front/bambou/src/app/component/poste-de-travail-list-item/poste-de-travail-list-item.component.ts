import { Component, Input, OnInit } from '@angular/core';
import { poste_de_travail_Model } from 'src/app/model/poste-de-travail.model';
import { PosteDeTravailsService } from 'src/app/service/poste-de-travails.service';

@Component({
  selector: 'app-poste-de-travail-list-item',
  templateUrl: './poste-de-travail-list-item.component.html',
  styleUrls: ['./poste-de-travail-list-item.component.css']
})
export class PosteDeTravailListItemComponent implements OnInit {

  @Input()
  poste_det_travail: poste_de_travail_Model = new poste_de_travail_Model();

  visible: boolean = false;
  v_details: boolean = false;


  constructor(public readonly poste_de_travail_service: PosteDeTravailsService) { }

  ngOnInit(): void {
    // this.poste_de_travail_service.read_poste_de_travails();
  }

  update_poste_de_travail(poste_de_travail :poste_de_travail_Model) {
    this.visible = false;
    this.poste_de_travail_service.update_poste_de_travails(poste_de_travail);
  }

  delete_poste_de_travail(id: number) {
    this.poste_de_travail_service.delete_poste_de_travails(id);
  }

  details(id :number) :void {
    this.v_details = this.v_details ? false : true;
  }

}
