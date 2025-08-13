import { ChangeDetectionStrategy, Component, effect, input } from "@angular/core";

@Component({
    selector: 'app-search',
    template: `
        {{ appConfig().title }}
        {{ appConfig().version }}
        
    `,
})
export class Search {
    appConfig = input<any>()
}