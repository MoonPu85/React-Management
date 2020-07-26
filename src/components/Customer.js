import React from 'react'
import { render } from 'react';

class Customer extends React.Component {
    render() {
        return(
        <div>
        <CustomerProfile 
        id = {this.props.id}
         image ={this.props.image} 
         name = {this.props.name}/>
        <Customerinfo type={this.props.type} 
        major = {this.props.major}
         address ={this.props.address}
          hostname = {this.props.hostname}
           num ={this.props.nume} 
           major2= {this.props.major2} 
           creiculum ={this.props.creiculum} />
        </div>
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
        <p>{this.props.hostname}</p>
        <p>{this.props.num}</p>
        <p>{this.props.major2}</p>
        <p>{this.props.creiculum}</p>
        </div>
    )
}
}


export default Customer;