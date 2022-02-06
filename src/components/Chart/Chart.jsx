import Container from 'components/Container/Container';
import React from 'react';
import Table from '@mui/material/Table';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Wrapper,
  TableHeadStyled,
  TableRowStyled,
  TableBodyStyled,
} from './Chart.styled';
import { rows } from '../../constants/transactions';

export default function Chart() {
  return (
    <Wrapper>
      <Container>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHeadStyled>
              <TableRowStyled>
                <TableCell>Block number</TableCell>
                <TableCell align="right">Transaction ID</TableCell>
                <TableCell align="right">Sender address</TableCell>
                <TableCell align="right">Recipient's address</TableCell>
                <TableCell align="right">Block confirmations</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Value</TableCell>
                <TableCell align="right">Transaction Fee</TableCell>
              </TableRowStyled>
            </TableHeadStyled>
            <TableBodyStyled>
              {rows &&
                rows.map(
                  ({
                    number,
                    hash,
                    parentHash,
                    nonce,
                    confirmation,
                    date,
                    miner,
                    timestamp,
                  }) => (
                    <TableRow
                      key={timestamp}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell scope="row">{number}</TableCell>
                      <TableCell align="right">{hash}</TableCell>
                      <TableCell align="right">{parentHash}</TableCell>
                      <TableCell align="right">{nonce}</TableCell>
                      <TableCell align="right">{confirmation}</TableCell>
                      <TableCell align="right">{date}</TableCell>
                      <TableCell align="right">{miner}</TableCell>
                      <TableCell align="right">{timestamp}</TableCell>
                    </TableRow>
                  ),
                )}
            </TableBodyStyled>
          </Table>
        </TableContainer>
      </Container>
    </Wrapper>
  );
}
