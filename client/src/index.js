import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ThemeProvider} from '@material-ui/styles'
import { theme } from './thema/index'
import { Drawer, MuiThemeProvider, getMuiTheme } from '@material-ui/core';
const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:8081/graphql' }),
    cache: new InMemoryCache(),
    connectToDevTools: true

  })

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
