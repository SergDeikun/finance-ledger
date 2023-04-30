import styled from 'styled-components';

export const Section = styled.section`
  padding: 72px 20px 50px 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 50px 32px 40px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 80px 28px 88px 28px;
  }
`;

export const PreTitle = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.blackFont};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[2]}px;
    line-height: 1.65;
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[5]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.blackFont};
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[7]}px;
    line-height: 1.35;
  }
`;

export const Text = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.blackFont};
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[1]}px;
    line-height: 1.39;
  }
`;

export const TeamList = styled.ul`
  margin-top: 63px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1);
    grid-column-gap: 18px;

    margin-top: 24px;
  }

  @media screen and (min-width: 1360px) {
    grid-column-gap: 21px;
    margin-top: 36px;
  }
`;

export const TeamItem = styled.li`
  position: relative;
  text-align: center;

  @media screen and (max-width: 767px) {
    &:not(:first-child) {
      margin-top: 30px;
    }
  }
`;

export const Picture = styled.picture`
  img {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover img {
    transform: scale(1.02);
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
    filter: brightness(0.6);
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Name = styled.h3`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.35;
  color: ${p => p.theme.colors.blackFont};
  margin-top: 16px;
`;

export const Position = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.blackFont};
  margin-top: 8px;
`;
