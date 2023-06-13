export type IDescription =
  | {
      name: string;
      description: {
        name: string;
        organization: string;
        startDate: Date;
        isFinished: false;
        activityDescription: string[];
      };
    }
  | {
      name: string;
      description: {
        organization: string;
        startDate: Date;
        endDate: Date;
        isFinished: true;
        activityDescription: string[];
      };
    };

type ISubItems = {
  name: string;
  description: IDescription;
};

type IList = {
  name: string;
  url: string;
  description?: IDescription;
  subItems?: ISubItems[];
};

export interface ICareer {
  optionName: string;
  list: IList[];
}
