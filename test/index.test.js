const tape = require('tape')
const index = require('../functions/index')

tape('health should return data', async function (t) {
  const event = {
    event1: 'event1',
    event2: 'event2',
    event3: 'event3'
  }

  const expected = {
    statusCode: 200,
    event1: 'EVENT1',
    sub_event: { event2: 'EVENT2', event3: 'EVENT3' },
    context: null
  }
  const result = await index.health(event, null)
  
  t.deepEqual(result, expected)
  t.end()
})

tape('about should return info string', async function (t) {
  const result = await index.about(null, null)
  const expected = 'AWS LAMBDA functions with cloud formation'

  t.equal(result.description, expected)
  t.end()
})

tape('sns func should return short description', async function (t) {
  const result = await index.processSns(null, null)

  t.equal(result.description, 'Sns func')
  t.end()
})
