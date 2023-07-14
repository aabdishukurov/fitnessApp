import React from 'react';
import { ProfileLogo } from './profileLogo/ProfileLogo';
import { ProfileNavigation } from './profileNavigation/profileNavigation';
import { ProfileUser } from './profileUser/ProfileUser';

export const ProfileHead = () => {
  return (
    <>
      <ProfileLogo />
      <ProfileNavigation />
      <ProfileUser />
    </>
  );
};
