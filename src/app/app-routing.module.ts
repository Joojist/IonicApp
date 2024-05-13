import { GalleryComponent } from './gallery/gallery.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './map/maps.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Journal',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  { path: 'travel-map', component: MapsComponent },
  {
    path: 'preferences',
    loadChildren: () =>
      import('./preferences/preferences.module').then(
        (m) => m.PreferencesPageModule,
      ),
  },
  { path: 'stats', component: StatisticsComponent },
  {
    path: 'bucket-list',
    component: BucketListComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
