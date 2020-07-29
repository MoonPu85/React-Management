import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper'
import Customer from './components/Customer';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({

  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
     overflowX : "auto"
    
  },
  table : {
    minWidth : 1080
  }
})


const customers = [{
  'id' : 1,
  'image' : 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.yes24.com%2Fgoods%2Fdetail%2F4667898&psig=AOvVaw32ztTVQe4TEE2qzefex4-F&ust=1595842691629000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj1j7jP6uoCFQAAAAAdAAAAABAJ',
  'name' : '예원음악학원',
    'type' :'학교교과교습학원',
    'major' : '예능(대)',
    'address' : '인천광역시 남동구 구월남로 274 (구월동)',
    'hostname' : '이순선',
    'num'  : '032-466-1454',

},
{
  'id' : 2,
  'image' : 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.yes24.com%2Fgoods%2Fdetail%2F4667898&psig=AOvVaw32ztTVQe4TEE2qzefex4-F&ust=1595842691629000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj1j7jP6uoCFQAAAAAdAAAAABAJ',
  'name' : '예원음악학원',
    'type' :'학교교과교습학원',
    'major' : '예능(대)',
    'address' : '인천광역시 남동구 구월남로 274 (구월동)',
    'hostname' : '이순선',
    'num'  : '032-466-1454',
  

  },
  {
    'id' : 3,
    'image' : 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.yes24.com%2Fgoods%2Fdetail%2F4667898&psig=AOvVaw32ztTVQe4TEE2qzefex4-F&ust=1595842691629000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj1j7jP6uoCFQAAAAAdAAAAABAJ',
    'name' : '예원음악학원',
      'type' :'학교교과교습학원',
      'major' : '예능(대)',
      'address' : '인천광역시 남동구 구월남로 274 (구월동)',
      'hostname' : '이순선',
      'num'  : '032-466-1454'
  
  }
]

class App extends Component  {
  render() {
  const {classes} = this.props;
  return (
  <Paper className ={classes.root}>
    <Table className = {classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>학원명</TableCell>
          <TableCell>형태</TableCell>
          <TableCell>분야</TableCell>
          <TableCell>주소</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {customers.map(c=> {
   return ( 
   <Customer  
     key ={c.id} 
     id = {c.id} 
     name = {c.name}
     type ={c.type}
     major = {c.major}
      address={c.address}
   /> 
   );
  }
  )  
}
</TableBody> 
 </Table>
</Paper>
  );
   }
  }
  
  

export default withStyles(styles)(App);