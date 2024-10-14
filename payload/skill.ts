import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Python',
    },
    {
      title: 'Shell Scripting',
    },
    {
      title: 'JAVA',
    },
    {
      title: 'javascript',
    },
    {
      title: 'HTML/CSS',
    },
    {
      title: 'Dart',
    },
  ],
};

const FameworksLibrariesDevelopment: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'Tensorflow',
    },
    {
      title: 'Pytorch',
    },
    {
      title: 'Keras',
    },
    {
      title: 'Langchain',
    },
    {
      title: 'Llamaindex',
    },
    {
      title: 'Huggingface',
    },
    {
      title: 'Ollama&vLLm',
    },
    {
      title: 'FastAPI',
    },
  ],
};

const InfrastructureDatabases: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'nginx',
    },
    {
      title: 'Docker',
    },
    {
      title: 'AWS',
    },
    {
      title: 'Oracle',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'MongoDB',
    },
    {
      title: 'Redis',
    },
  ],
};

const ToolsIDEs: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'VS Code',
    },
    {
      title: 'Jupyter Notebook',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Git',
    },
    {
      title: 'Github',
    },
  ],
};

const Misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Linux',
    },
    {
      title: 'MLOps',
    },
    {
      title: 'LLMOps',
    },
    {
      title: 'Study Activities',
    },
    {
      title: 'Weight Training',
    },
    {
      title: 'Walk with my dog',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    FameworksLibrariesDevelopment,
    InfrastructureDatabases,
    ToolsIDEs,
    Misc,
  ],
};

export default skill;
