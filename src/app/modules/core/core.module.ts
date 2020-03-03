import { NgModule } from '@angular/core';
import { HeaderContainer } from './containers/header/header.container';
import { FooterContainer } from './containers/footer/footer.container';

@NgModule({
  declarations: [HeaderContainer, FooterContainer],
  exports: [HeaderContainer, FooterContainer]
})
export class CoreModule {}
