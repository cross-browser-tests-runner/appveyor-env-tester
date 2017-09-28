'use strict'

let fs = require('fs'),
  path = require('path'),
  file = path.resolve(process.cwd(), 'out.txt')

setTimeout(() => { fs.appendFileSync(file, 'timed out!\n') }, 50000)

process.on('SIGINT', function() {
  fs.appendFileSync(file, 'received exit signal ' + sig + '\n')
  process.exit(0)
})

process.on('exit', (code) => {
  fs.appendFileSync(file, 'Exiting with code ' + code)
})

fs.appendFileSync(file, 'Started waiting...\n')
