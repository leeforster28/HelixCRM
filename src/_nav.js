import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilHome, cilPin, cilSmile, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'CRM',
    to: '/CRM',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Dashboard',
        to: '/myDashboard',
      },
      {
        component: CNavItem,
        name: 'Quote List',
        to: '/QuoteList',
      },
      {
        component: CNavItem,
        name: 'Client List',
        to: '/ClientList',
      },
      {
        component: CNavItem,
        name: 'Invoice List',
        to: '/InvoiceList',
      },
      {
        component: CNavItem,
        name: 'Rejected List',
        to: '/RejectedList',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Site',
    to: '/Site',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ticket Portal',
        to: '/TicketPortal',
      },
      {
        component: CNavItem,
        name: 'Tickets',
        to: '/TicketsTable',
      },
      {
        component: CNavItem,
        name: 'Site Portal',
        to: '/SitePortal',
      },
      {
        component: CNavItem,
        name: 'Asset Register',
        to: '/AssetRegister',
      },
      {
        component: CNavItem,
        name: 'Asset Audit',
        to: '/AssetAudit',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'PM',
    to: '/ProjectManagement',
    icon: <CIcon icon={cilPin} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Projects Table',
        to: '/ProjectsTable',
      },
      {
        component: CNavItem,
        name: 'Project Tree',
        to: '/ProjectTree',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'ERP',
    to: '/ERP',
    icon: <CIcon icon={cilPin} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Products',
        to: '/ProductsTable',
      },
      {
        component: CNavItem,
        name: 'Categories',
        to: '/CategoriesTable',
      },
      {
        component: CNavItem,
        name: 'Purchase Orders',
        to: '/PurchaseOrders',
      },
      {
        component: CNavItem,
        name: 'Completed POs',
        to: '/CompletedPOs',
      },
      {
        component: CNavItem,
        name: 'Suppliers',
        to: '/Suppliers',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'HR',
    to: '/HR',
    icon: <CIcon icon={cilSmile} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/Users',
      },
      {
        component: CNavItem,
        name: 'Expenses',
        to: '/Expenses',
      },
    ],
  },
]

export default _nav
