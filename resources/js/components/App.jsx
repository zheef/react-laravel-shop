import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LiNavLink from '@components/LiNavLink';
import { paths, toRoute } from '@/routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const routeComponents = paths.map(({ path, component }) => (
    <Route path={path} component={component} exact key={path} />
  ));

  return (
    <Router>
      <header>
        <div className='container'>
          <h1>Shop</h1>
        </div>
      </header>
      <main>
        <section>
          <div className='container my-5'>
            <div className='row'>
              <div className='col-sm-3'>
                <ul className='list-group'>
                  <LiNavLink to={toRoute('products')} label='Products' />
                  <LiNavLink to={toRoute('cart')} label='Cart' />
                </ul>
              </div>
              <div className='col-sm-9'>
                <Switch>{routeComponents}</Switch>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className='container text-center'>(c) 2021</div>
      </footer>
    </Router>
  );
}

export default App;
