import { Card } from "./Cards";
import {
  Container,
  MainContent,
  HeaderContainer,
  CardsContainer,
} from "./styles";

export function About() {
  return (
    <Container>
      <MainContent>
        <HeaderContainer>
          <span>FEATURES</span>
          <h2>What I Do</h2>
        </HeaderContainer>
        <CardsContainer>
          <Card
            isAnimated={true}
            animatedImage="/images/icons/handshake.gif"
            image="/images/icons/handshake.png"
            imageAlt="HandShake Image"
            title="Business Stratagy"
            description="I throw myself down among the tall grass by the stream as Ilie close to the earth."
          />
          <Card
            isAnimated={true}
            animatedImage="/images/icons/responsive.gif"
            image="/images/icons/responsive.png"
            imageAlt="Responsive Image"
            title="App Development"
            description=" We’ll handle everything from to app development process until it is time to make your project live. "
          />
          <Card
            isAnimated={true}
            animatedImage="/images/icons/browser.gif"
            image="/images/icons/browser.png"
            imageAlt="Browser Image"
            title="SEO Optimisation"
            description="Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!"
          />
          <Card
            isAnimated={true}
            animatedImage="/images/icons/handshake.gif"
            image="/images/icons/handshake.png"
            imageAlt="HandShake Image"
            title="Business Stratagy"
            description="I throw myself down among the tall grass by the stream as Ilie close to the earth."
          />
          <Card
            isAnimated={true}
            animatedImage="/images/icons/responsive.gif"
            image="/images/icons/responsive.png"
            imageAlt="Responsive Image"
            title="App Development"
            description=" We’ll handle everything from to app development process until it is time to make your project live. "
          />
          <Card
            isAnimated={true}
            animatedImage="/images/icons/browser.gif"
            image="/images/icons/browser.png"
            imageAlt="Browser Image"
            title="SEO Optimisation"
            description="Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!"
          />
        </CardsContainer>
      </MainContent>
    </Container>
  );
}
