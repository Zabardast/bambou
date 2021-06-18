export class RoleModel {
  id = 0;
  name = '';
  description = '';
  type = 'authenticated' || 'public'; // will add the diff types once it starts working
}

export class UserModel {
    id = 0;
    username = '';
    email = '';
    img = '';
    role!: RoleModel;
  }