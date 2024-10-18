type Prop = {
  item: string;
};

export function Banner({ item }: Prop) {
  return <h3>{item}</h3>;
}
