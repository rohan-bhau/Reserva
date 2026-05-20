'use client'
import { Eye, EyeSlash } from '@gravity-ui/icons';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  TextField
} from '@heroui/react'
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';

const RegisterPage = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Form submitted");
  }

  return (
    <div className='min-h-screen mt-10 flex items-center justify-center bg-[#f8fafc] px-5'>

      <div className='w-full max-w-md bg-white p-8 rounded-2xl border border-gray-100 shadow-sm'>


        <h2 className='font-bold text-2xl mb-2 text-gray-800'>
          Create Your Account
        </h2>

        <p className='text-gray-500 mb-6'>
          Join Reserva and start booking your favorite facilities.
        </p>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

          {/* full Name */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (!value || value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Full Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>

          {/* email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* photo url */}
          <TextField
            name="photo"
            validate={(value) => {
              if (!value) return null;

              try {
                new URL(value);
                return null;
              } catch {
                return "Please enter a valid image URL";
              }
            }}
          >
            <Label>Photo URL (Optional)</Label>
            <Input placeholder="https://example.com/profile.jpg" />
            <Description>Add your profile picture (optional)</Description>
            <FieldError />
          </TextField>

          {/* password */}
          <TextField
            isRequired
            name="password"
            validate={(value) => {
              if (!value) return "Password is required";
              if (value.length < 6) return "At least 6 characters required";
              if (!/[A-Z]/.test(value)) return "Add one uppercase letter";
              if (!/[a-z]/.test(value)) return "Add one lowercase letter";
              return null;
            }}
          >
            <Label>Password</Label>

            <InputGroup>
              <InputGroup.Input
                type={isVisible ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <InputGroup.Suffix>
                <Button
                  isIconOnly
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? <Eye /> : <EyeSlash />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

            <Description>
              At least 6 characters, including uppercase & lowercase letters
            </Description>

            <FieldError />
          </TextField>

          {/* Confirm Password */}
          <TextField
            isRequired
            name="confirmPassword"
            validate={(value) => {
              if (!value) return "Confirm your password";

              if (!password) return null;

              if (value !== password) {
                return "Passwords do not match";
              }

              return null;
            }}
          >
            <Label>Confirm Password</Label>

            <InputGroup>
              <InputGroup.Input
                type={isConfirmVisible ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <InputGroup.Suffix>
                <Button
                  isIconOnly
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsConfirmVisible(!isConfirmVisible)}
                >
                  {isConfirmVisible ? <Eye /> : <EyeSlash />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

            <FieldError />
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            className='w-full rounded-lg bg-[#0EA5A4] text-white 
            hover:bg-[#0B7C7B] transition duration-300 shadow-sm hover:shadow-md'
          >
            Sign Up
          </Button>

        </Form>

        {/* divider */}
        <div className='flex items-center gap-3 my-6'>
          <Separator className='flex-1' />
          <span className='text-sm text-gray-400'>or continue with</span>
          <Separator className='flex-1' />
        </div>

        {/* social Login */}
        <div className='flex gap-3'>
          <Button variant='outline' className="w-full rounded-lg flex gap-2">
            <FcGoogle /> Google
          </Button>

          <Button variant='outline' className="w-full rounded-lg flex gap-2">
            <FaGithub /> Github
          </Button>
        </div>


        <p className='text-center text-gray-500 mt-6 text-sm'>
          Already have an account?{' '}
          <Link href='/signin' className='text-[#0EA5A4] font-medium hover:underline'>
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default RegisterPage