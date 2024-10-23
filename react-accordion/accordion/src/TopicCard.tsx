import './TopicCard.css';

type AccordionProp = {
  title: string;
  content: string;
  isActive: boolean;
  onShow: () => void;
};

export function TopicCard({ title, content, isActive, onShow }: AccordionProp) {
  return (
    <>
      <h2 onClick={onShow} className="h2-style">
        {title}
      </h2>
      {isActive && <p className="p-style">{content}</p>}
    </>
  );
}
