import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailResolverService } from './email-resolver.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { InboxGuard } from './inbox.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canDeactivate: [InboxGuard],
    children: [
      { path: 'notfound', component: NotFoundComponent },
      { path: '', component: PlaceholderComponent },
      {
        path: ':emailId',
        component: EmailShowComponent,
        resolve: {
          email: EmailResolverService,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
