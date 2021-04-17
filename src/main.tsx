import renderer, { tsx } from '@dojo/framework/core/vdom';
import Registry from '@dojo/framework/core/Registry';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';

import Web3 from 'web3';

import routes from './routes';
import App from './App';

const registry = new Registry();
registerRouterInjector(routes, registry);

const web3 = new Web3('ws://localhost:8546');

console.log(web3);

const r = renderer(() => <App />);
r.mount({ registry });
