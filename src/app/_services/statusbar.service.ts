import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

type StatusbarItem = {
    name: string,
    icon: string,
    id: string,
    dropup?: {
        title: string,
        content: string,
        actions?: {
            text: string,
            type: string,
            service: string,
            action: string,
        }[],
    },
}

@Injectable({
    providedIn: "root",
})
export class StatusbarService {
    public data: Subject<any[]> = new Subject();
    private cache: StatusbarItem[] = [];
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public setItem(item: StatusbarItem): void {
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
