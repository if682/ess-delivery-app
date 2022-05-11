import { Component, OnInit } from '@angular/core';

import { Status } from './status';
import { StatusService } from './status.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  constructor(private statusService: StatusService) { }


  status: Status = new Status();

  statusList: Status[] = [];

  ngOnInit(): void {
    this.statusService.getStatusList() //TODO test
      .then(results => this.statusList = results)
      .catch(erro => alert(erro));
  }

  addSubmit(order: NgForm): void {
    this.status.update(<Status> order.value);
    this.statusService.addStatus(this.status)
      .then(result => {
        if (result) {
          this.statusList.push(result);
        }
      })
      .catch(error => alert(error));
  }

  removeSubmit(order: NgForm): void {
    this.status.update(<Status> order.value);
    this.statusService.removeStatus(this.status)
      .then(result => {
        if (result) {
          this.removeStatus(result);
        }
      })
      .catch(error => alert(error));
  }

  updateStatus(order: Status): void {
    this.statusList = this.statusList.map(statusTest => (statusTest.id == order.id ? statusTest = order : statusTest));
  }

  removeStatus(order: Status): void {
    this.statusList = this.statusList.filter(statusTest => (statusTest.id != order.id));
  }

  cloneStatus(order: Status): void {
    this.status = new Status();
    this.status.update(order);
  }

  findStatus(order: Status[], order2: Status): number{
    return order.findIndex(testStatus => (testStatus.cnpj == order2.cnpj
                                         && testStatus.cpf == order2.cpf
                                         && testStatus.id == order2.id))
  }

  updateSubmit(order: NgForm): void {
    this.status.update(<Status> order.value);
    this.statusService.updateStatusList(this.statusList[this.findStatus(this.statusList,this.status)])
      .then(result => {
        if (result) {
          this.updateStatus(<Status>result);
        }

      })
      .catch(error => alert(error));
  }

  show(): void {
    this.statusService.getStatusList()
      .then(result => {
        if (result) {

          //TODO show something for the user
        }
      })
  }

  Reset(): void {
    this.cloneStatus;
    this.status.state = 0;
    this.statusService.updateStatusList(this.status)
      .then(result => {
        if (result) {
          this.removeStatus(<Status>result);
        }
      })
      .catch(error => alert(error));
  }



}
