import React from 'react';
import { graphql, useFragment } from 'react-relay';
import { RowTbodyItems_ItemsRowFragment$key } from './__generated__/RowTbodyItems_ItemsRowFragment.graphql';

const itemsRowFragment = graphql`
  fragment RowTbodyItems_ItemsRowFragment on ItemType {
    id
    name
    sku
    cost
    markup
    price
    isService
    isActive
  }
`;

type Props = {
  fragmentRef: RowTbodyItems_ItemsRowFragment$key;
  idx: number;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

function RowTbodyItems({ fragmentRef, idx, ...props }: Props) {
  const item = useFragment<RowTbodyItems_ItemsRowFragment$key>(
    itemsRowFragment,
    fragmentRef
  );
  return (
    <tr
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      key={item.id}
    >
      <td>{idx}</td>
      <td>{item.name}</td>
      <td>{item.sku}</td>
      <td>C${item.cost}</td>
      <td>{item.markup}%</td>
      <td>C${item.price}</td>
      <td>{item.isService ? 'True' : 'False'}</td>
      <td>{item.isActive ? 'True' : 'False'}</td>
    </tr>
  );
}

export default RowTbodyItems;
