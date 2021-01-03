"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Router {
    constructor(routerName, handler, router) {
        this.routerName = routerName;
        this.handler = handler;
        this.router = router;
    }
    setRouteWithLog(method, path, ...handlers) {
        if (method === 'GET') {
            this.router.get(path, ...handlers);
        }
        else if (method === 'POST') {
            this.router.post(path, ...handlers);
        }
        else if (method === 'PUT') {
            this.router.put(path, ...handlers);
        }
        else if (method === 'DELETE') {
            this.router.delete(path, ...handlers);
        }
        console.log(`\u001b[1;32m[Route Setted] -> \u001b[33m${this.routerName} \u001b[1;31m${method} -> ${path} \u001b[0m`);
    }
}
exports.default = Router;
//# sourceMappingURL=Router.js.map