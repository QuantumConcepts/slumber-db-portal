import {AppInstance} from "../App";
import {bindable} from "aurelia-framework";

@bindable({name: "size"})
@bindable({name: "headerText", defaultValue: "test"})
@bindable({name: "close"})
export class Panel {
}