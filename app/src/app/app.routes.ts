import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LobbyComponent } from './pages/lobby/lobby';
import { MemeGalleryComponent } from './pages/meme-gallery/meme-gallery';
import { RankingComponent } from './pages/ranking/ranking';
import { CreateSessionComponent } from './pages/create-session/create-session';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'create',
    component: CreateSessionComponent,
  },

  {
      path: 'lobby/:id',
      component: LobbyComponent,
  },

  {
      path: 'gallery/:id',
      component: MemeGalleryComponent,
  },

  {
      path: 'ranking/:id',
      component: RankingComponent,
  }

];
