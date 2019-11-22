/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ListItem_task = {
    readonly text: string | null;
    readonly completed: boolean | null;
    readonly " $refType": "ListItem_task";
};
export type ListItem_task$data = ListItem_task;
export type ListItem_task$key = {
    readonly " $data"?: ListItem_task$data;
    readonly " $fragmentRefs": FragmentRefs<"ListItem_task">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ListItem_task",
  "type": "Task",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
};
(node as any).hash = 'fac6c8541519a938eda33205abca76a9';
export default node;
