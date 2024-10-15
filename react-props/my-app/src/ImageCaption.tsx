type Prop = {
  imageCaption: string;
};

export function ImageCaption(prop: Prop) {
  return (
    <div>
      <h3>{prop.imageCaption}</h3>
    </div>
  );
}
