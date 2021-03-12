import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { downgradeComponent } from '@angular/upgrade/static';
import { TestComponent } from './test.component';
import { UserInfoComponent } from './user-info/user-info.component';


declare var angular: any;

angular.module('test', [])
  .directive(
    'testComponent',
    downgradeComponent({ 
      component: TestComponent,
      inputs: ['testInput'],
      outputs: ['testOutputEvent'] })
)
.directive(
  'userInfoComponent',
  downgradeComponent({ 
    component: UserInfoComponent,
    inputs:['userName']
    })
);;

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestComponent,UserInfoComponent],
  exports: [TestComponent,UserInfoComponent],
})
export class TestModule { }