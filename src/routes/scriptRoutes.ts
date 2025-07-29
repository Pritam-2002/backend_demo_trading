import { Router } from 'express';
import { getBlockedScripts, getQtySettings, getScriptUpdates } from '../controllers/scriptController.ts';

const router = Router();

router.get('/getblockedscript', getBlockedScripts);
router.get('/getqtysettings', getQtySettings);
router.get('/getScriptupdate', getScriptUpdates);

export default router;
