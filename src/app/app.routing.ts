import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routerArr: Routes = [
    {
        path: '',
        redirectTo: '/profile',
        pathMatch: 'full'
    }, {
        path: 'profile',
        component: ProfileComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: 'projects',
        component: ProjectsComponent
    }, {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routerArr)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}