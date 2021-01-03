import Service from "../../core/models/Service";
import IServicesDAO from "../dao_interfaces/IServicesDAO";
declare class ServicesDAO extends IServicesDAO {
    index(attendanceID: number): Promise<Service[]>;
    add(data: Service): Promise<Service>;
    update(data: Service): Promise<Service>;
    delete(id: number): Promise<boolean>;
}
export default ServicesDAO;
