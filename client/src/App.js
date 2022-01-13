import './App.css';
import React, { Component } from 'react';
import Customer from './componets/Customer';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { withStyles } from '@mui/styles';
import { Paper } from '@mui/material';

const styles = {
  root: {
    width:'100%',
    spacing: {unit: 1},
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
}

const customers = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday':'9622441',
    'gender':'남자',
    'job':'대학생'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name': '고길동',
    'birthday':'9222441',
    'gender':'남자',
    'job':'프로그래머'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name': '저글링',
    'birthday':'8322441',
    'gender':'여자',
    'job':'섹시'
  }
]

class App extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
        </TableBody>
        </Table>
      </Paper>
    )
  }

}

export default withStyles(styles)(App);
