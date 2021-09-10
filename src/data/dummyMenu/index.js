import React from 'react';
import {IconChangePassword, IconEditProfile, IconSignOut} from '../../assets';

export const dummyMenu = [
  {
    id: 1,
    nama: 'Edit Profile',
    gambar: <IconEditProfile />,
    halaman: 'EditProfile',
  },
  {
    id: 2,
    nama: 'Change Password',
    gambar: <IconChangePassword />,
    halaman: 'ChangePassword',
  },
  {
    id: 3,
    nama: 'Sign Out',
    gambar: <IconSignOut />,
    halaman: 'Login',
  },
];
