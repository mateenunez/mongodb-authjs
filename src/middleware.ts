export {default} from 'next-auth/middleware'

//middleware.ts se ejecuta antes que las paginas. En matcher estan las URLS a proteger.

export const config = {
    matcher: ['/verified']
}