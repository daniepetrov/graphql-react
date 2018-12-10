const express = require('express')

const app = express()

const expressGrapqhQL = require('express-graphql')

app.use(
  '/graphql',
  expressGrapqhQL({
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('Listening')
})
