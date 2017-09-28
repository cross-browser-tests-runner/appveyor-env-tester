'use strict'

let fs = require('fs'),
  path = require('path'),
  file = path.resolve(process.cwd(), 'out.txt')

setTimeout(() => { fs.writeFileSync(file, 'timed out!\n') }, 50000)

let signals = ['SIGINT', 'SIGTERM', 'SIGHUP']

signals.forEach(function(sig) {
  process.on(sig, function() {
    fs.writeFileSync(file, 'received exit signal ' + sig + '\n')
    process.exit(0)
  })
})

fs.writeFileSync(file, 'Started waiting...\n')
