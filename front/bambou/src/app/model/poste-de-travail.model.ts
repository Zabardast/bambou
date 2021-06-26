import { MachineModel } from "./machine.model";
import { UserModel } from "./user.model";

export class poste_de_travail_Model {
    id = 0;
    name = '';
    machines :MachineModel[] = [];
    users :UserModel[] = [];
    checked = false;
}