CREATE TABLE "users" (
  "id" serial NOT NULL,
  PRIMARY KEY ("id"),
  "first_name" varying(255) NOT NULL,
  "last_name" varying(255) NOT NULL,
  "email" varying(255) NOT NULL,
  "gender" varying(255) NOT NULL,
  "ip_address" varying(255) NOT NULL
);
