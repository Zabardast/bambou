import { Operation_detail_Model } from "./operation.model";
import { PieceModel } from "./piece.model";
import { UserModel } from "./user.model";

export class GammeModel {
    id = 0;
    name = '';
    operations: Operation_detail_Model[] = [];
    piece: PieceModel = new PieceModel();
    responsable: UserModel = new UserModel();
}