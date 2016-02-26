import {HttpClient} from "aurelia-http-client";
import {EntitySelection} from "./EntitySelection";

export class DatabaseSelection {
    constructor(app, connectionInfo) {
        this.app = app;
        this.connectionInfo = connectionInfo;
        this.databases = [];
    }
    
    activate() {
        let http = new HttpClient();
        
        return http
            .get(`${this.connectionInfo.url}/sys/databases`)
            .then(response => {
                this.databases = response.content;
            }); 
    }
    
    openDatabase(dbInfo) {
        this.app.addPanel(new EntitySelection(this.app, this.connectionInfo, dbInfo));
    }
    
    close() {
        this.app.removePanel(this);
    }
}