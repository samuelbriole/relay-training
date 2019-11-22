import { mockServer, MockList } from "graphql-tools";
import { loader } from "graphql.macro";
import casual from "casual-browserify";

export const server = mockServer(loader("../schema.graphql"), {
  User: () => ({
    name: casual.name
  }),
  List: () => ({
    name: () => `list - ${casual.word}`
  }),
  Task: () => ({
    text: casual.words(5)
  })
});
