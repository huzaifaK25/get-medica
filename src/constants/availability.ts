export interface TimeSlot {
  from: string;
  to: string;
}

export interface DayAvailability {
  id: number;
  day: string;
  abbr: string;
  enabled: boolean;
  slots: TimeSlot[];
}
