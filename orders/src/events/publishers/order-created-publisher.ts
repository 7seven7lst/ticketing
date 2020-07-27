import { Publisher, OrderCreatedEvent, Subjects } from '@sevenlist0110ticket/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
