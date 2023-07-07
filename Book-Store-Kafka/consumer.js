const { Kafka } = require("kafkajs")
const clientId = "book-store"
const brokers = ["localhost:9093"]
const topic = "send-message-book-store"

const kafka = new Kafka({
    clientId,
    brokers
})

const consumer = kafka.consumer({
    groupId: clientId,
    minBytes: 5,
    maxBytes: 1e6,
    maxWaitTimeInMs: 3000,
})

const consume = async() => {
    await consumer.connect()
    await consumer.subscribe({ topic })
    await consumer.run({
        eachMessage: async({ message }) => {
            console.log("Message: " + message.value)
        },
    })
}

consume()