export enum Section {
  Education = "education",
  Experience = "experience",
  Portfolio = "portfolio",
  Publication = "publication",
  News = "news",
  Award = 'award',
  Extra = 'extra',
  Timeline = 'timeline',
}

export const sectionOrder = [
  Section.News,
  Section.Portfolio,
  Section.Publication,
  Section.Timeline,
  Section.Award,
  Section.Extra,
];
