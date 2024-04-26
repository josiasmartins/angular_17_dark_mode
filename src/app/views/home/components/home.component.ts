import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbActiveModal, NgbAlert, NgbDatepickerModule, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p>Hello, {{ name }}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="test()">Close</button>
    </div>

   
  `,
})
export class NgbdModalContent {

  isActiveModal = true;

  // @Output() isActiveModalEmit = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  @Input() name!: string;

  public test() {
    this.activeModal.close('Close click');
    this.isActiveModal = false;
  }

}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgbDatepickerModule,
    NgbAlert,
    // ModalModule.forRoot()
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public isActiveModal = true;

  constructor(private router: Router, private modalService: NgbModal) {
    this.open()
  }

  public name = "";
  public modalRef!: NgbModalRef;

  open(): void {
    const modalRef = this.modalService.open(NgbdModalContent);
    
    this.modalRef = modalRef;
    modalRef.componentInstance.name = 'World';
    this.name = modalRef.componentInstance.name;
  }

  navigateToLogin(): void {
    this.router.navigate(['login']);
  }

  

  @HostListener("document:click", ['$event']) 
  test(event: any) {

    console.log(this.modalRef.componentInstance, "ibag co")

    const modal = (document.body.querySelector(".d-block modal .fade .show"))?.classList.contains("modal-open");
    console.log(event.target, )
    if (modal && this.modalRef.componentInstance.isActiveModal === true) {
      // document.swrite("Removido o template")
      // document.body.classList.remove("modal-open");

      this.modalRef.close();

      console.log(document.body.classList);
      const inputEl = document.querySelector(".input_test") as HTMLInputElement;

      console.log(inputEl, "ibag input")

      inputEl.value = "";
    }
  }

}
