const fs = require('fs')

// Leer archivos de manera sincrona
const data = fs.readFileSync('./data.txt', 'utf-8')
console.log(data)

// Leer archivos de manera asincrona
fs.readFile('./data.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log('error', err)
  }
  console.log(data)
})

