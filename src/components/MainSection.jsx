import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const SectionBackground = styled.div`
  /* background-color: #cdf961; */
  background-color: #131313;
  min-height: 600px;
  display: flex;
  align-items: center;
`;
const Section = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;
`;
const Title = styled.h2`
  color: white;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-size: calc(1rem + 3vw);
  margin: 0px;
`;
const Content = styled.div`
display: flex;
min-height: 40px;
gap: 30px;

img{
  max-height: 200px;
  border-radius: 20px;
}

`
export class MainSection extends Component {
  render() {
    return (
      <>
        <SectionBackground>
          <Container>
            <Section>
              <Title>Proyects</Title>
              <Content>
                <img
                  src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  alt=''
                />
                <img
                  src='https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  alt=''
                />
                <img
                  src='https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  alt=''
                />
              </Content>
            </Section>
          </Container>
        </SectionBackground>
      </>
    );
  }
}

export default MainSection;
