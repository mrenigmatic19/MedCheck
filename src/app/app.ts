import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signin } from "./signin/signin";
import { Signup } from "./signup/signup";
import { Dashboard } from "./dashboard/dashboard";
import { Search } from "./search/search";
import { CourseCard } from "./course-card/course-card";
import { CourseLanding } from "./course-landing/course-landing";
import { CoursePlayer } from "./course-player/course-player";
import { AdminPannel } from "./admin-pannel/admin-pannel";
import { AdminSettings } from "./admin-settings/admin-settings";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Signin, Signup, Dashboard, Search, CourseCard, CourseLanding, CoursePlayer, AdminPannel, AdminSettings],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularUdemy');
  
}
