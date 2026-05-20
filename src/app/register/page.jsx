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
  Spinner,
  TextField
} from '@heroui/react'
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';

const RegisterPage = () => {
const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async(e) => {
      e.preventDefault();
      setIsLoading(true)
       if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

      
      const formData = new FormData(e.currentTarget)
      const user = Object.fromEntries(formData.entries())

      const { data, error } = await authClient.signUp.email({
    name: user.name,
    email: user.email, 
    password: user.password, 
    image: user.image,
    // callbackURL: "https://example.com/callback",
});

      if (data) {
          toast.success("SignUp Successfull")
          redirect('/')
      }
      if (error) {
          toast.error(`${error.message}`)
          setIsLoading(false)
      }
      
    console.log("Form submitted", user);
      console.log({ data, error });
    setIsLoading(false)

  }

  const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        })
    }
  const handleGithubSignIn = async () => {
         await authClient.signIn.social({
        provider: "github"
    })
    }

  return (
    <div className='min-h-screen mt-25 mb-10 md:mt-10 flex items-center justify-center bg-[#f8fafc] px-5'>

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
                 if (!/[0-9]/.test(value)) return "Must contain at least one number";
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
            hover:bg-[#0B7C7B] transition duration-300 shadow-sm hover:shadow-md flex justify-center items-centera gap-2'
          >
                      {isLoading ? (<>
                          <Spinner />
                          Creating account...
                      </>)
                          : ("SignUp")}
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
          <Button variant='outline' className="w-full rounded-lg flex gap-2" onClick={handleGoogleSignIn}>
            <FcGoogle /> Google
          </Button>

          <Button variant='outline' className="w-full rounded-lg flex gap-2" onClick={handleGithubSignIn}>
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