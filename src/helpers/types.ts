export interface UserNames {
  business_name: string;
  id: string;
}

export interface PaginationType {
  Count: number;
  Items: any[];
  LastEvaluatedKey?: string;
  PageSize: number;
  ScannedCount: number;
}
