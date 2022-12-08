import React, { ReactNode } from "react";
import { Container, MainContent } from "./styles";

interface CardProps {
  isAnimated?: boolean;
  image: string | any;
  animatedImage?: string | any;
  imageAlt: string;
  title: string;
  description: string;
}

export function Card({
  isAnimated,
  image,
  animatedImage,
  imageAlt,
  title,
  description,
}: CardProps) {
  return (
    <Container>
      <MainContent>
        {isAnimated 
        ? 
          <>
            <div className="staticImage">
              <img src={image} alt={imageAlt} />
            </div>
            <div className="animatedImage">
              <img src={animatedImage} alt={imageAlt} />
            </div>
          </> 
        : 
          <>
          </>
        }
        <h4>{title}</h4>
        <p>{description}</p>
      </MainContent>
    </Container>
  );
}
