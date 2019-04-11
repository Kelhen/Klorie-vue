export interface User {
    id: string;
    name: string;
  }
export interface UserConnection {

  }
export interface PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  }
export interface UserEdge {
    cursor: string;
  }
export interface AggregateUser {
    count: number;
  }
export interface BatchPayload {
    count: any;
  }
export interface UserSubscriptionPayload {
    updatedFields: string[];
  }
export interface UserPreviousValues {
    id: string;
    name: string;
  }
