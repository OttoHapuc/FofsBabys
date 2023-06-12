import styled from "styled-components";

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 300px;
  height: 380px;
  padding-bottom: 8px;
  margin: 8px;
  box-shadow: 0px 2px 5px 0.5px #6e6b6b;
  border-radius: 16px;

  img {
    width: 300px;
    height: 300px;
    border-radius: 16px;
    box-shadow: 0px 2px 1px 0px #6e6b6b;
    margin-bottom: 8px;
  }
  span,
  p {
    margin-left: 14px;
  }
  p {
    width: 90%;
    font-size: 1em;
    color: gray;
  }
  span {
    width: 90%;
    font-size: 1.6em;
  }

  @media only screen and (max-device-width: 768px) {
    width: 150px;
  height: 200px;
  padding-bottom: 2px;
  margin: 4px;
  border-radius: 8px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    margin-bottom: 4px;
  }
  span,
  p {
    margin-left: 7px;
  }
  p {
    width: 90%;
    font-size: .8em;
    color: gray;
  }
  span {
    width: 90%;
    font-size: 1em;
  }
}
`;
