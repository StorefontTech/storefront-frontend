/**
 * @generated SignedSource<<5f6de0b1da4c29f67d3b65b76e766d17>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RowTbodyItems_ItemsRowFragment$data = {
  readonly cost: number;
  readonly id: string;
  readonly isActive: boolean;
  readonly isService: boolean;
  readonly markup: number;
  readonly name: string;
  readonly price: number | null;
  readonly sku: string;
  readonly " $fragmentType": "RowTbodyItems_ItemsRowFragment";
};
export type RowTbodyItems_ItemsRowFragment$key = {
  readonly " $data"?: RowTbodyItems_ItemsRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RowTbodyItems_ItemsRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RowTbodyItems_ItemsRowFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sku",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cost",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "markup",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "price",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isService",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isActive",
      "storageKey": null
    }
  ],
  "type": "ItemType",
  "abstractKey": null
};

(node as any).hash = "6c6976cea4c6a2c1a5be89988ef61495";

export default node;
