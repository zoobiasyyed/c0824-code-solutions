type Props = {
  text: string;
};

export function Header(prop: Props) {
  return <h1>{prop.text}</h1>;
}
