import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private _employeeService: EmployeeService,
    private tostr: ToastrService) {
  }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key) {
      this._employeeService.updateEmpolyee(employeeForm.value);
      this.resetForm(employeeForm);
    } else {
      this._employeeService.insertEmployee(employeeForm.value);
      this.tostr.success('Submitted Succcessfully', 'Employee Register');
    }
  }

  // reset form
  resetForm(employeeForm?: NgForm) {
    if (employeeForm) {
      employeeForm.reset();
      this._employeeService.selectedEmployee = {
        $key: null,
        name: '',
        position: '',
        office: '',
        salary: 0,
      };
    }
  }

}
