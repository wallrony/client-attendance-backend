import Model from '../core/models/Model';
import Service from '../services/Service';
import Handler from '../handlers/Handler';

abstract class Router<T extends Handler<Service, Model>> {
  protected readonly handler: T;

  constructor(handler: T) {
    this.handler = handler;
  }
}

export default Router;
