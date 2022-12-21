import { ListRenderComponent } from './components/list-render/list-render.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRender2Component } from "./components/list-render2/list-render2.component";
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/eventos/events.component';
import { EmmiterComponent } from './components/emmiter/emmiter.component';
import { CardPaiComponent } from './components/card-pai/card-pai.component';
import { CardFilhoComponent } from './components/card-filho/card-filho.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'home' },
  { path: 'home', component: FirstComponentComponent },
  { path: 'parent-data', component: ParentDataComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'if-render', component: IfRenderComponent },
  { path: 'events', component: EventsComponent },
  { path: 'emmiter', component: EmmiterComponent },
  { path: 'list2', component: ListRender2Component },
  { path: 'card-pai', component: CardPaiComponent },
  { path: 'card-filho', component: CardFilhoComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'data-bindind', component: TwoWayBindingComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'list2/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
