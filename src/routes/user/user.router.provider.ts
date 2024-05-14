
import UserController from "../../controllers/users/user.controller";
import express, { Request, Response, Application } from 'express';
const userController = new UserController();


export default class UserRouterProvider {
  exec(app: express.Application) {

    const router = express.Router();
    interface CustomRequest extends Express.Request {
      params: {
        [key: string]: string;
      };
    }


    app.get("/api/*", async (req: CustomRequest, res) => {
      const pathSegments = req.params[0].split('/');
      let jsonObject: { [key: string]: string } = {};
      pathSegments.forEach((segment, index) => {
        jsonObject[`${index + 1}`] = segment;
      });;

      const users = await userController.store(jsonObject);
      console.log(users, pathSegments, jsonObject)
      res.status(200).json(users);
    });
    

    app.get("/", async (req, res) => {
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

    router.get("/list", async (req, res) => {
      try {
        const users = await userController.list();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" + error });
      }
    });

    // app.use('/api', router);
  }
}
