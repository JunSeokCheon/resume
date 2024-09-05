import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '금오공과대학교',
      subTitle: '컴퓨터공학과',
      startedAt: '2015-03',
      endedAt: '2022-02',
    },
    {
      title: '경산고등학교',
      subTitle: '자연계 졸업 (경상북도 경산시)',
      startedAt: '2012-03',
      endedAt: '2015-02',
    },
  ],
};

export default education;
