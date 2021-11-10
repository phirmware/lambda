module.exports = {
  health,
  about
}

async function health (event, context) {
  const { event1, event2, event3 } = event

  return {
    statusCode: 200,
    event1: event1.toUpperCase(),
    sub_event: {
      event2: event2.toUpperCase(),
      event3: event3.toUpperCase()
    },
    context
  }
}

async function about (event, context) {
  return {
    description: 'AWS LAMBDA functions with cloud formation'
  }
}
