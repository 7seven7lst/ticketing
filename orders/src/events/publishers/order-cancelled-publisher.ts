import { Subjects, Publisher, OrderCancelledEvent } from '@sevenlist0110ticket/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
