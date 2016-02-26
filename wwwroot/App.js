import {$} from "jquery";
import {Connections} from "panels/Connections";

export var AppInstance = null;

export class App {
    constructor() {
        AppInstance = this;
        
        this.version = "0.0.2-beta";
        this.panels = [
            new Connections(this)
        ];
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
    
    addPanel(panel) {
        this.panels.push(panel);
    }
    
    addSingularPanel(panel, replace) {
        var panelType = panel.constructor.name;
        
        for (var i = 0; i < this.panels.length; i++) {
            var existingPanel = this.panels[i];
            
            if (existingPanel.constructor.name === panelType) {
                if (!replace)
                    return;
                
                this.removePanel(existingPanel);
            }
        }
        
        this.addPanel(panel);
    }
    
    removePanel(panel) {
        let index = this.panels.indexOf(panel)
        
        if (index >= 0)
            this.panels.splice(index, 1);
    }
}