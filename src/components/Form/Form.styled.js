import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const Title = styled.h2`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[5]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.5;
  color: ${p => p.theme.colors.blackFont};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[7]}px;
    line-height: 1.35;
  }
`;

export const FormBox = styled.form`
  margin-top: 21px;
  /* text-align: center; */
`;

export const FieldWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Field = styled(TextField)`
  label {
    font-family: ${p => p.theme.font.body};
    font-size: ${p => p.theme.fontSize[0]}px;
    font-weight: ${p => p.theme.fontWeight.regular};
    font-style: normal;
    line-height: 1.44;
    color: #808080;

    @media screen and (min-width: 768px) {
      font-size: ${p => p.theme.fontSize[1]}px;
    }
  }
  input {
    padding: 16px 8px;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    background-color: ${p => p.theme.colors.whiteFont};
    color: #808080;
  }

  p {
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button`
  margin-top: 8px;
  padding: 16px 56px;
  border-radius: 5px;
  border: none;
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.39;
  color: ${p => p.theme.colors.whiteFont};
  background-color: ${p => p.theme.colors.green};

  &:hover {
    background-color: #2ebf4f;
  }
`;
