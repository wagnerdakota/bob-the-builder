import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BobcryingComponent } from './components/bobcrying/bobcrying.component'
import { WelcomeComponent } from './components/welcome/welcome.component'

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'divorced',
    component: BobcryingComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
