import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInForm from '../components/SignInForm';
import {Formik} from "formik";

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      // render the SignInContainer component, fill the text inputs and press the submit button
      const { getByPlaceholderText, getByTestId} = render(
        <Formik initialValues={{username: "", password: ""}} onSubmit={onSubmit}>
            {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      ); 
      fireEvent.changeText(getByPlaceholderText('username'), 'diego');
      fireEvent.changeText(getByPlaceholderText('password'), '123456');
      fireEvent.press(getByTestId("submitSignIn"));
      await waitFor(() => {
        expect(onSubmit.mock.calls[0][0]).toEqual({
            username: "diego",
            password: "123456"
        });
      });
    });
  });
});