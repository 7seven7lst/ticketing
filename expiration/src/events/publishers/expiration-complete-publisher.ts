import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@sevenlist0110ticket/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
