import Doctor from "../../core/models/Doctor";
import IDoctorDAO from "../dao_interfaces/IDoctorDAO";
declare class DoctorsDAO extends IDoctorDAO {
    show(id: number): Promise<Doctor>;
    update(data: Doctor): Promise<Doctor>;
}
export default DoctorsDAO;
