import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import mailerController from '@controllers/customer/mailer';

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    senaMailByMailer: '/senaMailByMailer',
} as const;

/////////////////////// Send mail ///////////////////////
router.post(p.senaMailByMailer, async (req: any, res: Response) => {
    const data = await mailerController.senaMailByMailer(req.body);
    return res.status(OK).send({ data, code: OK, message:'success',result:data});
});

// Export default
export default router;