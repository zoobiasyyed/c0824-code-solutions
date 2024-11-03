import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';
import { useState } from 'react';

const srcs = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const captions = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const descriptions = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];

export function App() {
  const [buttonIndex, setButtonIndex] = useState(0);

  function handleButtonClick() {
    if (buttonIndex >= srcs.length - 1) {
      setButtonIndex(0);
    } else {
      setButtonIndex(buttonIndex + 1);
    }
  }

  return (
    <>
      <Header text="React Image Bank" />
      <Image src={srcs[buttonIndex]} />
      <Caption caption={captions[buttonIndex]} />
      <Description text={descriptions[buttonIndex]} />
      <Button label="Click for Next Image" onClick={handleButtonClick} />
    </>
  );
}
