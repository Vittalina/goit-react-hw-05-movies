import styled from '@emotion/styled';

export const MovieDetailsStyled = styled.div`
  display: flex;
  gap: 10px;
  & > div {
    max-width: 400px;
  }
`;
export const MovieDetailsImage = styled.img`
  width: 400px;
  height: 650px;
`;
export const MovieDetailsTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;
export const MovieDetailsHeadline = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;
export const MovieDetailsInfo = styled.p`
  font-size: 20px;
  font-style: italic;
`;
