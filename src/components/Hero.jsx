import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Section = styled.div`
  min-height: 700px;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: calc(1.9rem + 4vw);
    color: white;
  }
  h2 {
    font-size: calc(1.2rem + 1vw);
    color: white;
    span {
      border-bottom: solid 5px #a390ff;
    }
  }
`;

const SectionBackground = styled.div`
  background-color: #151515;
`;

export class Hero extends Component {
  render() {
    return (
      <>
        <SectionBackground>
          <Container>
            <Section>
              <h1>pablo.</h1>
              <h2>
                I'm Pablo Bárcena a <span>frontend</span> developer
              </h2>
            </Section>
          </Container>
        </SectionBackground>
      </>
    );
  }
}
export default Hero;