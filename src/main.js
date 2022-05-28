import { createApp } from 'vue'
import App from './App.vue'

// import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache  } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

import {
	Layout,
	Button,
	Spin,
	Result,
	Card,
	Divider,
	Col,
	Row,
	Drawer,
	Table,
	Form,
	InputNumber,
	Tag,
	Checkbox,
  } from 'ant-design-vue';

const httpLink = createHttpLink({
    uri: "http://localhost:3000/graphql",
})

const defaultOptions = {
	watchQuery: {
		fetchPolicy: 'no-cache',
	},
	query: {
		fetchPolicy: 'no-cache',
	}
}

const defaultClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    // defaultOptions: defaultOptions,
})

const apolloProvider = createApolloProvider({
    defaultClient: defaultClient,
})

const app = createApp(App)
app.config.productionTip = false;
app.use(Layout);
app.use(Button);
app.use(Spin);
app.use(Result);
app.use(Card);
app.use(Divider);
app.use(Col);
app.use(Row);
app.use(Drawer);
app.use(Table);
app.use(Form);
app.use(InputNumber);
app.use(Tag);
app.use(Checkbox);
app.use(apolloProvider).mount('#app')

// const app = createApp(
//     {
//       setup () {
//         provide(DefaultApolloClient, defaultClient)
//       },
//       render() {
//         return h(App)
//       }
//     }
//   ).mount('#app')

// app.use(apolloProvider).mount('#app')