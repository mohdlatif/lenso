// import { Link, routes } from '@redwoodjs/router'
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

const SignupPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Metadata title="Signup" description="Signup page" />

      <h1>Sign Up</h1>
      <Form onSubmit={onSubmit}>
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign Up</Submit>
      </Form>
      {/*
          My default route is named `signup`, link to me with:
          `<Link to={routes.signup()}>Signup</Link>`
      */}
    </>
  )
}

export default SignupPage
