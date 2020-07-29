import React from 'react'
import { render } from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Customer extends React.Component {
    render() {
        return(
        <TableRow>
                <TableCell> {this.props.id} </TableCell>
                <TableCell> <img src src ={this.props.image} alt= "profile"></img> </TableCell>
                <TableCell> {this.props.name} </TableCell>
                <TableCell> {this.props.type} </TableCell>
                <TableCell> {this.props.major} </TableCell>
                <TableCell> {this.props.address} </TableCell>
                

        </TableRow>
    )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src ={this.props.image} alt= "profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class Customerinfo extends React.Component{
render(){
    return(
        <div>
    
        <h2>{this.props.type}</h2>
        <p>{this.props.major}</p>
        <p>{this.props.address}</p>
       
       
        </div>
    )
}
}


export default Customer;