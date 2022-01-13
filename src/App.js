import './App.css';
import React, { Component } from 'react';
import Customer from './componets/Customer';

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
    return (
      <div>
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
      </div>
    )
  }

}

export default App;
