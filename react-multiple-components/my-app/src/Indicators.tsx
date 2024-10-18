type Prop = {
  count: number;
  onClick: (index: number) => void;
  current: number;
};

export function Indicators({ count, current, onClick }: Prop) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        style={{ backgroundColor: i === current ? 'blue' : 'black' }}
        onClick={() => {
          onClick(i);
        }}>
        {i}
      </button>
    );
  }
  return <>{buttons}</>;
}
