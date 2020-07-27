import { Subjects, Publisher, PaymentCreatedEvent } from '@sevenlist0110ticket/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
