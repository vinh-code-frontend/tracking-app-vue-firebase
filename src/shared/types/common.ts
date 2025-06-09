export type Func<TArgs extends any[], TReturn> = (...args: TArgs) => TReturn;
export type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type IUser = {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  createdAt: string | Date;
  role: 'member' | 'admin';
};

export type ICategory = {
  uid: string;
  name: string;
  icon: string;
  color: string;
  createdAt: string | Date;
  createdBy: IUser['uid'];
};

export type IExpense = {
  uid: string;
  categoryId: ICategory['uid'];
  title: string;
  description?: string;
  amount: number;
  paidBy: IUser['uid'];
  paymentDate: string | Date;
  createdAt: string | Date;
  createdBy: IUser['uid'];
};
