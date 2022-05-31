import express from "express";
import cors from "cors";
import PersonajeRouter from "./src/controllers/personajeController.js";
import passport from "passport";
import { jwtStrategy } from "./src/common/jwt.strategy.js";
import tokenRouter  from "./src/controllers/authenticationController.js"
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/personaje", PersonajeRouter);
app.use("/auth", tokenRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
