import { GET_TODOS } from './apis';
import { useQuery } from '@apollo/client';
import { ApolloWrapper } from './components/ApolloWrapper';
import { AddTodoCard, Button, Container, Input, ListView, Text } from './components';
import { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const { loading, error, data, refetch } = useQuery(GET_TODOS);
  console.log('==============', data)
  if (loading) {
    return <div>loading</div>
  }
  if (error) {
    return <div>Something went wrong</div>
  }
  return (
    <div className="App">
      <AddTodoCard refetch={refetch} />
      <Container className='TodoListContainer' internalClassName='TodoListInternalContainer'>
        <ListView items={data.todos} refetch={refetch} />
      </Container>
    </div>
  );
}

export default ApolloWrapper(App);
