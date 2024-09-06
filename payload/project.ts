import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '데이터하이브 Stiv 챗봇 서비스 비즈니스 기획 및 개발',
      startedAt: '2024-07',
      where: '데이터하이브, 크레타랩스',
      descriptions: [
        {
          content:
            '누구나 데이터로 자신만의 챗봇을 만들고, 공유할 수 있는 Stiv 챗봇 서비스 기획 및 개발',
        },
        {
          content: 'PDF Parsing 모듈 개발',
        },
        {
          content: '여러 검색기를 결합하는 Ensemble Retriever 모듈 개발',
        },
        {
          content: '사용자의 Needs 에 맞는 Streaming 채팅 로직 개발',
        },
        {
          content: 'asyncio 기반 비동기 채팅 로직 개발',
        },
        {
          content: '[진행 중]PDF 파일에 대한 Table Extraction 연구',
        },
        {
          content: '[진행 중]Charts 에 대한 dynamic description 연구',
        },
      ],
    },
    {
      title: '해운사 내부 RAG 부서 챗봇 서비스 비즈니스 기획 및 개발',
      startedAt: '2023-11',
      endedAt: '2024-06',
      where: '데이터하이브',
      descriptions: [
        {
          content: '해운사 내부에서만 사용하는 RAG 부서 챗봇 서비스 개발',
        },
        {
          content: '파일 유형별 데이터 전처리 로직 개발',
        },
        {
          content: '조건에 따른 Chunk Strategy 수립',
        },
        {
          content: 'reranker 모델 파인튜닝 로직 개발',
        },
        {
          content: '한정된 자원을 극복하기 위한 unsloth 파인튜닝 로직 개발',
        },
        {
          content: 'redis 사용한 대화 메모리 저장 및 Multi-turn 대화 기능 개발',
        },
        {
          content: 'Serving 처리 속도와 분산 처리를 위한 vLLm 서버 구축',
        },
      ],
    },
    {
      title: '해운사 화주(고객용) 챗봇 서비스 비즈니스 기획 및 개발',
      startedAt: '2023-03',
      endedAt: '2023-10',
      where: '데이터하이브',
      descriptions: [
        {
          content: '기존 Rule-Based 챗봇에서 Hybrid 챗봇 서비스 개발',
        },
        {
          content: '해운 비즈니스 데이터 수집을 위한 자체 모듈 개발',
        },
        {
          content: 'Entity/Intent 데이터 셋 구축 및 분석 모델 학습',
        },
        {
          content: 'Google Analytics를 사용한 지표 모니터링 서비스 개발',
        },
        {
          content: '일본 고객사를 위한 일본용 챗봇 로직 개발',
        },
        {
          content: '개발 방향성 수립 및 설계, 다른 직군과의 협업 등을 경험',
        },
        {
          content: 'AI 엔지니어로서 Out of Memory, 보안 사고, 성능 튜닝 등 다양한 문제를 경험',
        },
      ],
    },
    {
      title: '해운사 화주 챗봇 레거시 코드 리펙터링 및 구조 개편',
      startedAt: '2022-12',
      endedAt: '2023-02',
      where: '데이터하이브',
      descriptions: [
        {
          content: '용도와 목적 없이 사용되고 있던 레거시 코드 전체 정리',
        },
        {
          content: '기존 1개의 모듈을 용도/목적에 맞게 n개의 모듈로 분리',
        },
        {
          content: 'Sqlalchemy ORM 구조 개편으로 서비스 운영 위협 감소',
        },
        {
          content: '폴더 구조 및 변수 등을 Python Code Convention를 고려하여 설계',
        },
        {
          content: 'Prouduct 개발 시 확장성과 모듈화 고려의 중요성을 깨닫게 됨',
        },
      ],
    },
  ],
};

export default project;
