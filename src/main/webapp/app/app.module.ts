import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ErecetteSharedModule } from 'app/shared/shared.module';
import { ErecetteCoreModule } from 'app/core/core.module';
import { ErecetteAppRoutingModule } from './app-routing.module';
import { ErecetteHomeModule } from './home/home.module';
import { ErecetteEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ErecetteSharedModule,
    ErecetteCoreModule,
    ErecetteHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ErecetteEntityModule,
    ErecetteAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class ErecetteAppModule {}
