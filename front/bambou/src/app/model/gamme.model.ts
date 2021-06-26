import { OperationModel } from "./operation.model";
import { PieceModel } from "./piece.model";
import { UserModel } from "./user.model";

export class GammeModel {
    id = 0;
    name = '';
    operations: OperationModel[] = [];
    piece: PieceModel = new PieceModel();
    responsable: UserModel = new UserModel();
}