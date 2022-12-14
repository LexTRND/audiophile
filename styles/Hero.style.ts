import { type } from "os";
import styled from "styled-components";

export const HeroStyle = styled.section`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-left: auto;
  margin-right: auto;
  .left {
    flex: 1 1 100%;
    text-transform: uppercase;
    color: $senary-color;
    padding-left: 3rem;
    p {
      color: ${({ theme }) => theme.colors.senary};
    }
    h1 {
      color: ${({ theme }) => theme.colors.senary};
    }
  }
  .right {
    flex: 100%;
    min-width: 0;
    img {
      object-fit: contain;
      max-width: 100%;
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 810px) {
    .left {
      background-image: url("headphones-hero.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      text-align: center;
      padding-block: 6rem;
      padding-inline: 3rem;
    }
    .right {
      display: none;
    }
  }
  @media only screen and (max-width: 428px) {
    .left {
      padding-top: 10rem;
      padding-inline: 1rem;
      h1 {
        font-size: 2.25rem;
        line-height: normal;
      }
    }
  }
`;
