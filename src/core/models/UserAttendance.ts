import Model from "./Model";

export default interface UserAttendance extends Model {
  id?: number;
  attendance_id: number;
  user_id: number;
  date: string;
  services?: number[];
}
