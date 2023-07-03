/**
 * This is an example of how to implement a custom PubSub class
**/

import { EventEmitter } from 'node:events';

import {Curator} from '@open-oracle-origami/origami-js-sdk';
import {CoinbaseMill} from "@open-oracle-origami/origami-js-mill-coinbase";
import {ConsoleMuseum} from "@open-oracle-origami/origami-js-museum-console";

// TODO: Implement IPubSub expliticly
class PubSubEventEmitter {
  constructor() {
    this.emitter = new EventEmitter()
  }
  publish(topic, data) {
    this.emitter.emit(topic, topic, data)
  }

  subscribe(topic, callback) {
    this.emitter.on(topic, callback)
  }
}


const curator = new Curator();
curator.emitter = new PubSubEventEmitter()

curator.addMill(CoinbaseMill, {pairs: ['BTC-USDT']})
curator.addMuseum(ConsoleMuseum, {id: 'console', sources: ['mill.coinbase']})


curator.start()
