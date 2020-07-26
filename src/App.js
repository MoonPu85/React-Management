import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' : 1,
  'image' : 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.yes24.com%2Fgoods%2Fdetail%2F4667898&psig=AOvVaw32ztTVQe4TEE2qzefex4-F&ust=1595842691629000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj1j7jP6uoCFQAAAAAdAAAAABAJ',
  'name' : '예원음악학원',
    'type' :'학교교과교습학원',
    'major' : '예능(대)',
    'address' : '인천광역시 남동구 구월남로 274 (구월동)',
    'hostname' : '이순선',
    'num'  : '032-466-1454',
    'major2' : '예능(중)',
    'creiculum' : '음악'
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
    'major2' : '예능(중)',
    'creiculum' : '음악'

  },
  {
    'id' : 3,
    'image' : 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.yes24.com%2Fgoods%2Fdetail%2F4667898&psig=AOvVaw32ztTVQe4TEE2qzefex4-F&ust=1595842691629000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj1j7jP6uoCFQAAAAAdAAAAABAJ',
    'name' : '예원음악학원',
      'type' :'학교교과교습학원',
      'major' : '예능(대)',
      'address' : '인천광역시 남동구 구월남로 274 (구월동)',
      'hostname' : '이순선',
      'num'  : '032-466-1454',
      'major2' : '예능(중)',
      'creiculum' : '음악'
  }
]

function App() {
  return (
    <div>
   <Customer
   id = {customers[0].id}
   image = {customers[0].image}
   name = {customers[0].name}
   type = {customers[0].type}
   major = {customers[0].major}
   address = {customers[0].address}
   hostname = {customers[0].hostname}
   num = {customers[0].num}
   major2 = {customers[0].major2}
   creiculum = {customers[0].creiculum}
   /> 
   <Customer
   id = {customers[1].id}
   image = {customers[1].image}
   name = {customers[1].name}
   type = {customers[1].type}
   major = {customers[1].major}
   address = {customers[1].address}
   hostname = {customers[1].hostname}
   num = {customers[1].num}
   major2 = {customers[1].major2}
   creiculum = {customers[1].creiculum}
   />
   <Customer
   id = {customers[2].id}
   image = {customers[2].image}
   name = {customers[2].name}
   type = {customers[2].type}
   major = {customers[2].major}
   address = {customers[2].address}
   hostname = {customers[2].hostname}
   num = {customers[2].num}
   major2 = {customers[2].major2}
   creiculum = {customers[2].creiculum}
   />
   </div>
  );
}

export default App;
