import { AppPage } from './app.po';
import {RouterTestingModule} from '@angular/router/testing';
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to prime-ui-angular!');
  });
});
