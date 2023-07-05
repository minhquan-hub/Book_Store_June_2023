export interface IKafkaService {
  sendMessage(action: string, id: string);
}
