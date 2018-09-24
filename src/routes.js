import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import AddCategoryPage from './containers/AddCategoryPage';
import CategoryPage from './containers/CategoryPage';
import ProductPage from './containers/ProductPage';
import Dashboard from './containers/DashboardPage';
import AddProductPage from './containers/AddProductPage';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="addcategory" component={AddCategoryPage}/>
      <Route path="category" component={CategoryPage}/>
      <Route path="product" component={ProductPage}/>
      <Route path="addproduct" component={AddProductPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
