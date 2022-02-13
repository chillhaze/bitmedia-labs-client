import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

export const Wrapper = styled.div`
  margin-top: ${props => props.theme.spacing(14)};
  margin-bottom: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.palette.text.black};
`;

export const PaperStyled = styled(Paper)`
  display: flex;
  box-shadow: none;

  @media (max-width: 750px) {
    flex-direction: column;
  }

  /* position: relative; */
`;

export const SearchWrapper = styled.div`
  padding: 2px 4px;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
  max-width: 500px;
  display: flex;
  align-items: center;

  border: 1px solid ${props => props.theme.palette.text.grey};
  border-radius: 10px;
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
  min-width: 52px;
  min-height: 48px;
  margin-left: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.palette.primary.main};
  border-radius: 8px;
  border: 1px solid transparent;

  /* position: absolute;
  top: 0;
  right: -65px; */

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
    margin-left: 0;
    margin-top: ${props => props.theme.spacing(3)};
    position: relative;
  }
`;
