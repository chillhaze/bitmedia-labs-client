import styled from '@emotion/styled';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';

export const Wrapper = styled.div`
  margin-top: ${props => props.theme.spacing(15)};
  margin-bottom: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.palette.text.black};
`;

export const PaperStyled = styled(Paper)`
  padding: 2px 4px;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
  max-width: 500px;
  display: flex;
  align-items: center;
  box-shadow: none;
  border: 1px solid ${props => props.theme.palette.text.grey};
  border-radius: 10px;
`;

export const SearchWrapper = styled.div`
  display: flex;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const InputBaseStyled = styled(InputBase)`
  min-width: 230px;
  font-style: italic;

  @media (max-width: 750px) {
    min-width: 130px;
  }
`;

export const SelectStyled = styled(Select)`
  min-width: 155px;
  padding-left: ${props => props.theme.spacing(3)};
  /* padding-right: ${props => props.theme.spacing(12)}; */
  cursor: pointer;

  & svg {
    fill: ${props => props.theme.palette.primary.main};
  }

  @media (max-width: 750px) {
    min-width: 90px;
  }
`;

export const ButtonStyled = styled(Button)`
  margin-left: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.palette.primary.main};
  border-radius: 8px;

  & svg {
    fill: ${props => props.theme.palette.text.white};
  }

  &:hover {
    background-color: ${props => props.theme.palette.text.white};
    border: 1px solid ${props => props.theme.palette.primary.main};

    & svg {
      fill: ${props => props.theme.palette.primary.main};
    }
  }

  @media (max-width: 750px) {
    margin-top: 10px;
  }
`;
