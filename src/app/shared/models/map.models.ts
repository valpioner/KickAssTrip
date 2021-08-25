export enum TripType {
  World,
  Local
}

export interface Trip {
  id: number;
  name: string;
  descr?: string;
  startDate: string;
  endDate?: string;
  isTrackerEnabled: boolean;
  isPublic: boolean;
  type: TripType;
}

