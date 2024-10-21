import { TopicCard } from './TopicCard';
import { useState } from 'react';

type AccordionProp = {
  id: number;
  title: string;
  content: string;
};

type Topics = {
  topics: AccordionProp[];
};

export default function Accordion({ topics }: Topics) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {topics.map((topic) => (
        <TopicCard
          onShow={() =>
            setActiveIndex(activeIndex === topic.id ? null : topic.id)
          }
          isActive={activeIndex === topic.id}
          key={topic.id}
          title={topic.title}
          content={topic.content}
        />
      ))}
    </>
  );
}
