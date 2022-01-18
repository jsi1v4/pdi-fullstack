CREATE TABLE "users" (
  "id" serial NOT NULL,
  PRIMARY KEY ("id"),
  "first_name" varchar(255) NOT NULL,
  "last_name" varchar(255) NOT NULL,
  "email" varchar(255) NOT NULL,
  "gender" varchar(255) NOT NULL,
  "ip_address" varchar(255) NOT NULL,
  "active" bit NOT NULL DEFAULT '1'
);
