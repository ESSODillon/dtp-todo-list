import React from "react";
import { List, Grid, Label, Button } from "semantic-ui-react";

const Task = ({ name, color, editTask, deleteTask, index }) => {
  function editCurrentTask() {
    editTask(index);
  }

  return (
    <React.Fragment>
      <List.Item>
        <Grid columns="2">
          <Grid.Column>
            <Label color={color} size="large">
              {name}
            </Label>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button onClick={deleteTask} icon="trash" color="red"></Button>
            <Button
              onClick={editCurrentTask}
              icon="pencil"
              color="orange"
            ></Button>
          </Grid.Column>
        </Grid>
      </List.Item>
    </React.Fragment>
  );
};

export default Task;
