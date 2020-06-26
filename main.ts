import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import rootRouter from './routers/rootRouter.ts'
import usersRouter  from './routers/usersRouter.ts'

const HOST = '127.0.0.1'
const PORT = 7700

const app = new Application()

// TODO: replace with one routers export and a loop

app.use(rootRouter.routes())
app.use(rootRouter.allowedMethods())

app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)