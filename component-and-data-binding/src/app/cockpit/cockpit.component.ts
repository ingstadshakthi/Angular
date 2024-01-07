import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() onServerAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() onBlueprintAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  onAddServer(serverName: HTMLInputElement) {
    this.onServerAdded.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.onBlueprintAdded.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
