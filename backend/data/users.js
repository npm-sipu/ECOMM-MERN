import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "sipu bhatta",
    email: "sipu@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "sujit bhatta",
    email: "sujit@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
