import express from "express";
import DidDocumentController from "../controllers/did-document.controller";

const router = express.Router();

router.get("/:did", async (req, res, next) => {
  const controller = new DidDocumentController();
  return controller
    .resolve(req.params.did)
    .then((doc) => {
      res.status(200);
      res.send(doc);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  const controller = new DidDocumentController();
  return controller
    .register(req.body)
    .then((doc) => {
      res.status(201);
      res.send(doc);
    })
    .catch(next);
});

router.delete("/:did", async (req, res, next) => {
  const controller = new DidDocumentController();
  return controller
    .revoke(req.params.did)
    .then(() => {
      res.status(204);
      res.send();
    })
    .catch(next);
});

export default router;
