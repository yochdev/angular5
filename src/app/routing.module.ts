import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';
import { PostsComponent } from './posts/posts.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TemplateComponent } from './template/template.component';
import { PanelComponent } from './panel/panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'followers', component: GithubFollowersComponent},
  { path: 'followers/:username', component: ProfileFollowersComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'signupform', component: SignupFormComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'contactform', component: ContactFormComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'panel', component: PanelComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {}
