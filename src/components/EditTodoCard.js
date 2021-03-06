import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Text, Input, Button, Container } from ".";
import { UPDATE_TODO } from "../apis";
import './EditTodoCard.css';

export const EditTodoCard = (props) => {
  const { refetch, id } = props;
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [updateTodo, { data, loading, error }] = useMutation(UPDATE_TODO);
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  }
  const onClick = async () => {
    await updateTodo({ variables: { id, title, description } });
    await refetch();
    props.onClose && props.onClose();
  }
  return (
    <Container className='EditTodoContainer'>
      <Text className='h6 EditLabel'>Edit Todo</Text>
      <Input className={'TopInput'} label='Title' value={title} onChange={onChangeTitle} />
      <Input className={'BottomInput'} label='Description' value={description} onChange={onChangeDescription} />
      <Button className='EditButton' title='Save' disabled={title === ''} onClick={onClick} />
    </Container>
  )
}
