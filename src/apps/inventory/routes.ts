import { IconBasket, IconBuildingWarehouse, IconGauge } from '@tabler/icons';
import Inventory from 'apps/inventory';
import Dashboard from 'apps/inventory/pages/Dashboard';
import { AppRoute } from 'routing/allRoutes';
import Items from './pages/Items';

const route: AppRoute = {
  title: 'Inventory',
  path: '/inventory',
  color: 'red',
  icon: IconBuildingWarehouse,
  element: Inventory,
  subRoutes: [
    {
      title: 'Dashboard',
      path: '/inventory',
      color: 'gray',
      icon: IconGauge,
      element: Dashboard,
    },
    {
      title: 'Items',
      path: '/inventory/items',
      color: 'gray',
      icon: IconBasket,
      element: Items,
    },
  ],
};

export default route;