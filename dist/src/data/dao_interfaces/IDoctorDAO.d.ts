import Doctor from "../../core/models/Doctor";
import IDAO from "./IDAO";
declare class IDoctorsDAO extends IDAO {
    constructor();
    show(id: number): Promise<Doctor>;
    update(data: Doctor): Promise<Doctor>;
}
export default IDoctorsDAO;
