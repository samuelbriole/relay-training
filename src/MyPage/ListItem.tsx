import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { ListItem_task } from "./__generated__/ListItem_task.graphql";
import React from "react";
import { TaskList } from "./TaskList";

export const ListItem = createFragmentContainer(
  ({ task }: { task: ListItem_task }) => <li>{task.text}</li>,
  {
    task: graphql`
      fragment ListItem_task on Task {
        text
        completed
      }
    `
  }
);
