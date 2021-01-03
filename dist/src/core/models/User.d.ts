import Model from "./Model";
export default interface User extends Model {
    id?: number;
    name: string;
    birthday: string;
    email: string;
    password: string;
    is_admin?: boolean;
}
