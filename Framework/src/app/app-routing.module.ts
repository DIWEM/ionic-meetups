import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'new-task', loadChildren: './new-task/new-task.module#NewTaskPageModule' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'tab1', loadChildren: './tabs/tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tabs/tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tabs/tab3/tab3.module#Tab3PageModule' },
  { path: 'tab4', loadChildren: './tabs/tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5', loadChildren: './tabs/tab5/tab5.module#Tab5PageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'meetup', loadChildren: './meetup/meetup.module#MeetupPageModule' },
  // { path: 'new-task-modal', loadChildren: './new-task-modal/new-task-modal.module#NewTaskModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
