import { Component, OnInit } from "@angular/core";
import { Widget } from "../types";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    today = new Date();
    widgets: Widget[] = [
        {
            iconName: "calendar_today",
            widgetHeader: this.days[this.today.getDay()],
            widgetDetail: `${
                this.months[this.today.getMonth()]
            } ${this.today.getDate()}`,
        },
        {
            iconName: "alarm",
            widgetHeader: "UTC +3",
            widgetDetail: `${this.today.getHours()}:${this.today.getMinutes()}`,
        },
        {
            iconName: "cloud",
            widgetHeader: "Raining",
            widgetDetail: "14\u00B0C",
        },
    ];
}
