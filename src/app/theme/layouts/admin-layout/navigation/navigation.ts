export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'products',
    title: 'Productos',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'products',
        title: 'Productos',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/default',
        icon: 'products',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'category',
    title: 'Category',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'category',
        title: 'Categorias',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'category',
        breadcrumbs: false
      }
    ]
  },



];
