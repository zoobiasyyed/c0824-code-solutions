type Prop = {
  onClick: () => void;
};

export function NextButton({ onClick }: Prop) {
  return (
    <button className="next-button" onClick={onClick} type="button">
      Next
    </button>
  );
}
