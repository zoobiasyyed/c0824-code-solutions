import './ImageContainer.css';

type Props = {
  text: string;
};

export function ImageContainer(prop: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={prop.text} alt="space-image" />
      </div>
    </div>
  );
}
