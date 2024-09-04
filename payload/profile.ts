import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/junseok.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '천준석',
    small: '(천뿌니)',
  },
  contact: [
    {
      title: 'goosw775@naver.com',
      icon: faEnvelope,
      badge: true,
    },
    {
      title: '010-3055-7309',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/uyu423/resume-nextjs',
      icon: faGithub,
    },
    {
      link: 'https://www.facebook.com/groups/ubuntu.ko',
      icon: faFacebook,
    },
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
