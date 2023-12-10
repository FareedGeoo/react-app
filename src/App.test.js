import { render, screen,fireEvent  } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);
  const usernameLable = screen.getByLabelText('Username:');
  const usernameInput = screen.getByTestId('username-input')
  const usernamePlaceholder = screen.getByPlaceholderText('Username');

  const passwordLable = screen.getByLabelText('Password:');
  const passwordInput = screen.getByTestId('password-input')
  const passwordPlaceholder = screen.getByPlaceholderText('Password');

  const submitButton = screen.getByTestId("submit-button")

  expect(usernameLable).toBeInTheDocument();
  expect(usernameInput).toBeInTheDocument();
  expect(usernamePlaceholder).toBeInTheDocument();


  expect(passwordLable).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(passwordPlaceholder).toBeInTheDocument();


  expect(submitButton).toBeInTheDocument();




});
test("calls login data when submit clicked" , ()=>{
  render(<App />);
  const handleClick = jest.fn();
  
  screen.getByTestId('login-form').onsubmit = handleClick 

  const usernameInput = screen.getByTestId('username-input')
  const passwordInput = screen.getByTestId('password-input')

  const submitButton = screen.getByTestId("submit-button")

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  
  fireEvent.click(submitButton);

  expect(handleClick).toHaveBeenCalledTimes(1)
})
