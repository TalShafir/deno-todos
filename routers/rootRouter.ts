import { Router } from 'https://deno.land/x/oak/mod.ts'
import { hello_root } from '../controllers/basic.ts'

const router = new Router()
router.get('/', hello_root)

export default router
