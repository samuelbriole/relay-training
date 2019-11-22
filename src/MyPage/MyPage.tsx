import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { environment } from "../relay";
import { MyPageQuery } from "./__generated__/MyPageQuery.graphql";
import { TaskList } from "./TaskList";

export const MyPage = () => (
  <QueryRenderer<MyPageQuery>
    environment={environment}
    query={graphql`
      query MyPageQuery {
        user(id: "1") {
          name
          lists {
            id
            ...TaskList_list
          }
        }
      }
    `}
    variables={{}}
    render={({ props }) => {
      if (!props) return <div>loading</div>;
      if (!props.user) return <div>user not found !</div>;
      return (
        <div>
          Hello {props.user.name}. <span>Here are your task lists:</span>
          <br />
          {props.user.lists.map(list => (
            <TaskList key={list.id} list={list} />
          ))}
        </div>
      );
    }}
  />
);
