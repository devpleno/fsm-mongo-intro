const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

MongoClient.connect('mongodb://localhost:27017/intro-mongo', (err, db) => {
  // console.log(err, db)
  const pessoas = db.collection('pessoas')
  pessoas.insert({
    nome: 'Tulio Faria',
    nascimento: '1985-08-04'
  }, (err, res) => {
    console.log(err, res)
  })
})