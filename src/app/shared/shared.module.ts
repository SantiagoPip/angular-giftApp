import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyIamgeComponent } from './lazy-iamge/lazy-iamge.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyIamgeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    LazyIamgeComponent
  ]
})
export class SharedModule { }
