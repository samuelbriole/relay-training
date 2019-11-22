/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TaskList_list = {
    readonly name: string;
    readonly tasks: ReadonlyArray<{
        readonly id: string;
        readonly text: string | null;
        readonly " $fragmentRefs": FragmentRefs<"ListItem_task">;
    }>;
    readonly " $refType": "TaskList_list";
};
export type TaskList_list$data = TaskList_list;
export type TaskList_list$key = {
    readonly " $data"?: TaskList_list$data;
    readonly " $fragmentRefs": FragmentRefs<"TaskList_list">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "TaskList_list",
  "type": "List",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "tasks",
      "storageKey": null,
      "args": null,
      "concreteType": "Task",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "text",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ListItem_task",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = 'a47bc2c313ea1a773b5688cb4682b66b';
export default node;
