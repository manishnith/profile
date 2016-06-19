/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SocialShareComponent } from './social-share.component';

describe('Component: SocialShare', () => {
  it('should create an instance', () => {
    let component = new SocialShareComponent();
    expect(component).toBeTruthy();
  });
});
