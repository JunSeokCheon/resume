import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '크레타랩스',
      position: 'AI Engineer',
      startedAt: '2024-07',
      descriptions: [
        '(이전 데이터하이브와 같은 회사이므로 동일한 근무 조건 및 같은 업무 수행)',
        '챗봇/RPA/SW 개발 스타트업(9, 개발팀 - 7명)',
        "'태국 골프 여행 투어 챗봇 서비스' 비즈니스 기획",
        "'Stiv 챗봇 서비스' 개발",
        '해운사 챗봇(화주, 내부) 고도화 및 유지보수',
      ],
      skillKeywords: [
        'Python',
        'Langchain',
        'Llamaindex',
        'Huggingface',
        'FastAPI',
        'MySQL',
        'Redis',
        'nginx',
        'Docker',
        'RAG',
        'Chunking',
        'Serving',
      ],
    },
    {
      title: '데이터하이브',
      position: 'AI Engineer',
      startedAt: '2022-12',
      endedAt: '2024-07',
      descriptions: [
        '챗봇/RPA/SW 개발 스타트업(11, 개발팀 - 8명)',
        "'Stiv 챗봇 서비스' 비즈니스 기획 및 개발",
        "'해운사 내부 RAG 부서 챗봇 서비스' 비즈니스 기획 및 개발",
        "'해운사 화주(고객용) 챗봇 서비스' 비즈니스 기획 및 개발",
        '해운사 화주 챗봇 레거시 코드 리펙터링 및 구조 개편',
        '국책연구개발사업 연구 보고서 작성',
        '협력사 커뮤니케이션 담당',
      ],
      skillKeywords: [
        'Python',
        'Linux',
        'Tensorflow',
        'Pytorch',
        'Langchain',
        'Huggingface',
        'FastAPI',
        'Oracle',
        'nginx',
        'Docker',
        'RAG',
        'Prompt Engineering',
        'Vector Store',
        'Fine-tuning',
        'Quantization',
        'Deploy',
      ],
    },
  ],
};

export default experience;
