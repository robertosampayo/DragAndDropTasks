import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import type { AppProps } from 'next/app';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/globals.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/api/graphql/',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </DndProvider>
  );
}

export default MyApp;
