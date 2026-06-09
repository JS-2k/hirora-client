import { Routes } from '@angular/router';
import { HomePage } from './features/landing/pages/home/home';
import { LoginPage } from './features/auth/pages/login/login';
import { SignupPage } from './features/auth/pages/signup/signup';
import { CompanyDashboardPage } from './features/dashboard/pages/company-dashboard/company-dashboard';
import { NewJobPage } from './features/dashboard/pages/new-job/new-job';
import { JobMatchesPage } from './features/dashboard/pages/job-matches/job-matches';

export const routes: Routes = [
  { path: '', title: 'Hirora | AI Recruitment Agency', component: HomePage },
  { path: 'login', title: 'Login | Hirora', component: LoginPage },
  { path: 'signup', title: 'Sign up | Hirora', component: SignupPage },
  { path: 'company', title: 'Company Dashboard | Hirora', component: CompanyDashboardPage },
  { path: 'company/jobs/new', title: 'Post a Job | Hirora', component: NewJobPage },
  { path: 'company/jobs/:id', title: 'Job Matches | Hirora', component: JobMatchesPage },
  { path: '**', redirectTo: '' }
];
