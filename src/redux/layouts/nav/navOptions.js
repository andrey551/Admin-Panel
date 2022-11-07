import React from 'react';
import SvgColor from '../../../components/svg-color';
const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;
export const DASHBOARD_OPTION = {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  }
export const USER_OPTION = {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  }
export const PRODUCT_OPTION =   {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  }
export const BLOG_OPTION = {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  }
export const LOGIN_OPTION = {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  }
export const FNF = {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  }