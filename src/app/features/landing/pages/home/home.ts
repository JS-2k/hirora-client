import { Component } from '@angular/core';
import { LucideArrowRight } from '@lucide/angular';

type InterviewStep = {
  number: string;
  label: string;
  active?: boolean;
};

@Component({
  selector: 'app-home-page',
  imports: [LucideArrowRight],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomePage {
  readonly interviewSteps: InterviewStep[] = [
    { number: '01', label: 'Aptitude' },
    { number: '02', label: 'F2F AI' },
    { number: '03', label: 'Coding' },
    { number: '04', label: 'Offer', active: true }
  ];
}
