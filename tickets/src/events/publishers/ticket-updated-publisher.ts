import { Publisher, Subjects, TicketUpdatedEvent } from '@sevenlist0110ticket/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
