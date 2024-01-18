import { useState, useEffect } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  perspective: 1000px;
`;

const ContainerInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  transition: transform 1.2s;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) =>
    isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-size: cover;
`;

export default function BannerImages() {
  const [isFlipped, setIsFlipped] = useState(false);

  const importAll = (context) => context.keys().map(context);
  const images = importAll(
    require.context("../../../assets/images", false, /\.(png|jpe?g|svg)$/),
  );

  const [frontBgImg, setFrontBgImg] = useState(
    () => images[Math.floor(Math.random() * images.length)],
  );
  const [backBgImg, setBackBgImg] = useState(
    () => images[Math.floor(Math.random() * images.length)],
  );

  const handleFlip = () => {
    setIsFlipped(!isFlipped);

    if (!isFlipped) {
      setBackBgImg(images[Math.floor(Math.random() * images.length)]);
    } else {
      setFrontBgImg(images[Math.floor(Math.random() * images.length)]);
    }
  };

  useEffect(() => {
    const flipInterval = () => {
      handleFlip();
    };

    const interval = setInterval(
      flipInterval,
      Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000,
    );

    return () => clearInterval(interval);
  }, [isFlipped]);

  return (
    <ImageContainer>
      <ContainerInner isFlipped={isFlipped}>
        <Front style={{ backgroundImage: `url(${frontBgImg})` }} />
        <Back style={{ backgroundImage: `url(${backBgImg})` }}>
          {/* You can add an image inside the Back div if necessary */}
        </Back>
      </ContainerInner>
    </ImageContainer>
  );
}
