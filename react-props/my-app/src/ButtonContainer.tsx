type Prop = {
  text: string;
};

export function ButtonContainer(prop: Prop) {
  return (
    <div>
      <button>{prop.text}</button>
    </div>
  );
}
