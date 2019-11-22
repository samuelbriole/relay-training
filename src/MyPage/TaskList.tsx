import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { TaskList_list } from "./__generated__/TaskList_list.graphql";
import { ListItem } from "./ListItem";

export const TaskList = createFragmentContainer(
  ({ list }: { list: TaskList_list }) => (
    <div>
      {list.name}
      <ul>
        {list.tasks.map(task => (
          <ListItem task={task} key={task.id} />
        ))}
      </ul>
    </div>
  ),
  {
    list: graphql`
      fragment TaskList_list on List {
        name
        tasks {
          id
          text
          ...ListItem_task
        }
      }
    `
  }
);
