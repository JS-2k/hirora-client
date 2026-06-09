import { Component } from '@angular/core';
import { LucideArrowRight } from '@lucide/angular';

type DashboardStat = {
  label: string;
  value: string;
};

type JobRow = {
  title: string;
  meta: string;
  stack: string;
};

type InterviewRow = {
  candidate: string;
  role: string;
  status: string;
};

@Component({
  selector: 'app-company-dashboard-page',
  imports: [LucideArrowRight],
  templateUrl: './company-dashboard.html',
  styleUrl: './company-dashboard.css'
})
export class CompanyDashboardPage {
  protected readonly stats: DashboardStat[] = [
    { label: 'Active jobs', value: '1' },
    { label: 'Total candidates scored', value: '-' },
    { label: 'Interviews pending', value: '0' },
    { label: 'Interviews completed', value: '1' }
  ];

  protected readonly jobs: JobRow[] = [
    {
      title: '.NET Full Stack Developer',
      meta: 'Remote · 2-5 yrs · 5 openings',
      stack: 'ASP.NET Core · C# · Angular'
    }
  ];

  protected readonly interviews: InterviewRow[] = [
    {
      candidate: 'JS',
      role: '.NET Full Stack Developer',
      status: 'Completed'
    }
  ];
}
