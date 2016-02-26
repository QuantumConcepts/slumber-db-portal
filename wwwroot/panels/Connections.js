import {AppInstance} from "../App";
import {ConnectionSettings} from "./ConnectionSettings";
import {DatabaseSelection} from "./DatabaseSelection";

export class Connections {
    constructor(app){
        this.app = app;
        this.connections = [];
    }
    
    newConnection() {
        this.app.addSingularPanel(new ConnectionSettings(this.app, (name, url) => this.addConnection(name, url)));
    }
    
    addConnection(name, url) {
        this.connections.push({
            name: name,
            url: url
        });
    }
    
    openConnection(conn) {
        this.app.addSingularPanel(new DatabaseSelection(this.app, conn), true);
    }
    
    removeConnection(conn) {
        var index = this.connections.indexOf(conn);
        
        if (index >= 0)
            this.connections.splice(index, 1);
    }
}