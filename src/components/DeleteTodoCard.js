import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Text, Input, Button, Container } from ".";
import { REMOVE_TODOS } from "../apis";
import './DeleteTodoCard.css';

export const DeleteTodoCard = (props) => {
  const { refetch, id } = props;
  const [removeTodo, { data, loading, error }] = useMutation(REMOVE_TODOS);
  const onClickYes = async () => {
    await removeTodo({ variables: { id } });
    await refetch();
    props.onClose && props.onClose();
  }
  const onClickNo = () => {
    props.onClose && props.onClose();
  }
  return (
    <Container className='DeleteTodoContainer'>
      <Text className='h6 DeleteLabel'>Delete Todo</Text>
      <Text className='body2, DeleteLabel'>Are you sure you want to delete this todo?</Text>
      <div className="ButtonsContainer">
        <Button className='NoButton' title='No' onClick={onClickNo} />
        <Button className='YesButton' title='Yes' onClick={onClickYes} />
      </div>
    </Container>
  )
}
