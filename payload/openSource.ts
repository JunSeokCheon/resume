import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: '가짜연구소',
      descriptions: [
        {
          content: '2024년 8기 팀원(러너) 참여',
        },
        {
          content: 'https://pseudolab.github.io/about',
          href: 'https://pseudolab.github.io/about',
        },
      ],
    },
    {
      title: '부스트코스',
      descriptions: [
        {
          content: '2023년 AI basic 9기 참여',
        },
        {
          content:
            'https://m.post.naver.com/viewer/postView.naver?volumeNo=34942080&memberNo=34635212',
          href:
            'https://m.post.naver.com/viewer/postView.naver?volumeNo=34942080&memberNo=34635212',
        },
      ],
    },
  ],
};

export default openSource;
