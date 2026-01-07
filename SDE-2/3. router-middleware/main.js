class Router {
    constructor() {
      this.routes = {};
      this.middlewares = [];
    }
  
    // Register global middleware
    use(middleware) {
      this.middlewares.push(middleware);
    }
  
    // Register GET route
    get(path, handler) {
      this.routes[`GET ${path}`] = handler;
    }
  
    // Handle incoming request
    handle(req) {
      const res = {
        send: (msg) => console.log("Response:", msg)
      };
  
      const stack = [...this.middlewares];
      const routeHandler = this.routes[`${req.method} ${req.path}`];
  
      if (!routeHandler) {
        res.send("404 Not Found");
        return;
      }
  
      stack.push(routeHandler);
  
      let index = 0;
  
      const next = () => {
        const fn = stack[index++];
        if (fn) {
          fn(req, res, next);
        }
      };
  
      next();
    }
  }
  