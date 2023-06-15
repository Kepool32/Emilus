import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
  EditOutlined

} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Main',
  icon: DashboardOutlined ,
  breadcrumb: false,
  submenu: [
      {
    key: 'home',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Dashboard',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
    },
    {
      key: 'scheduler',
      path: `${APP_PREFIX_PATH}/scheduler`,
      title: 'Scheduler',
      icon: EditOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'catalog',
      path: `${APP_PREFIX_PATH}/catalog/products`,
      title: 'Catalog',
      icon: ShoppingCartOutlined ,
      breadcrumb: false,
      submenu: [
        {
          key: 'products',
          path: `${APP_PREFIX_PATH}/catalog/products`,
          title: 'Products',
          icon: "" ,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'сategories',
          path: `${APP_PREFIX_PATH}/catalog/сategories`,
          title: 'Categories',
          icon: "" ,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'сollections',
          path: `${APP_PREFIX_PATH}/catalog/сollections`,
          title: 'Collections',
          icon: "" ,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'сombo',
          path: `${APP_PREFIX_PATH}/catalog/сombo`,
          title: 'Combo',
          icon: "" ,
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/orders`,
      title: 'Orders',
      icon: ShoppingOutlined ,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/clients`,
      title: 'Clients',
      icon: UserOutlined ,
      breadcrumb: false,
      submenu: [
        {
          key: 'list',
          path: `${APP_PREFIX_PATH}/clients/list`,
          title: 'List of clients',
          icon: "" ,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'group',
          path: `${APP_PREFIX_PATH}/clients/group`,
          title: 'Group of clients',
          icon: "" ,
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'baners',
      path: `${APP_PREFIX_PATH}/baners`,
      title: 'Baners',
      icon:PictureOutlined ,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'gift',
      path: `${APP_PREFIX_PATH}/gifts`,
      title: 'Promocode',
      icon:GiftOutlined  ,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'Offlinepoints',
      path: `${APP_PREFIX_PATH}/Offlinepoints`,
      title: 'Offline points',
      icon:ShopOutlined ,
      breadcrumb: false,
      submenu: [
        {
          key: 'adress',
          path: `${APP_PREFIX_PATH}/Offlinepoints/adress`,
          title: 'Adress',
          icon: "" ,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'geozone',
          path: `${APP_PREFIX_PATH}/Catalog/geozone`,
          title: 'Geozone',
          icon: "" ,
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'staff',
      path: `${APP_PREFIX_PATH}/staff`,
      title: 'Staff',
      icon:UsergroupAddOutlined  ,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mail',
      path: `${APP_PREFIX_PATH}/mail`,
      title: 'mailing',
      icon: MailOutlined  ,
      breadcrumb: false,
      submenu: []
    },
  ]
}]
const SystemsNavTree=[{
  key: 'systems',
  path: `${APP_PREFIX_PATH}/systems`,
  title: 'System',
  icon: '' ,
  breadcrumb: false,
  submenu: [
    {
      key: 'setting',
      path: `${APP_PREFIX_PATH}/setting`,
      title: 'Setting',
      icon:  SettingOutlined  ,
      breadcrumb: false,
      submenu: []

    },
    {
      key: 'mobapplication',
      path: `${APP_PREFIX_PATH}/mobapplication`,
      title: 'Mobale application',
      icon:  MobileOutlined  ,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/logs`,
      title: 'Logs',
      icon:  FileTextOutlined ,
      breadcrumb: false,
      submenu: []
    }

  ]





}]
const navigationConfig = [
  ...dashBoardNavTree,
  ...SystemsNavTree

]

export default navigationConfig;
