import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-join',
    standalone: true,
    templateUrl: './join.component.html',
    styleUrl: './join.component.scss',
    imports: [FooterComponent]
})
export class JoinComponent {

}
