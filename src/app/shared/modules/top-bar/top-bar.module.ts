import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar.component';
import { RouterLinkWithHref } from '@angular/router';

@NgModule({
      declarations: [TopBarComponent],
      imports: [CommonModule, RouterLinkWithHref],
      exports: [TopBarComponent],
})
export class TopBarModule {}
