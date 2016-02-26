import {HttpClient} from "aurelia-http-client";

export class EntitySelection {
    constructor(app, connectionInfo, databaseInfo) {
        this.app = app;
        this.connectionInfo = connectionInfo;
        this.databaseInfo = databaseInfo;
        this.entities = [];
    }
    
    activate() {
        let http = new HttpClient();
        
        return http
            .get(`${this.connectionInfo.url}/sys/databases/${this.databaseInfo.name}/entities`)
            .then(response => {
                this.entities = response.content;
            }); 
    }
    
    close() {
        this.app.removePanel(this);
    }
}