import { Publisher, Subjects, TicketCreatedEvent } from '@sevenlist0110ticket/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
