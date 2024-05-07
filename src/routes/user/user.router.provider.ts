import express from "express";
import UserController from "../../controllers/users/user.controller";

const userController = new UserController();

export default class UserRouterProvider {

  exec(app: express.Application) {

    const router = express.Router();

    router.get("/", async (req, res) => {
      try {
        console.log(req.query);
        const data = {
          'field' : req.query
        }
        const users = await userController.store(data);
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" + error });
      }
    });

    app.use('/api', router);
  }
}
