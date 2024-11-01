import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Dots } from './Dots';
import { ImageCard } from './ImageCard';
import { useEffect, useState, useCallback } from 'react';
import './Carousel.css';

const images = [
  {
    src: '/images/fushiguro.webp',
    alt: 'Megumi Fushiguro',
  },
  {
    src: '/images/inumaki.webp',
    alt: 'Toge Inumaki',
  },
  {
    src: '/images/itadori.webp',
    alt: 'Yuji Itadori',
  },
  {
    src: '/images/kugisaki.webp',
    alt: 'Nobara Kugisaki',
  },
  {
    src: '/images/panda.webp',
    alt: 'Panda',
  },
  {
    src: '/images/zen-in.webp',
    alt: "Maki Zen'in",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextButton = useCallback(() => {
    if (currentIndex >= images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    const newInterval = setInterval(nextButton, 1000);

    return () => {
      clearInterval(newInterval);
    };
  }, [nextButton]);

  // useEffect(() => {
  //   const newInterval = setInterval(() => {
  //     if (currentIndex >= images.length - 1) {
  //       setCurrentIndex(0);
  //     } else {
  //       setCurrentIndex(currentIndex + 1);
  //     }
  //   }, 1000);

  //   return () => {
  //     clearInterval(newInterval);
  //   };
  // }, [currentIndex]);

  // const nextButton = () => {
  //   if (currentIndex >= images.length - 1) {
  //     setCurrentIndex(0);
  //   } else {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };

  const prevButton = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const imageDots = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="carousel-style">
        <PrevButton onClick={prevButton} />
        <ImageCard
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
        />
        <NextButton onClick={nextButton} />
      </div>
      <Dots onClick={imageDots} count={images.length} current={currentIndex} />
    </div>
  );
}
