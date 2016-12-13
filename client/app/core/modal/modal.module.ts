import { NgModule } from "@angular/core"

import { ModalPlaceholderComponent } from "./modal-placeholder.component"
import { ModalService } from "./modal.service"

@NgModule({
  declarations: [
    ModalPlaceholderComponent
  ],
  exports: [
    ModalPlaceholderComponent
  ],
  providers: [
    ModalService
  ]
})

export class ModalModule {}

export class ModalContainer {
  
  destroy: Function
  
  closeModal(): void {
      this.destroy()
  }

}

export function Modal() {
  
  return function (target: any) {
    Object.assign(target.prototype,  ModalContainer.prototype)
  }
  
}