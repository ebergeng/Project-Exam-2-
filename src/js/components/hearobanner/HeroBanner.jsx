import { useState, useEffect } from "react";
import styled from "styled-components";
import BannerImages from "./BannerImages";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-primary);
`;

const HeroBannerContainer = styled.div`
  display: grid;
  padding: 25px 0px;
  grid-template-columns: ${({ numColumns }) => `repeat(${numColumns}, 1fr)`};
  justify-content: center;
  align-items: baseline;
  align-content: center;
`;

const WaveEffectContainer = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [numElements, setNumElements] = useState(12); // Start med 12 elementer
  const [numColumns, setNumColumns] = useState(6); // Start med 6 kolonner per rad

  useEffect(() => {
    const handleResize = () => {
      // Juster antall elementer og kolonner basert på skjermstørrelsen
      const screenWidth = window.innerWidth;
      let newNumElements = 12;
      let newNumColumns = 6;

      switch (true) {
        case screenWidth < 600:
          newNumElements = 6;
          newNumColumns = 3;
          break;
        case screenWidth < 800:
          newNumElements = 8;
          newNumColumns = 4;
          break;
        case screenWidth < 1000:
          newNumElements = 10;
          newNumColumns = 5;
          break;
        case screenWidth < 1200:
          newNumElements = 12;
          newNumColumns = 6;
          break;
        case screenWidth < 1400:
          newNumElements = 16;
          newNumColumns = 8;
          break;
        case screenWidth > 1400:
          newNumElements = 18;
          newNumColumns = 9;
          break;
        default:
          // Ingen endringer hvis ingen av betingelsene er oppfylt
          break;
      }

      setNumElements(newNumElements);
      setNumColumns(newNumColumns);
    };

    // Lytt til vindusendringer
    window.addEventListener("resize", handleResize);

    // Initial oppsett
    handleResize();

    return () => {
      // Rydd opp ved avmontering av komponenten
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const flipInterval = () => {
      setIsFlipping(true);
    };

    // Start flippeffekten etter 10 sekunder
    const delay = setTimeout(flipInterval, 1000);

    // Rydd opp ved avmontering av komponenten
    return () => clearTimeout(delay);
  }, []);

  return (
    <Wrapper>
      <HeroBannerContainer numColumns={numColumns}>
        {[...Array(numElements)].map((_, index) => (
          <BannerImages
            key={index}
            shouldFlip={isFlipping && index % 2 === 0}
          />
        ))}
      </HeroBannerContainer>
    </Wrapper>
  );
};

export default WaveEffectContainer;
