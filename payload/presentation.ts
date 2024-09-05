import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '랭체인소맨(Langchain) 스터디',
      subTitle: '가짜연구소 8기 러너로 참여',
      startedAt: '2024-03',
      endedAt: '2024-07',
      descriptions: [
        {
          content: 'Langchain 공식 문서를 개인 학습하고 화상 회의를 통해 발표 수행',
        },
        {
          content: '데이터 처리 및 배포 관련 정보 교류 활발',
        },
        {
          content: 'Github:',
          postHref: 'https://github.com/JunSeokCheon/Lang-chainsawman',
        },
        {
          content: 'notion:',
          postHref:
            'https://chanrankim.notion.site/e1f419456cac4980bb2fe90d89d2bad9?p=a7632025ae0646f7b53539e4d81d17a2&pm=c',
        },
      ],
    },
    {
      title: 'pytorch 공식 문서 및 cs231n 강의 스터디',
      subTitle: 'pytorch 공식 문서와 cs231n 강의를 개인 학습 후 스터디를 통해 학습 내용 질의 응답',
      startedAt: '2023-12',
      endedAt: '2024-04',
      descriptions: [
        {
          content: '미숙한 Pytorch 사용법 개선',
        },
        {
          content: 'compute vision 바이블인 cs231n 강의 학습',
        },
        {
          content: 'Github:',
          postHref: 'https://github.com/JunSeokCheon/Deep-Learning-Study/tree/Jun',
        },
      ],
    },
    {
      title: '머신러닝 학습 스터디',
      subTitle: "'머신러닝 완벽 가이드' 도서 개인 학습 후 화상 발표 수행",
      startedAt: '2023-03',
      endedAt: '2023-12',
      descriptions: [
        {
          content: '도서 학습과 복습 주를 두어 학습 능률 향상',
        },
        {
          content: '스터디 중간중간 Dacon 과제와 논문 리뷰',
        },
        {
          content: 'Github:',
          postHref: 'https://github.com/JunSeokCheon/AI-Tech/tree/Jun',
        },
      ],
    },
    {
      title: '알고리즘 및 코딩 테스트 문제 풀이 스터디',
      subTitle: '백준/프로그래머스 문제 및 알고리즘 학습',
      startedAt: '2023-01',
      endedAt: '2023-12',
      descriptions: [
        {
          content: '스터디 날, 랜덤 문제를 선택하고 화면 공유를 하여 라이브 코딩 수행',
        },
        {
          content: '서로 풀이 방법을 공유하며 토론형 스터디',
        },
        {
          content: '복습 주를 두어 어려웠던 문제를 다시 풀이 수행',
        },
        {
          content: 'Github:',
          postHref: 'https://github.com/JunSeokCheon/Algo_Master',
        },
      ],
    },
    {
      title: '코딩 테스트 스터디',
      subTitle: '백준/프로그래머스 문제 및 알고리즘 학습',
      startedAt: '2022-01',
      endedAt: '2022-06',
      descriptions: [
        {
          content: '첫 팀장으로써의 스터디로 책임감을 느끼고 어떻게 하면 모두가 학습을 잘할까 고민',
        },
        {
          content: '단순 문제 풀이형식이 아닌 라이브 코딩으로 실제 코딩 테스트와 유사하게 진행',
        },
        {
          content: '실제 코딩 테스트도 참가하여 서로의 풀이 방법 공유',
        },
        {
          content: 'Github:',
          postHref: 'https://github.com/JunSeokCheon/problem-solving-with-study',
        },
      ],
    },
  ],
};

export default presentation;
