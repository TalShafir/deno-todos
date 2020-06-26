import { Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router({prefix:'/users'})
router.get('/',async ({ response }: { response: any }) => { 
    response.body = 'hello users'}
    )

export default router