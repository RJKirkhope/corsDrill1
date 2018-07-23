const express = require('express')
const app = express()
const cors = require('cors')
const port = parseint(process.env.PORT) || 9000
const data = require('./api/cohorts')


app.use(cors())

function dataId(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  }
  return null
}

app.get('/', function(request, response){
  response.json({
    data
  })
})

app.get('/:id', function(request, response){
  var cohort = dataId(data, request.params.id)
  if (!cohort) {
    response.status(404).json({
      error: {
        message: 'No cohort found!'
      }
    })
  }else {
    response.json({
      data: cohort
    })
  }
})

app.listen(port, () => console.log('listening on http://localhost:9000'))
