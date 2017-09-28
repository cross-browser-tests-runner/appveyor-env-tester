'use strict'

setTimeout(() => { console.log('timed out!') }, 50000)

let signals = ['SIGINT', 'SIGTERM', 'SIGHUP']

signals.forEach(function(sig) {
  process.on(sig, function() {
    console.log('received exit signal %s', sig)
    process.exit(0)
  })
})
