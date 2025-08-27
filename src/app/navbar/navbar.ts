import { Component, HostListener } from '@angular/core';
import { NavCard } from "../nav-card/nav-card";

@Component({
  selector: 'app-navbar',
  imports: [NavCard],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  showNoti = false;
  showProfile = false;

  toggleNoti(){ this.showNoti = !this.showNoti; this.showProfile = false; }
  toggleProfile(){ this.showProfile = !this.showProfile; this.showNoti = false; }

  @HostListener('document:click', ['$event'])
  closeAll(e: MouseEvent){
    const target = e.target as HTMLElement;
    if (!target.closest('.nav-right')) { this.showNoti = this.showProfile = false; }
  }
}
