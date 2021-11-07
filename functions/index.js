exports.handler = async function (event, context) {
  const { event1, event2, event3 } = event

  return {
    message: 'Hello!',
    event1: event1.toUpperCase(),
    sub_event: {
      event2: event2.toUpperCase(),
      event3: event3.toUpperCase()
    },
    context
  }
}
