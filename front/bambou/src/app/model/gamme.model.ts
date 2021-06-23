import { OperationModel } from "./operation.model";
import { PieceModel } from "./piece.model";

export class GammeModel {
    id = 0;
    name = '';
    operations: OperationModel[] = [];
    piece: PieceModel = new PieceModel();
}