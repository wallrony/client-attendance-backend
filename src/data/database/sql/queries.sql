CREATE DATABASE saude_mais WITH ENCODING 'UTF8';

SET TIME ZONE 'UTC';

CREATE TABLE users (
  id serial primary key,
  name varchar(80) not null,
  email varchar(50) not null,
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
  constraint user_fk foreign key (user_id) references users(id),
  constraint attendance_fk foreign key (attendance_id) references attendances(id)
);

CREATE TABLE user_attendances (
  id serial primary key,
  user_id serial not null,
  attendance_id serial not null,
  date timestamp with time zone not null,
  constraint user_fk foreign key (user_id) references users(id),
  constraint attendance_fk foreign key (attendance_id) references attendances(id)
);

CREATE TABLE services (
  id serial primary key,
  attendance_id serial not null,
  name varchar(50) not null,
  description text default '',
  price decimal not null,
  duration decimal not null,
  constraint attendance_fk foreign key (attendance_id) references attendances(id)
);

CREATE TABLE user_attendance_services (
  user_attendance_id serial not null,
  service_id serial not null,
  constraint user_attendance_fk
    foreign key (user_attendance_id)
    references user_attendances(id),
  constraint service_fk
    foreign key (service_id)
    references services(id)
);

CREATE TABLE commissions (
  id serial primary key,
  doctor_id serial not null,
  client_attendance_id serial not null,
  value decimal not null,
  constraint doctor_fk
    foreign key(doctor_id)
    references doctors(id),
  constraint client_attendance_fk
    foreign key(client_attendance_id)
    references user_attendances(id)
);
