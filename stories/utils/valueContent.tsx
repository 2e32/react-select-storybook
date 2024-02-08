import { User } from '../types';

import * as Icon from '../assets/icons/svg';

export const renderUserAsChip = (selectedUser?: User) => {
  if (selectedUser == null) return null;

  return (
    <div className="chip-value">
      {selectedUser.name}
      <button>
        <Icon.CloseCircle width="inherit" height="inherit" />
      </button>
    </div>
  );
};

export const renderUserAsDetails = (selectedUser?: User) => {
  if (selectedUser == null) return null;

  return (
    <div className="custom-value">
      <div className="custom-value__avatar">
        <img alt=" " />
      </div>
      <div className="custom-value__content">
        <div className="custom-value__title">{selectedUser.name}</div>
        <div className="custom-value__subtitle">{selectedUser.email}</div>
      </div>
    </div>
  );
};
