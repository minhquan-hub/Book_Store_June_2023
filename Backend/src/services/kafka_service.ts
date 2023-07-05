import { SchemaRegistry } from "@kafkajs/confluent-schema-registry";
import { injectable } from "inversify";
import { Kafka, Producer } from "kafkajs";
import { IKafkaService } from "src/interfaces/ikafka_service";

@injectable()
export class KafkaService implements IKafkaService {
  private producer: Producer;
  private kafka: Kafka;
  private clientId = "book-store";
  private brokers = ["host.docker.internal:9093"];
  private topic = "send-message-book-store";

  constructor() {
    this.kafka = new Kafka({ clientId: this.clientId, brokers: this.brokers });
    this.producer = this.kafka.producer();
  }

  connect() {
    this.producer.connect();
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
