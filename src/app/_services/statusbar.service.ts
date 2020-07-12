import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class StatusbarService {
    public data: Subject<any[]> = new Subject();
    private cache: any[] = [];
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public setItem(item: any): void {
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
