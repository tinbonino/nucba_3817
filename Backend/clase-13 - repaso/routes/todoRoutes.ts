import { Router } from "express";
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/todoControllers";

const router = Router();

router.get("/",getTasks);
router.post("/",createTask);
router.patch("/:id",updateTask);
router.delete("/:id",deleteTask);

export default router;