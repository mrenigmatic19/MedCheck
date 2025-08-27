import { Component, signal } from '@angular/core';
import { TestimonialCard } from "../testimonial-card/testimonial-card";
import { CourseContent } from "../course-content/course-content";
import { RelatedCourseCard } from "../related-course-card/related-course-card";
import { Overview } from "../overview/overview";
import { AuthorDetail } from "../author-detail/author-detail";
import { DecimalPipe } from '@angular/common';


type Testimonial = {
  rating: number; text: string; name: string; country: string;
  color: 'blue'|'orange'|'purple'|'green'; avatar?: string;
};

type CourseItem = { title:string; minutes:string; type?:'video'|'doc' };
type CourseSection = { title:string; minutes:string; items:CourseItem[] };
type Related = { title:string; hours:string; updated:string; rating?:number; reviews?:number; badge?:string };

type Tab = 'overview' | 'content' | 'author' | 'testimonials';

@Component({
  selector: 'app-course-landing',
  imports: [TestimonialCard, CourseContent, RelatedCourseCard, Overview, AuthorDetail,DecimalPipe],
  templateUrl: './course-landing.html',
  styleUrl: './course-landing.scss'
})
export class CourseLanding {
 title   = 'Google Data Analytics Course-1';
  subtitle = 'Become a Prompt Engineering Expert. Master prompt engineering patterns, techniques, and approaches to effectively leverage Generative AI';
  creator = 'Stephane Maarek | AWS Certified Cloud Practitioner, Solutions Architect, Developer';
  stats = { level:'Beginner Level', rating:4.8, reviews:1278, duration:'05 Weeks', schedule:'Learn at your own pace', enrolled:45908 };

 tab = signal<Tab>('overview');

  setTab(t: Tab) {
    if (this.tab() !== t) this.tab.set(t);
  }

  isTab(t: Tab) {
    return this.tab() === t;
  }
  // testimonials
  items: Testimonial[] = [
    { rating:4.8, text:'The Google Data Analytics course was a pivotal moment in my career...', name:'Wade Warren', country:'Learning for U.S', color:'blue' },
    { rating:4.7, text:'I was stuck in a marketing role with no room for growth...', name:'Jacob Jones', country:'Learning for India', color:'orange' },
    { rating:4.5, text:'I needed to become more data-driven. The hands-on projects were invaluable...', name:'Bessie Cooper', country:'Learning for U.K', color:'purple' },
    { rating:4.5, text:'Pivoted into a more analytical role and landed a Financial Analyst position...', name:'Ronald Richards', country:'Learning for India', color:'green' },
  ];

  // course content
  sections: CourseSection[] = [
    { title:'Introduction', minutes:'5 Lectures · 15 mins', items:[
      { title:'Course Overview', minutes:'03:00 min', type:'video' },
      { title:'Google Analytics Overview', minutes:'03:00 min', type:'video' },
      { title:'How to Set Up a Google Analytics Demo Account', minutes:'03:00 min', type:'video' },
      { title:'Google Analytics Dictionary - Top 50 Terms', minutes:'03:00 min', type:'doc' },
      { title:'A Note on Google Analytics 4 Setup', minutes:'03:00 min', type:'doc' },
    ]},
    { title:'How To Setup Google Analytics Like A Pro', minutes:'5 Lectures · 15 mins', items:[
      { title:'Property & Data Streams', minutes:'03:00 min', type:'video' },
      { title:'Events & Conversions', minutes:'03:00 min', type:'video' },
      { title:'Audiences', minutes:'03:00 min', type:'video' },
      { title:'DebugView', minutes:'03:00 min', type:'video' },
      { title:'Linking Products', minutes:'03:00 min', type:'video' },
    ]},
    // add remaining sections as needed...
  ];

  // related courses
  courses: Related[] = [
    { title:'Artificial Intelligence Professional Certificate', hours:'24 Hours', updated:'2/2024', rating:4.8, reviews:63838, badge:'Highest Rated' },
    { title:'Machine Learning A-Z: AI, Python & R', hours:'24 Hours', updated:'1/2024', rating:4.6, reviews:53843, badge:'Highest Rated' },
    { title:'The Data Science Course: Complete Data Science Bootcamp', hours:'24 Hours', updated:'12/2023', rating:4.5, reviews:35959, badge:'Bestseller' },
    { title:'Python for Data Science and Machine Learning Bootcamp', hours:'45.5 Hours', updated:'11/2023', rating:4.2, reviews:27659 },
    { title:'Tableau for Beginners: Get Certified in Data Visualization', hours:'18 Hours', updated:'10/2023', rating:4.0, reviews:25959 },
  ];
}