import React from 'react';
import './App.css';
import Person from './Person'

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    people {
      id
      name
      address
    }
  }
  `;


function App() {
  const { loading, error, data } = useQuery(FEED_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="">
      {data.people.map((person) => <Person
        key={"key" + person.id}
        name={person.name}
        address={person.address}
        id={person.id} />
      )}
    </div>
  );
}
export default App;
