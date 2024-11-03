type Props = {
  imageCaption: string;
};

export function ImageCaption(prop: Props) {
  return (
    <div>
      <h3>{prop.imageCaption}</h3>
    </div>
  );
}
