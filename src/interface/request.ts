export interface IQueryCommon {
  filterName?: {
    key: string;
    value: string;
  }[];
  operator?: string;
}
export interface IFormContactReq {
  style: string;
  investLevel: string;
  customerName: string;
  customerPhone: string;
}

export interface IFormCommentReq {
  name_user: string;
  email: string;
  product: string;
  comment: string;
}
