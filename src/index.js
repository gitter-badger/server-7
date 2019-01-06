#!/usr/bin/env node

/* @flow */

import '@babel/polyfill'

import Commander from 'commander'

import pjson from '../package.json'
import Server from './server.js'

Commander
  .version(pjson.version)
  .action((cmd) => {

    const app: Server = new Server()

    app.run()

  })
  .parse(process.argv)
