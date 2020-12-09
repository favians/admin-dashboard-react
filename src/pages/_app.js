import 'resources/styles/globals.css'
import { initializeStore } from 'reduxjs';
import { Provider } from 'react-redux';

const store = initializeStore();
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
