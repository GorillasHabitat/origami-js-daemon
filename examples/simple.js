/**
 * This is an example of the most barebones implementation of a Curator
 **/

import {Curator} from '@open-oracle-origami/origami-js-sdk';
import {CoinbaseMill} from "@open-oracle-origami/origami-js-mill-coinbase";
import {ConsoleMuseum} from "@open-oracle-origami/origami-js-museum-console";


const curator = new Curator();
curator.addMill(CoinbaseMill, {pairs: ['BTC-USDT']})
curator.addMuseum(ConsoleMuseum, {id: 'console', sources: ['mill.coinbase']})


curator.start()
