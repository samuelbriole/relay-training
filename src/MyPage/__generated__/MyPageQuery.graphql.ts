/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MyPageQueryVariables = {};
export type MyPageQueryResponse = {
    readonly user: {
        readonly name: string;
        readonly lists: ReadonlyArray<{
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"TaskList_list">;
        }>;
    } | null;
};
export type MyPageQuery = {
    readonly response: MyPageQueryResponse;
    readonly variables: MyPageQueryVariables;
};



/*
query MyPageQuery {
  user(id: "1") {
    name
    lists {
      id
      ...TaskList_list
    }
    id
  }
}

fragment ListItem_task on Task {
  text
  completed
}

fragment TaskList_list on List {
  name
  tasks {
    id
    text
    ...ListItem_task
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "1"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MyPageQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": "user(id:\"1\")",
        "args": (v0/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lists",
            "storageKey": null,
            "args": null,
            "concreteType": "List",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "TaskList_list",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MyPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": "user(id:\"1\")",
        "args": (v0/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lists",
            "storageKey": null,
            "args": null,
            "concreteType": "List",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v1/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "tasks",
                "storageKey": null,
                "args": null,
                "concreteType": "Task",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "text",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "completed",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MyPageQuery",
    "id": null,
    "text": "query MyPageQuery {\n  user(id: \"1\") {\n    name\n    lists {\n      id\n      ...TaskList_list\n    }\n    id\n  }\n}\n\nfragment ListItem_task on Task {\n  text\n  completed\n}\n\nfragment TaskList_list on List {\n  name\n  tasks {\n    id\n    text\n    ...ListItem_task\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '19114a958302ba26a91b5f20f8a2aa80';
export default node;
