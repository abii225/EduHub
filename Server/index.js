const express = require("express");
const cors = require("cors");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const { connection } = require("./Database/DB");
const { UserModel } = require("./Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
require("dotenv").config();
/**import dependencies
 *
 *
 *
 *
 */
const app = express();

const schema = buildSchema(`
   type Query {
      hello:String
   }
   type User{
     
     firstname:String!
     lastname:String! 
     email:String! 
     password:String!
     phone:String! 
     country:String! 
   }
   type AuthPayload{
    token:String!
    user:User!
   }
   type Mutation{
     signup( firstname:String!,
     lastname:String! ,
     email:String! ,
     password:String!
     phone:String! ,
     country:String! ):AuthPayload  

    login(email:String!,password:String!):AuthPayload

   }




`);

const root = {
  hello: () => {
    return `hello world`;
  },
  signup: async ({ firstname, lastname, email, password, phone, country }) => {
    try {
      const hashPassword = await bcrypt.hash(password, 6);
      const user = new UserModel({
        firstname,
        lastname,
        email,
        password: hashPassword,
        phone,
        country,
      });
      await user.save();

      const token = jwt.sign({ userId: user._id }, `${process.env.KEY}`);
      return { user, token };
    } catch (err) {
      throw new Error(err.message);
    }
  },

  login: async ({ email, password }) => {
    try {
      //   step1: check user with email exists
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }
      // step-2 :check the user password ? success : login_failed

      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        throw new Error("Invalid Password");
      }

      //  step-3 if password is also correct generate a token and pass to client to store in
      const token = jwt.sign({ userId: user._id }, `${process.env.KEY}`);
      return { token, user };
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root,
  })
);
app.listen(8080, async () => {
  try {
    await connection;
    console.log("Database connected successfully");
    console.log("Server is running at  http://localhost:8080");
  } catch (err) {
    console.log(err);
  }
});
