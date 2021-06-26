import { poste_de_travail_Model } from "./poste-de-travail.model";

export class RoleModel {
  id = 0;
  name = '';
  description = '';
  type = 'authenticated' || 'public'; // will add the diff types once it starts working
}

export class UserModel {
    id = 0;
    username = '';
    password = '';
    email = '';
    image = '';
    checked: boolean = false;
    role!: RoleModel;
    poste_de_travails :poste_de_travail_Model[] = [];
  }