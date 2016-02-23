export class App {
    constructor() {
        this.version = "0.0.2-beta";
        this.copyrightYear = (new Date()).getFullYear();
    }
    
    configureRouter(config, router) {
        config.title = "slumberDb Portal";
        config.map([
            {
                route: ["connect"],
                name: "connect",
                moduleId: "./connect",
                nav: true,
                title: "connect to...",
                settings: {
                    icon: "server"
                }
            }
        ]);
        
        this.router = router;
    }
}