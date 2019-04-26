import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { USERS } from "../mock-users";
import { Homework } from "../homework";
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  users = USERS;

  selectedUser: User;

  constructor(private ref: ChangeDetectorRef) {
    setTimeout(() => {
      this.ref.detectChanges();
    }, 1000);
  }

  ngOnInit() { }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
