type Props = {
  text: string;
};

export function ImageDescription(prop: Props) {
  return (
    <div>
      <p>{prop.text}</p>
    </div>
  );
}
