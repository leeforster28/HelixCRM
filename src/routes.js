import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const myDashboard = React.lazy(() => import('./views/CRM/myDashboard'))
const QuoteList = React.lazy(() => import('./views/CRM/QuoteList'))
const ClientList = React.lazy(() => import('./views/CRM/ClientList'))
const InvoiceList = React.lazy(() => import('./views/CRM/InvoiceList'))
const RejectedList = React.lazy(() => import('./views/CRM/RejectedList'))
const TicketPortal = React.lazy(() => import('./views/Site/TicketPortal'))
const TicketsTable = React.lazy(() => import('./views/Site/TicketsTable'))
const SitePortal = React.lazy(() => import('./views/Site/SitePortal'))
const AssetAudit = React.lazy(() => import('./views/Site/AssetAudit'))
const AssetRegister = React.lazy(() => import('./views/Site/AssetRegister'))
const ProjectsTable = React.lazy(() => import('./views/ProjectManagement/ProjectsTable'))
const ProjectTree = React.lazy(() => import('./views/ProjectManagement/ProjectTree'))
const CategoriesTable = React.lazy(() => import('./views/ERP/CategoriesTable'))
const CompletedPOs = React.lazy(() => import('./views/ERP/CompletedPOs'))
const ProductsTable = React.lazy(() => import('./views/ERP/ProductsTable'))
const PurchaseOrders = React.lazy(() => import('./views/ERP/PurchaseOrders'))
const Suppliers = React.lazy(() => import('./views/ERP/Suppliers'))
const Users = React.lazy(() => import('./views/HR/Users'))
const Expenses = React.lazy(() => import('./views/HR/Expenses'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/myDashboard', name: 'myDashboard', element: myDashboard },
  { path: '/QuoteList', name: 'QuoteList', element: QuoteList },
  { path: '/ClientList', name: 'ClientList', element: ClientList },
  { path: '/InvoiceList', name: 'InvoiceList', element: InvoiceList },
  { path: '/RejectedList', name: 'RejectedList', element: RejectedList },
  { path: '/TicketsTable', name: 'TicketsTable', element: TicketsTable },
  { path: '/TicketPortal', name: 'TicketPortal', element: TicketPortal },
  { path: '/SitePortal', name: 'SitePortal', element: SitePortal },
  { path: '/AssetAudit', name: 'AssetAudit', element: AssetAudit },
  { path: '/AssetRegister', name: 'AssetRegister', element: AssetRegister },
  { path: '/ProjectsTable', name: 'ProjectsTable', element: ProjectsTable },
  { path: '/ProjectTree', name: 'ProjectTree', element: ProjectTree },
  { path: '/CategoriesTable', name: 'CategoriesTable', element: CategoriesTable },
  { path: '/CompletedPOs', name: 'CompletedPOs', element: CompletedPOs },
  { path: '/ProductsTable', name: 'ProductsTable', element: ProductsTable },
  { path: '/PurchaseOrders', name: 'PurchaseOrders', element: PurchaseOrders },
  { path: '/Suppliers', name: 'Suppliers', element: Suppliers },
  { path: '/Users', name: 'Users', element: Users },
  { path: '/Expenses', name: 'Expenses', element: Expenses },
]

export default routes
