type ImageProp = {
  src: string;
  alt: string;
};

export function ImageCard({ src, alt }: ImageProp) {
  return <img className="images" src={src} alt={alt}></img>;
}
