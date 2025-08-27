import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { CourseContent } from '../course-content/course-content';
import { TestimonialCard } from '../testimonial-card/testimonial-card';
type Tab = 'overview'|'author'|'testimonials';

type CourseItem = {
  id: number;
  title: string;
  minutes: string;
  type?: 'video'|'doc';
  src?: string;           // optional: video URL
  completed?: boolean;
  active?: boolean;
};
type CourseSection = { title: string; minutes: string; items: CourseItem[]; };

type Testimonial = {
  rating: number; text: string; name: string; country: string;
  color: 'blue'|'orange'|'purple'|'green'; avatar?: string;
};
@Component({
  selector: 'app-course-player',
  imports: [CourseContent, TestimonialCard],
  templateUrl: './course-player.html',
  styleUrl: './course-player.scss'
})
export class CoursePlayer {
  
  tab = signal<Tab>('overview');
  setTab(t: Tab) { if (this.tab() !== t) this.tab.set(t); }
  isTab(t: Tab) { return this.tab() === t; }

  // VIDEO
  @ViewChild('videoRef', { static: true }) videoRef!: ElementRef<HTMLVideoElement>;
  isPlaying = false;
  currentSrc = 'assets/videos/intro.mp4'; // default; will swap when a lecture is selected

  togglePlay() {
    const v = this.videoRef.nativeElement;
    if (v.paused) { v.play(); this.isPlaying = true; }
    else { v.pause(); this.isPlaying = false; }
  }
  onPlay() { this.isPlaying = true; }
  onPause() { this.isPlaying = false; }

  // SIDEBAR DATA
  sections: CourseSection[] = [
    {
      title: 'Section 1: Introduction',
      minutes: '5 Lectures · 15 mins',
      items: [
        { id: 1, title: '1. Course Overview', minutes: '3min', type: 'video', src: 'assets/videos/intro.mp4', completed: true },
        { id: 2, title: '2. Google Analytics Overview', minutes: '3min', type: 'video', src: 'assets/videos/ga-overview.mp4', active: true },
        { id: 3, title: '3. Set Up a GA Demo Account', minutes: '3min', type: 'video', src: 'assets/videos/demo-setup.mp4' },
        { id: 4, title: '4. GA Dictionary - Top 50 Terms', minutes: '3min', type: 'doc' },
        { id: 5, title: '5. A Note on GA4 Setup', minutes: '3min', type: 'doc' },
      ]
    },
    { title: 'Section 2: How To Analysis Reports & Increase Traffic And Sales', minutes: '3min', items: [{ id: 6, title: 'Lecture', minutes: '3min', type: 'video', src: 'assets/videos/section2.mp4' }] },
    { title: 'Section 3: More Google Analytics Tips And Tricks', minutes: '3min', items: [{ id: 7, title: 'Lecture', minutes: '3min', type: 'video', src: 'assets/videos/section3.mp4' }] },
    { title: 'Section 4: Conclusion', minutes: '3min', items: [{ id: 8, title: 'Lecture', minutes: '3min', type: 'video', src: 'assets/videos/conclusion.mp4' }] },
  ];

  // HANDLE LECTURE SELECTION FROM SIDEBAR
  // NOTE: If your CourseContent emits a different event name/payload, just adjust the signature here.
  onSelectLecture(e: { sectionIndex: number; itemIndex: number; item: CourseItem }) {
    // toggle active state
    this.sections.forEach((s, si) => s.items.forEach((it, ii) => it.active = (si===e.sectionIndex && ii===e.itemIndex)));
    // swap video if the item has a source
    if (e.item.src) {
      const v = this.videoRef.nativeElement;
      this.currentSrc = e.item.src;
      v.pause();
      v.currentTime = 0;
      // auto-play selected video
      v.play().then(() => this.isPlaying = true).catch(() => this.isPlaying = false);
    }
  }

  // TESTIMONIALS
  items: Testimonial[] = [
    { rating:4.8, text:'The Google Data Analytics course was a pivotal moment in my career...', name:'Wade Warren', country:'Learning for U.S', color:'blue' },
    { rating:4.7, text:'I was stuck in a marketing role with no room for growth...', name:'Jacob Jones', country:'Learning for India', color:'orange' },
    { rating:4.5, text:'I needed to become more data-driven. The hands-on projects were invaluable...', name:'Bessie Cooper', country:'Learning for U.K', color:'purple' },
    { rating:4.5, text:'Pivoted into a more analytical role and landed a Financial Analyst position...', name:'Ronald Richards', country:'Learning for India', color:'green' },
  ];
}