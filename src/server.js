/* @flow */

import Koa from 'koa'

const app: Koa = new Koa()

class Server {

  run () {

    app.use(async ctx => {
      ctx.body = 'Hello World';
    });

    app.listen(8443, () => {
      console.log('Server is running...')
    })

  }

}

export default Server
