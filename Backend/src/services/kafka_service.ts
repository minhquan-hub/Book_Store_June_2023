import dotenv from "dotenv";
import { SchemaRegistry } from "@kafkajs/confluent-schema-registry";
import { injectable } from "inversify";
import { Kafka, Producer } from "kafkajs";
import { IKafkaService } from "src/interfaces/ikafka_service";
dotenv.config();

@injectable()
export class KafkaService implements IKafkaService {
  private producer: Producer;
  private kafka: Kafka;
  private clientId = process.env.CLIENT_ID;
  private brokers = [process.env.BROKER];
  private topic = process.env.TOPIC;

  constructor() {
    this.kafka = new Kafka({ clientId: this.clientId, brokers: this.brokers });
    this.producer = this.kafka.producer();
    this.connect();
  }

  connect() {
    this.producer.connect().then(() => {
        console.log("Connected Kafka");
    });
  }

  sendMessage(action: string, id: string) {
    try {
      const data = { Action: `${action}`, Id: `${id}` };
      this.producer.send({
        topic: this.topic,
        messages: [{ value: JSON.stringify(data) }],
      });
    } catch (err) {
      console.log(err);
    }
  }
}
