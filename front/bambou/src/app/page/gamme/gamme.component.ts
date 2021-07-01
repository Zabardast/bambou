import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { GammeModel } from 'src/app/model/gamme.model';
import { MachineModel } from 'src/app/model/machine.model';
import { OperationModel, Operation_detail_Model, OM_to_ODM } from 'src/app/model/operation.model';
import { poste_de_travail_Model } from 'src/app/model/poste-de-travail.model';
import { GammeService } from 'src/app/service/gamme.service';
import { MachineService } from 'src/app/service/machine.service';
import { OperationsService } from 'src/app/service/operations.service';
import { PosteDeTravailsService } from 'src/app/service/poste-de-travails.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-gamme',
  templateUrl: './gamme.component.html',
  styleUrls: ['./gamme.component.css']
})
export class GammeComponent implements OnInit {

  grp: string="atelier";


  disp_add_modal: boolean = false;
  disp_edit_modal: boolean = false;

  gamme: GammeModel = new GammeModel();

  operation: OperationModel = new OperationModel();
  operation_details: Operation_detail_Model = new Operation_detail_Model();

  //op
  edit: boolean = false;

  op_id: number = 0;

  //tmp
  time: number =0;
  date: Date = new Date();

  isVisible: boolean = false;

  formOperation!: FormGroup;
  formPGamme!: FormGroup;

  constructor(public readonly user_service: UserService,
              public readonly operation_service: OperationsService,
              public readonly gamme_service: GammeService,
              public readonly pdt_service: PosteDeTravailsService,
              public readonly machine_service: MachineService,
              private readonly fb: FormBuilder,
              private message: NzMessageService) { }

  ngOnInit(): void {
    this.user_service.getcurentUser();
    this.user_service.getUsers();
    this.gamme_service.readGammes();
    this.pdt_service.read_poste_de_travails();
    this.machine_service.readMachines();
    this.operation_service.readOperations();

    this.formOperation = this.fb.group({
      operationName: [null, Validators.required],
      operationDuration: [null],
      operationPdt: [null],
      operationMachine: [null]
    })

    this.formPGamme = this.fb.group({
      gammeName: [null, Validators.required],
      gammeResponsable: [null, Validators.required]
    })
    
  }

  changeop(op: Operation_detail_Model): void {
    console.log("changeOp = over powerred")
    this.edit = true;
    // this.operation = op;
    this.date.setMinutes(this.operation.production_time);
    
    this.formOperation.controls.operationName.setValue(op.name);
    this.formOperation.controls.operationDuration.setValue(this.date);
    //wtf!! pk j'ai besoin de faire ca? on a des donnee degrader ou c'est pas normal???
    this.operation.poste_de_travail = this.pdt_service.poste_de_travails[this.pdt_service.poste_de_travails.findIndex((elem)=>{ return elem.id == op.poste_de_travail})];
    this.operation.machine = this.machine_service.machines[this.machine_service.machines.findIndex((machine)=>{return machine.id == op.machine})]

    console.log("op val: ", op)
    console.log("operation edit:", this.operation)
  }

  removeop(id: number): void {
    console.log("removeop")
    let pos: number = 0;
    let tpos: number = 0;
    this.gamme.operations.forEach(res=>{
      if (res.id != id) {
        tpos++;
      }else{
        pos = tpos;
      }
    })
    // console.log("remove position :", pos);
    this.gamme.operations.splice(pos, 1);
  }

  quitedit(): void {
    this.edit = false;
    this.disp_add_modal = false;
    this.disp_edit_modal = false;
  }

  addGamme(): void {
    this.disp_add_modal = true;
  }

  ajouterGamme(): void {
    this.disp_add_modal = this.disp_add_modal ? false : true; 
  }

  savePrimaryGammeInfo(): void {
    this.gamme.name = this.formPGamme.controls.gammeName.value;
    this.gamme.responsable = this.formPGamme.controls.gammeResponsable.value;
    // console.log("gamme",this.formPGamme.controls.gammeResponsable.value)
    // console.log("gamme",this.gamme)
  }

  saveGamme(): void {
    if(this.gamme.name != '' && this.gamme.responsable.username != '' ) {
      // console.log("gamme",this.gamme)
      this.gamme_service.creatGamme(this.gamme);
      this.disp_add_modal = false;
    }else{
      // display error
      this.message.create('error', `il manque des paramettre`);
      console.log(this.gamme.name != '', this.gamme.responsable.username != '')
    }
  }

  addOperation(): void {
    // console.log("logman:", this.operation.poste_de_travail.name)
    for (const i in this.formOperation.controls) {
      this.formOperation.controls[i].markAsDirty();
      this.formOperation.controls[i].updateValueAndValidity();
    }
    
    //time format in minutes
    this.time = this.formOperation.controls.operationDuration.value.getMinutes();
    this.time += this.formOperation.controls.operationDuration.value.getHours()*60;

    this.operation = new OperationModel();

    this.operation.name = this.formOperation.controls.operationName.value;
    this.operation.production_time = this.time;
    this.operation.poste_de_travail = this.formOperation.controls.operationPdt.value;
    this.operation.machine = this.formOperation.controls.operationMachine.value;

    this.operation_service.creatOperation(this.operation);

    this.removeop(this.operation.id)


    // cant add operation to list if i dont have the id
    // this.gamme.operations.push();

    // console.log("operations:", this.gamme.operations)
  }

  editOperation(): void {

  }

  showOperationsSelector(): void {
    this.isVisible = true;
  }

  SOSCancel(): void {
    this.isVisible = false;
  }

  SelectRealOperation(id: number): void {
    this.operation_service.readOperation(id).then(()=>{
      this.gamme.operations.push(OM_to_ODM(this.operation_service.operation))
    })
  }

  updateGamme(gamme: GammeModel):void {
    // console.log("GammeUpdate:",gamme);
    this.disp_edit_modal = true;
    this.disp_add_modal = false;
    
    this.gamme = gamme;
    console.log("gamme", this.gamme)
    this.gamme.responsable = this.user_service.users[this.user_service.users.findIndex((elem) => {return elem.id === this.gamme.responsable.id})]
    // console.log("this.gamme", this.gamme)
  }

  saveNewInfo(): void {
    this.gamme_service.updateGamme(this.gamme);
    this.disp_edit_modal = false;
  }

}

