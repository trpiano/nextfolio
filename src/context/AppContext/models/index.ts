import { Dispatch, SetStateAction } from 'react';

export interface AppContextProps {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}
