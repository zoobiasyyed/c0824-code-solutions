type Prop = {
  text: string;
};

export function ImageDescription(prop: Prop) {
  return (
    <div>
      <p>{prop.text}</p>
    </div>
  );
}
