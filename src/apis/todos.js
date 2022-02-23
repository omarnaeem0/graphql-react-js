import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query getTodos{
    todos{
      id,
      title,
      description,
      createTimestamp,
      updateTimestamp
    }
  }
`;

export const GET_TODO = gql`
  query getTodo($id: String!) {
    todo(id: $id){
      id,
      title,
      description,
      createTimestamp,
      updateTimestamp
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($title: String!, $description: String!) {
    addTodo(title: $title, description: $description) {
      id,
      title,
      description
      createTimestamp
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: String!, $title: String!, $description: String!) {
    updateTodo(id: $id, title: $title, description: $description) {
      id,
      title,
      description
      createTimestamp
    }
  }
`;

export const REMOVE_TODOS = gql`
  mutation removeTodo($id: String!) {
    removeTodo(id: $id) {
      id,
      title,
      description
      createTimestamp
    }
  }
`;
