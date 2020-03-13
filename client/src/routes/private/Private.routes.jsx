import React, { lazy, Suspense } from 'react';
// * Switch and Route
import { Switch, Route } from 'react-router-dom';
// * Ant-Design
import { Icon } from 'antd';

function PrivtaeRoutes() {
  // * Components with lazy
  const HomeContainer = lazy(() =>
    import('../../containers/Home/views/Home.container')
  );
  const ArtGalleryContainer = lazy(() =>
    import('../../containers/ArtGallery/views/ArtGallery.container')
  );

  const UserProfileContainer = lazy(() =>
    import('../../containers/UserProfile/views/UserProfile.container')
  );

  const Error404 = lazy(() =>
    import('../../shared/components/Error404/Error404.component')
  );
  const LoginContainer = lazy(() =>
    import('../../containers/Login/Login.container')
  );

  const RegisterContainer = lazy(() =>
    import('../../containers/Register/Register.container')
  );

  const ArtGalleryDetails = lazy(() =>
    import(
      '../../containers/ArtGallery/views/components/ArtGalleryDetails.component'
    )
  );

  const About = lazy(() =>
    import(
      '../../shared/components/About/About.component'
    )
  );

  // * Loading Element
  const Loading = (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>Loading...</h1>
      <Icon type='loading' style={{ fontSize: '100px' }} />
    </div>
  );

  return (
    // * Return All the Private Components
    <Suspense fallback={Loading}>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/galeria' component={ArtGalleryContainer} />
        <Route exact path='/perfil/:user' component={UserProfileContainer} />
        <Route exact path='/details' component={ArtGalleryDetails} />
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/registro' component={RegisterContainer} />
        <Route exact path='/about' component={About} />
        <Route component={Error404} />
      </Switch>
    </Suspense>
  );
}

export default PrivtaeRoutes;
