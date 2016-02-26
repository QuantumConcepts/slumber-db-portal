import {AppInstance} from "../App";
import {DatabaseSelection} from "./DatabaseSelection";

export class ConnectionSettings {
    constructor(app, callback) {
        this.app = app;
        this.name = "test";
        this.url = "http://localhost:8080";
        this.callback = callback;
    }
    
    connect() {
        this.callback(this.name, this.url);
        this.close();
    }
    
    close() {
        this.app.removePanel(this);
    }
}