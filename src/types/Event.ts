export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  organizer: string;
  location: string;
  registrationLink: string;
  status: EventStatus;
  description?: string;
}

export type EventStatus = 'upcoming' | 'ongoing' | 'completed';

export interface FilterState {
  status: EventStatus | 'all';
  organizer: string;
  dateRange: 'all' | 'today' | 'thisWeek' | 'past';
}