import { Injectable, ChangeDetectorRef } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class StatusbarService {
    public data: Subject<any[]> = new Subject();
    private cache: any[] = [];
    public setItem(item) {
        if (this.cache.findIndex((i) => i.id == item.id) != -1) {
            this.cache = this.cache.map((i) => {
                if (i.id == item.id) {
                    i = item;
                }
                return i;
            });
        } else {
            this.cache.push(item);
        }
        this.data.next(this.cache);
    }
}
