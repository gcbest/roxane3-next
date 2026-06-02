export const site = {
  name: "Practical Psychology Consultancy Ltd",
  tagline:
    "Providing focused solutions to improve and enhance workers' well-being, performance, and productivity; as well as effective organisational functionality.",
  description:
    "Evidence-based workplace psychology, organisational consultancy, research design, and well-being support.",
  phoneDisplay: "+44 (0)7887 743295",
  phoneHref: "tel:+447887743295",
  emailUser: "info",
  emailDomain: "practicalpsychologyconsultancy.com",
  email: "info@practicalpsychologyconsultancy.com",
  address: ["Cherry Tree Court", "36 Ferensway", "Kingston-Upon-Hull", "HU2 8NH"],
  socials: [
    {
      label: "Twitter/X",
      href: "https://twitter.com/roxanelgervais",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-roxane-gervais/",
    },
  ],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Resources", href: "/resources/" },
  { label: "Publications", href: "/publications/" },
  { label: "Contact", href: "/contact/" },
];

export const homeCopy = [
  "Practical Psychology Consultancy Ltd focuses on the evidence to support effective working within organisations, between and within teams, and for individuals. We advocate building a strategy that has at its core the development of your workforce, which when supported with the relevant structures, policies, practices, and interventions, will be able to realise its potential. We will achieve this for you through progressing a bespoke solution to address those safety, health and overall well-being issues, inclusive of mental health, which have arisen in your workplace.",
  "As a team of experienced and regulated psychologists, and organisational consultants, we will work with you to address your work-relevant organisational concerns.",
  "We will ensure that the solution we develop and propose adds value to your organisational practices and enhances your organisational climate, as well as your organisational culture.",
];

export const services = [
  {
    title: "Business Support",
    description:
      "We are a team of experienced and regulated psychologists. Using an evidence-based approach, we will work with you to develop a bespoke solution to address those safety, health and overall well-being issues, inclusive of mental health, which have arisen in your workplace. We will ensure that the solution adds value to your organisational practices and enhances your organisational culture.",
  },
  {
    title: "Research and Survey Design",
    description:
      "Our experience and expertise in these areas allow us to design research to meet your needs for whichever issue you wish to gain more insight. We will use research methods and techniques that will obtain the information that you wish to obtain, inclusive of developing accurate and meaningful surveys. Our expertise covers quantitative and qualitative methods and thereby allows us to use a triangulation approach in the research process to ensure a more robust practice.",
  },
  {
    title: "Addressing Work-Related Stress",
    description:
      "The sickness absence levels within organisations remain high in the United Kingdom due to mental ill health conditions, such as work-related stress, anxiety or depression. This workshop will outline an organisation's legal responsibility in managing work-related stress, which in turn can lead to work-relevant depression and anxiety. It will provide participants with evidence-based solutions that cover the triad structure within any organisation. These are the organisational level, the group or team level and the individual level. We will work with you to understand the causes of the work-related stress in your organisation, as well as knowing what works in supporting workers' well-being in the workplace and the tools to prevent, and if needed, address the mental ill health conditions that can arise within the workplace.",
  },
  {
    title: "Working through the Menopause",
    description:
      "The awareness about the menopause has increased and this benefits those who are experiencing or will experience this life change as they age. It is even more relevant for those women who are working during this change in their lives, as the workplace can be challenging at times, and the necessary support systems may not be in place. We can provide a one-day evidence-based workshop for those going through the change with the skills needed to function more effectively at home and at work, while ensuring they focus on maintaining their well-being. It allows a supportive environment to address those workplace challenges, at the same time as providing a networking opportunity to those attending.",
  },
  {
    title: "Leadership Development",
    description:
      "Leaders are the essence of an organisation. They provide strategic direction, make essential decisions to ensure that the business's functionality is effective; they solve any problems that may emerge; and they influence and support the workforce. This bespoke leadership development programme, inclusive of management training will assist the leaders in your organisation to enhance their individuals and business potential as well as improve their ability to gain the trust, respect, commitment and support of their teams.",
  },
];

