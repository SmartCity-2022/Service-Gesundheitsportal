let amqp = require('amqplib');


const connection = amqp.connect(process.env.RABBITMQ_URL, (error0: any, connection: any) => {
    if (error0) throw error0;
    return connection;
});


function getConnection() {
    return connection
}


export async function listen(queueName: string, routingKey: any, callback: any) {
    
    try {

        const connection = await getConnection()
        const channel = await connection.createChannel()
  
        await channel.assertExchange(process.env.EXCHANGE, "topic", {durable: true})
  
        const queue = await channel.assertQueue("", {durable: true, exclusive: true})
        await channel.bindQueue(queue.queue, process.env.EXCHANGE, routingKey)
  
        await channel.consume(queue.queue, (message: any) => {
            console.log("RabbitMQ: consumed [RoutingKey '" + message.fields.routingKey + "', Content: '" + message.content.toString() + "'")
            callback(message.content.toString())
        })

    } catch(error) {
        console.log(error)
    }

}