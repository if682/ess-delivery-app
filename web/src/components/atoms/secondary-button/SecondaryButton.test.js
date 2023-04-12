import { fireEvent, render, screen, waitFor, act, renderHook } from '@testing-library/react';
import React from 'react';
import SecondaryButton from './SecondaryButton.js';


describe('SecondaryButton', () => {
    it('should create', () => {
        let component = render(
          <SecondaryButton/>
        );
        expect(component).toBeTruthy();
      });
  });