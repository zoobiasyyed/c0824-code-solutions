type Prop = {
  text: string;
};

export function Header(prop: Prop) {
  return <h1>{prop.text}</h1>;
}
