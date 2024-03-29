/**
 * @generated SignedSource<<fbf36e2940c714e685fff369eb150b6c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemCard_ItemCardDataFragment$data = {
  readonly currentStock: number;
  readonly id: string;
  readonly name: string;
  readonly price: number | null;
  readonly " $fragmentType": "ItemCard_ItemCardDataFragment";
};
export type ItemCard_ItemCardDataFragment$key = {
  readonly " $data"?: ItemCard_ItemCardDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemCard_ItemCardDataFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemCard_ItemCardDataFragment",
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
      "name": "price",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currentStock",
      "storageKey": null
    }
  ],
  "type": "ItemType",
  "abstractKey": null
};

(node as any).hash = "bc4b14b98a5959f35988c520e340abcf";

export default node;
