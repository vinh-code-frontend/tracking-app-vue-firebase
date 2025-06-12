export type Func<TArgs extends any[], TReturn> = (...args: TArgs) => TReturn;
export type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type UserRole = 'member' | 'admin' | 'manager';

export type IUser = {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  createdAt: Date;
  role: UserRole;
};

export type ITag = {
  uid: string;
  name: string;
  icon?: string;
  slug: string;
  color?: string;
  createdAt: Date;
  createdBy: IUser['uid'];
};

export type IExpense = {
  uid: string;
  title: string;
  tagIds: ITag['uid'][];
  paymentDate: Date;
  subItemsCount?: number;

  note?: string;
  address?: string;
  amount: number;
  createdAt: Date;
  createdBy: IUser['uid'];
  buyer: {
    userId: IUser['uid'];
    amount: number;
    isPaid: boolean;
    payAt?: Date;
    note?: string;
  }[];
  contributorIds: IUser['uid'][];
  type: 'simple' | 'detailed';
  photoURL?: string;
};

export type IExpenseItem = {
  uid: string;
  expenseId: IExpense['uid'];
  title: string;
  note?: string;
  amount: number;
  tagIds?: ITag['uid'][];
  order: number;
  createdAt: Date;
  buyer: IUser['uid'][];
};

export type IGroup = {
  uid: string;
  groupOwnerId: IUser['uid'];
  groupMemberIds: IUser['uid'][];
};
