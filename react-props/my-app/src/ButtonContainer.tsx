type Props = {
  text: string;
};

export function ButtonContainer(prop: Props) {
  return (
    <div>
      <button>{prop.text}</button>
    </div>
  );
}