export const resources = [
  {
    category: "Leadership",
    items: [
      {
        title: "5 Essential Tips for Personal Leadership",
        url: "/assets/articles/5tips_personal_leadership.pdf",
      },
    ],
  },
  {
    category: "Mental Health",
    items: [
      {
        title: "Work Stressors: Exploring Solutions",
        url: "/assets/articles/work_stressors_exploring_solutions.pdf",
      },
    ],
  },
  {
    category: "Coaching",
    items: [
      {
        title: "Six Coaching Outcomes",
        url: "/assets/articles/six_coaching_outcomes.pdf",
      },
      {
        title: "Assess Work Effectiveness",
        url: "/assets/articles/assess_work_effectiveness.pdf",
      },
    ],
  },
];

export const allResources = resources.flatMap((group) => group.items);

export const publications = [
  {
    title: "The effects of strategic organisational change and practices on psychosocial risks",
    description:
      "Organisational change is a useful process within an organisation, and could lead to improved practices and procedures. However, it tends to occur to a greater extent during periods of recession or economic turmoil. Regardless as to when it occurs, it is useful to explore the impacts of these changes on occupational safety and health (OSH). This article examines the relationship between various organisational practices (such as, lean production, downsizing and resizing, globalisation, outsourcing, continuous improvement, and process reengineering), and how they affect psychosocial risks in the workplace. In addition, the implications for workers' health and wellbeing are outlined and discussed.",
    url: "http://oshwiki.eu/wiki/The_effects_of_organisational_practices_on_psychosocial_risks",
  },
  {
    title: "Prevention of work-related violence to staff in the education sector",
    description:
      "One of the risks to which staff in the education sector are exposed is violence. When workers are exposed to violence, it may impact adversely on their health and wellbeing. Additionally, this may affect their ability to function as educators. This article focuses mainly on third-party violence, i.e. that which is perpetrated against staff by pupils / students / parents, but provides as well some information on violence perpetrated by colleagues. It outlines the impact that work-related violence has on those who experience it, and presents good practice and prevention examples that are available for educational institutions and workers in this sector.",
    url: "http://oshwiki.eu/wiki/Prevention_of_work-related_violence_to_staff_in_the_education_sector",
  },
  {
    title: "Worker participation in the United Kingdom",
    description:
      "In the United Kingdom, worker participation is promoted as an essential element of the work environment. It is accepted that workers are key sources of information about the jobs in which they are engaged and are therefore in the best position to work with management as well as safety and health personnel to develop safer work systems and practices. It is known also that effective worker participation, or the more widely used term in the United Kingdom, worker involvement, could help to reduce accidents and ill health. This article explores worker participation and representation in respect of occupational safety and health (OSH) across the sector level and the enterprise level.",
    url: "http://oshwiki.eu/wiki/Worker_participation_-_United_Kingdom",
  },
  {
    title: "Detachment and recovery after work: An overview",
    description:
      "Psychological detachment, i.e. the need to detach from work, when not at work, is becoming more vital, due to the increasing technological advances that make it easier to stay connected to the workplace, through e.g. e-mail, smart phones and teleworking. These changes have contributed to researchers progressively highlighting the importance of recovery from the work environment, especially in terms of maintaining a good balance between work and life, and thereby, enabling better health and wellbeing. This article discusses the detachment and recovery concepts; their relationship; and impact on workers' health, wellbeing and productivity.",
    url: "http://oshwiki.eu/wiki/Detachment_and_recovery_after_work:_An_overview",
  },
  {
    title: "Presenteeism: An overview",
    description:
      "Presenteeism as a concept is increasing in importance in the work environment. It occurs when workers go to work when ill and are unable to perform effectively due to their ill health. Due to this loss in productivity, it has been estimated that presenteeism costs organisations more than sickness absence, and as such should be monitored to a greater extent. It impacts on workers' health, wellbeing and resilience, as well as organisational health. These issues are discussed as are the implications for workplace policies and practices to manage presenteeism.",
    url: "http://oshwiki.eu/wiki/Presenteeism:_An_overview",
  },
  {
    title: "Workaholism and the culture of competition: OSH consequences",
    description:
      "This article defines workaholism and the culture of competition. These concepts are not usually considered from an occupational safety and health (OSH) perspective. With respect to workaholism, most of the information on this topic thus far has either been anecdotal or has used a clinical approach. However, as one of the consequences of these behaviours could be ill health, they should be viewed as a risk within the workplace. The benefits of addressing these behaviours in the work environment by implementing good practice are discussed.",
    url: "http://oshwiki.eu/wiki/Workaholism_and_the_culture_of_competition:_OSH_consequences",
  },
];
