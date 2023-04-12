import { fireEvent, render, screen, waitFor, act, renderHook } from '@testing-library/react';
import React from 'react';
import PrimaryButton from './PrimaryButton.jsx';


describe('PrimaryButton', () => {
    it('should create', () => {
        let component = render(
          <PrimaryButton/>
        );
        expect(component).toBeTruthy();
      });
  });