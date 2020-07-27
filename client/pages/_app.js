import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  let userData = {};
  try {
    const { data } = await client.get('/api/users/currentuser');
    userData = data;
  } catch (e) {
    console.log("error is >>>", e);
  }
  

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, userData.currentUser);
  }

  return {
    pageProps,
    ...userData
  };
};

export default AppComponent;
