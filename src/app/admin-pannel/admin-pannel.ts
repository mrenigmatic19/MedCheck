import { Component } from '@angular/core';
import { AdminConsole } from "../admin-console/admin-console";
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-admin-pannel',
  imports: [AdminConsole, Navbar],
  templateUrl: './admin-pannel.html',
  styleUrl: './admin-pannel.scss'
})
export class AdminPannel {

}
