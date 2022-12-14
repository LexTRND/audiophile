import styled from "styled-components";

export const ConfirmationStyle = styled.div`
  position: absolute;
  background-color: rgba(211, 211, 211, 0.8);
  width: 100%;
  left: 0;
  height: 100vh;
  z-index: 100;
  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14286px;
    text-transform: uppercase;
    margin-block: 1.5rem;
  }
  .card {
    height: auto;
    width: 33%;
    background-color: ${({ theme }) => theme.colors.senary};
    z-index: 1000;
    position: absolute;
    top: 8rem;
    left: 0;
    right: 0;
    padding-block: 3rem;
    padding-inline: 3rem;
    margin-inline: auto;
    border-radius: 0.5rem;
    button {
      display: block;
      width: 100%;
      border: none;
      color: white;
      background-color: ${({ theme }) => theme.colors.primary};
      padding: 1.25rem 1.75rem;
      font-size: 16px;
      cursor: pointer;
      text-align: center;
      text-transform: uppercase;
      a {
        text-decoration: none;
        color: #f2f2f2;
      }
    }
    button:hover {
      background-color: #fbaf85;
    }
  }
  .receipt {
    /* max-width: 100%; */
    /* width: 33%; */
    display: flex;
    border-radius: 0.5rem;
    margin-bottom: 2.5rem;
    h1 {
      margin: 0;
      text-transform: uppercase;
    }
    h4 {
      margin: 0;
      text-transform: uppercase;
    }
    p {
      margin: 0;
      text-transform: uppercase;
    }
    .left {
      flex-basis: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 0.5rem 0 0 0.5rem;
      gap: 2rem;
      padding: 1.5rem;
      background-color: #f2f2f2;
      img {
        object-fit: contain;
        height: 25%;
        display: inline;
      }
      .borderLine {
        width: 100%;
        height: 1px;
        margin-bottom: 20px;
        background-color: black;
        opacity: 0.3;
      }
      .items {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .itemImg {
          flex-basis: 100%;
          img {
            object-fit: contain;
            border-radius: 0.5rem;
            width: 100%;
          }
        }
        .center {
          flex-basis: 100%;
          flex-grow: 1;
          h5 {
            margin: 0;
            white-space: nowrap;
            font-size: 1rem;
            text-transform: uppercase;
          }
        }
        .quantityInfo {
          flex-basis: 100%;
          flex-shrink: 1;
          p {
            flex-basis: 100%;
            text-align: right;
            text-transform: lowercase;
          }
        }
      }
      .others {
        text-align: center;
        margin: 0;
        text-transform: lowercase;
        cursor: pointer;
      }
    }
    .right {
      flex-basis: 100%;
      padding: 1.5rem;
      display: flex;
      border-radius: 0 0.5rem 0.5rem 0;

      justify-content: flex-end;
      flex-direction: column;
      color: white;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media only screen and (max-width: 810px) {
    h3 {
      font-size: 2rem;
    }
    .card {
      width: 66%;
    }
  }

  @media only screen and (max-width: 428px) {
    h3 {
      font-size: 1.5rem;
    }
    .card {
      width: 95%;
      padding-inline: 1rem;
      top: 4rem;
    }
    .receipt {
      flex-direction: column;
      .left {
        border-radius: 0.5rem 0.5rem 0 0;

        .borderLine {
          margin-bottom: 0;
        }
      }
      .right {
        border-radius: 0 0 0.5rem 0.5rem;
      }
    }
  }
`;
