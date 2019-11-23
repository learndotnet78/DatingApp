import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm',{static: false}) editForm: NgForm;
  user: User;

  constructor(private route: ActivatedRoute, private alertify :AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user']
    })
  }

  updateUser(){
    console.log(this.user);
    this.alertify.message("Updated");
    this.editForm.reset(this.user);
  }

}