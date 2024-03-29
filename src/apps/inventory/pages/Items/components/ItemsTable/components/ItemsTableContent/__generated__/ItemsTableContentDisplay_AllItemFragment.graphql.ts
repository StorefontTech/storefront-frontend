/**
 * @generated SignedSource<<4518dfc6fb0e8f7e2c7f4b84f3c23ea1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemsTableContentDisplay_AllItemFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly barcode: string;
      readonly id: string;
      readonly name: string;
      readonly sku: string;
      readonly " $fragmentSpreads": FragmentRefs<"RowTbodyItems_ItemsRowFragment">;
    };
  }>;
  readonly " $fragmentType": "ItemsTableContentDisplay_AllItemFragment";
};
export type ItemsTableContentDisplay_AllItemFragment$key = {
  readonly " $data"?: ItemsTableContentDisplay_AllItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemsTableContentDisplay_AllItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemsTableContentDisplay_AllItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemTypeEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemType",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
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
              "name": "barcode",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "RowTbodyItems_ItemsRowFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ItemTypeConnection",
  "abstractKey": null
};

(node as any).hash = "2548ea8c96936aa5169c7517dd444467";

export default node;
