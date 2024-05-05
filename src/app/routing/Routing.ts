import { AppComponent } from '../app.component';
import { HomeViewComponent } from '../home-view/home-view.component';
import { SupplierComponent } from '../supplier/supplier.component';

export const MainRoutes = [
  {
    path: 'Home',
    component: HomeViewComponent,
  },
  {
    path: 'Customer',
    component: AppComponent,
  },
  {
    path: 'Supplier',
    component: SupplierComponent,
  },
  {
    path: '',
    component: HomeViewComponent,
  },
];
