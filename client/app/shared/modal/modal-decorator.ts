import { ModalContainer } from "./modal-container.model"

export function Modal() {
  
  return function (target: any) {
    Object.assign(target.prototype,  ModalContainer.prototype)
  }
  
}