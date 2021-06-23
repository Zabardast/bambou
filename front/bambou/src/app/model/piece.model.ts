import { RealisationsModel } from "./realisation.model";

export class PieceModel {
    id = 0;
    name = '';
    realisation :RealisationsModel = new RealisationsModel();
}