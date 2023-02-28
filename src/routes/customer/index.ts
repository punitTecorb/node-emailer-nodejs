import { Router } from 'express';
const baseRouter = Router();
import mailer from './mailer';
console.log("enter1")

// Setup routers
baseRouter.use('/mailer', mailer);
// Export default.
export default baseRouter;