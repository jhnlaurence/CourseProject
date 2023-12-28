import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  @Output('selected_tab') isSelected = new EventEmitter<string>;

  onSelect(selected: string){
    this.isSelected.emit(selected);
  }
}
