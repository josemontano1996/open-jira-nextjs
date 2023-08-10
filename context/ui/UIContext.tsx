import { createContext } from 'react';

interface ContextProps {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;

  //Methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  openNewNote: () => void;
  closeNewNote: () => void;
}

export const UIContext = createContext({} as ContextProps);
