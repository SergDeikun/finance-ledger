import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  margin-top: 24px;
  padding: 16px 32px;
  border-radius: 5px;
  border: none;
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.39;
  color: ${p => p.theme.colors.whiteFont};
  background-color: ${p => p.theme.colors.green};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #2ebf4f;
  }
`;
