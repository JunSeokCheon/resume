import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'AI 서비스 개발과 스타트업 개발자로서의 경험이 있습니다. Python, SQL, NLP, RAG, LLM 등의 기술들을 사용하여 챗봇 개발, 모델 경량화, 데이터셋 구축 등 다양한 AI 프로젝트를 수행하며 탄탄한 실무 경험을 쌓았습니다. 특히, 챗봇 개발 프로젝트에서는 Prompt Engineering, Vector Store, Fine-tuning, Quantization, Deploy 등의 기술을 활용하여 성능과 효율성을 극대화하는 데 집중했습니다.',
    '스터디 활동을 통해 최신 AI 기술 동향을 지속적으로 학습하고 있으며, 팀원들과 함께 지식을 공유하고 토론하며 성장해 왔습니다. 오픈소스 프로젝트와 개인 프로젝트를 통해 지속적으로 새로운 기술을 탐구하고 있으며, 팀 협업과 능동적인 커뮤니케이션을 중요하게 생각합니다. 국책연구개발사업 연구 보고서 작성 및 협력사와의 커뮤니케이션 경험을 통해 효과적인 정보 전달 및 협업 능력을 키워왔습니다. AI 분야에 대한 깊은 이해와 끊임없는 학습 자세를 바탕으로 팀의 목표 달성에 기여하고, 핵심적인 역할을 수행하며 성장해 나가고자 합니다.',
    '새로운 기술에 대한 도전을 즐기고, 끊임없이 배우고 성장하며 "시작"과 "끝"을 중요하게 생각하는 개발자로서, 앞으로 AI 분야에서 전문성을 더욱 발전시켜 의미있는 결과물을 만들어내고 싶습니다.',
  ],
  sign: 'Junseok',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
