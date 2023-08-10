import { UIState } from '.';

type UIActionType =
  | { type: 'UI-Open Sidebar' }
  | { type: 'UI-Close Sidebar' }
  | { type: 'UI-Open New Note' }
  | { type: 'UI-Close New Note' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI-Open Sidebar':
      return {
        ...state,
        sideMenuOpen: true,
      };
    case 'UI-Close Sidebar':
      return {
        ...state,
        sideMenuOpen: false,
      };
    case 'UI-Open New Note':
      return {
        ...state,
        isAddingEntry: true,
      };
    case 'UI-Close New Note':
      return {
        ...state,
        isAddingEntry: false,
      };
    default:
      return state;
  }
};
