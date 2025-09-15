import express from 'express';

import { register_User, login_User } from '../controllers/authControllers.js';

const router = express.Router()

router.post("/register",register_User)
router.post("/login",login_User)

export default router;