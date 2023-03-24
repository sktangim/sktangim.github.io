import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'Sk Tangim',
    aria: 'My name is Sk Tangim',
  },
  title: {
    display: 'Civil Engineer',
    aria: 'I am a Civil  engineer',
  },
  buttons: [
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/sktangim/',
    },
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in//',
    },
    {
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/drive/folders//',
    },
    {
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:',
    },
  ],
};

export default config;
