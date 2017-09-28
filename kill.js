'use strict'

let ps = require('ps-node')

function f() {
ps.lookup({
  command: 'node',
  arguments: 'wait.js'
}, (err, list) => {
  if(err) {
    throw err
  }
  console.log('got %d procs', list.length)
  list.forEach(proc => {
    console.log('proc %s', JSON.stringify(proc))
    console.log('killing %s', proc.pid)
    process.kill(parseInt(proc.pid), 'SIGINT')
  })
  if(list.length) f()  
})
}

f()
