export type IDescription =
  | {
      name: string;
      url?: string;
      organization: string;
      startDate: Date;
      isFinished: false;
      activityDescription: string[];
    }
  | {
      name: string;
      url?: string;
      organization: string;
      startDate: Date;
      endDate: Date;
      isFinished: true;
      activityDescription: string[];
    };

type ISubItems = {
  name: string;
  url?: string;
  description: IDescription;
};

export type IList = {
  name: string;
  url: string;
  description?: IDescription;
  subItems?: ISubItems[];
};

export interface ICareer {
  optionName: string;
  list: IList[];
}
