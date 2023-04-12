import { fireEvent, render, screen, waitFor, act, renderHook } from '@testing-library/react';
import React from 'react';
import CopyLink from './CopyLink.js';


describe('CopyLink', () => {
    it('should create', () => {
        const url = window.location.href
        let component = render(
          <CopyLink text={url}/>
        );
        expect(component).toBeTruthy();
      });
  });