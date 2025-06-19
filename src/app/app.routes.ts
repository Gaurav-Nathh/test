import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login-page/login-page.component').then(
        (c) => c.LoginPageComponent
      ),
  },
  {
    path: 'forget-password',
    loadComponent: () =>
      import('./pages/reset-password/reset-password.component').then(
        (c) => c.ResetPasswordComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./components/base-form/base-form.component').then(
        (c) => c.BaseFormComponent
      ),
  },
  {
    path: 'vendor',
    loadComponent: () =>
      import('./pages/user/user.component').then((c) => c.UserComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'item-mapping',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/item-mapping/item-mapping.component').then(
            (c) => c.ItemMappingComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'purchase-order',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './pages/purchase-order/po-dashboard/po-dashboard.component'
          ).then((c) => c.PoDashboardComponent),
        canActivate: [authGuard],
      },
      {
        path: 'invoice',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/invoice-dashboard/invoice-dashboard.component').then(
            (c) => c.InvoiceDashboardComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'update-password',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/update-password/update-password.component').then(
            (c) => c.UpdatePasswordComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'create-vendor',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './components/create-vendor-form/create-vendor-form.component'
          ).then((c) => c.CreateVendorFormComponent),
        canActivate: [authGuard],
      },
      {
        path: 'update-profile',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/update-profile/update-profile.component').then(
            (c) => c.UpdateProfileComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'page-under-construction',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/under-work/under-work.component').then(
            (c) => c.UnderWorkComponent
          ),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'customer',
    loadComponent: () =>
      import('./pages/user/user.component').then((c) => c.UserComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'update-profile',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/update-profile/update-profile.component').then(
            (c) => c.UpdateProfileComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'update-password',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/update-password/update-password.component').then(
            (c) => c.UpdatePasswordComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'invoice',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/invoice-dashboard/invoice-dashboard.component').then(
            (c) => c.InvoiceDashboardComponent
          ),
        canActivate: [authGuard],
      },

      {
        path: 'shopping-cart',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/shopping-cart/shopping-cart.component').then(
            (c) => c.ShoppingCartComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'purchase-order',
        canActivate: [authGuard],
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import(
                './pages/purchase-order/po-dashboard/po-dashboard.component'
              ).then((c) => c.PoDashboardComponent),
            canActivate: [authGuard],
          },
          {
            path: 'create',
            pathMatch: 'full',
            loadComponent: () =>
              import('./pages/purchase-order/po-form/po-form.component').then(
                (c) => c.PoFormComponent
              ),
            canActivate: [authGuard],
          },
        ],
      },
      {
        path: 'create',
        pathMatch: 'full',
        loadComponent: () =>
          import('./components/purchase-form/purchase-form.component').then(
            (c) => c.PurchaseFormComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'purchase-dashboard',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './pages/purchase-dashboard/purchase-dashboard.component'
          ).then((c) => c.PurchaseDashboardComponent),
        canActivate: [authGuard],
      },
      {
        path: 'vendor-dashboard',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/vendor-dashboard/vendor-dashboard.component').then(
            (c) => c.VendorDashboardComponent
          ),
      },
      {
        path: 'page-under-construction',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/under-work/under-work.component').then(
            (c) => c.UnderWorkComponent
          ),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'master',
    loadComponent: () =>
      import('./pages/user/user.component').then((c) => c.UserComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './pages/master/dashboard-master/dashboard-master.component'
          ).then((c) => c.DashboardMasterComponent),
        canActivate: [authGuard],
      },
      {
        path: 'sales',
        children: [
          {
            path: 'customers',
            canActivate: [authGuard],
            children: [
              {
                path: '',
                pathMatch: 'full',
                loadComponent: () =>
                  import(
                    './pages/master/sales/customers/dashbard-customer/dashbard-customer.component'
                  ).then((c) => c.DashbardCustomerComponent),
                canActivate: [authGuard],
              },
              {
                path: 'create',
                pathMatch: 'full',
                loadComponent: () =>
                  import(
                    './pages/master/sales/customers/create-customer/create-customer.component'
                  ).then((c) => c.CreateCustomerComponent),
              },
            ],
          },
          {
            path: 'sales-order',
            canActivate: [authGuard],
            children: [
              {
                path: '',
                pathMatch: 'full',
                loadComponent: () =>
                  import(
                    './pages/master/sales/sales-order/dashboard-sales-order/dashboard-sales-order.component'
                  ).then((c) => c.DashboardSalesOrderComponent),
              },
              {
                path: 'create',
                pathMatch: 'full',
                loadComponent: () =>
                  import(
                    './pages/master/sales/sales-order/form-sales-order/form-sales-order.component'
                  ).then((c) => c.FormSalesOrderComponent),
              },
            ],
          },
          // {
          //   path: 'vendors',
          //   children: [
          //     {
          //       path: '',
          //       pathMatch: 'full',
          //       loadComponent: () =>
          //         import(
          //           './pages/vendor-dashboard/vendor-dashboard.component'
          //         ).then((c) => c.VendorDashboardComponent),
          //       canActivate: [authGuard],
          //     },
          //     {
          //       path: 'create',
          //       pathMatch: 'full',
          //       loadComponent: () =>
          //         import(
          //           './components/create-vendor-form/create-vendor-form.component'
          //         ).then((c) => c.CreateVendorFormComponent),
          //       canActivate: [authGuard],
          //     },
          //   ],
          // },
        ],
      },
      {
        path: 'purchase',
        children: [
          {
            path: 'vendors',
            canActivate: [authGuard],
            children: [
              {
                path: '',
                pathMatch: 'full',
                loadComponent: () =>
                  import(
                    './pages/master/purchase/vendors/dashboard-vendors/dashboard-vendors.component'
                  ).then((c) => c.DashboardVendorsComponent),
              },
              {
                path: 'create',
                pathMatch: 'full',
                loadComponent: () =>
                  import(
                    './pages/master/purchase/vendors/create-vendors/create-vendors.component'
                  ).then((c) => c.CreateVendorsComponent),
              },
            ],
          },
          {
            path: 'purchase-order',
            canActivate: [authGuard],
            children: [
              {
                path: '',
                pathMatch: 'full',
                loadComponent: () =>
                  import(
                    './pages/master/purchase/purchase-order/dashboard-purchase-order/dashboard-purchase-order.component'
                  ).then((c) => c.DashboardPurchaseOrderComponent),
              },
              // {
              //   path: 'create',
              //   pathMatch: 'full',
              //   loadComponent: () =>
              //     import(
              //       './pages/master/purchase/purchase-order/create-purchase-order/create-purchase-order.component'
              //     ).then((c) => c.CreatePurchaseOrderComponent),
              // },
              {
                path: 'create',
                pathMatch: 'full',
                loadComponent: () =>
                  import(
                    './pages/master/purchase/purchase-order/form-purchase-order/form-purchase-order.component'
                  ).then((c) => c.FormPurchaseOrderComponent),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/no-page-exist/no-page-exist.component').then(
        (c) => c.NoPageExistComponent
      ),
  },
];
