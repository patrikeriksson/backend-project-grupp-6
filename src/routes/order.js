import { Router } from "express";
import {
  createOrder,
  viewCart,
  deleteOrder,
} from "../services/orderService.js";

const router = Router();

// "POST"/order Funktion för att skapa en ny order
router.post("/", createOrder);
// "GET"/order Få fram kundvagnen med totalpris på ordern
router.get("/", viewCart);
// "DELETE"/order ta bort en order
router.delete("/:id", deleteOrder);

export default router;