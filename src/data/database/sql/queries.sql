CREATE DATABASE saude_mais WITH ENCODING 'UTF8';

SET TIME ZONE 'UTC';

CREATE TABLE users (
  id serial primary key,
  name varchar(80) not null,
  email varchar(50) unique not null,
  password varchar(40) not null,
  birthday date not null,
  is_admin boolean not null default false
);

CREATE TABLE attendances (
  id serial primary key,
  title varchar(80) not null
);

CREATE TABLE doctors (
  id serial primary key,
  user_id serial not null,
  attendance_id serial not null,
  crm varchar(16) not null,
  constraint doctors_user_fk foreign key (user_id) references users(id),
  constraint doctors_attendance_fk foreign key (attendance_id) references attendances(id)
);

CREATE TABLE user_attendances (
  id serial primary key,
  user_id serial not null,
  attendance_id serial not null,
  doctor_id serial,
  date timestamp not null,
  status varchar(13) default value 'not-realized',
  constraint user_attendances_user_fk foreign key (user_id) references users(id),
  constraint user_attendances_attendance_fk foreign key (attendance_id) references attendances(id)  on delete cascade
);

CREATE TABLE services (
  id serial primary key,
  attendance_id serial not null,
  name varchar(50) not null,
  description text default '',
  price decimal not null,
  duration decimal not null,
  constraint services_attendance_fk foreign key (attendance_id) references attendances(id) on delete cascade
);

CREATE TABLE user_attendance_services (
  user_attendance_id serial not null,
  service_id serial not null,
  constraint user_attendance_services_user_attendance_fk
    foreign key (user_attendance_id)
    references user_attendances(id)
    on delete cascade,
  constraint user_attendance_services_service_fk
    foreign key (service_id)
    references services(id)
    on delete cascade
);

CREATE TABLE commissions (
  id serial primary key,
  doctor_id serial not null,
  client_attendance_id serial not null,
  value decimal not null,
  date timestamp default now,
  constraint commissions_doctor_fk
    foreign key(doctor_id)
    references doctors(id) on delete cascade,
  constraint commissions_client_attendance_fk
    foreign key(client_attendance_id)
    references user_attendances(id) on delete cascade
);
