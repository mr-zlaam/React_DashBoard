import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/http/api";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";
import { cn } from "@/lib/utils";

function RegisterPage() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const fullname = useRef<HTMLInputElement | null>(null);

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate("/auth/login");
    },
  });
  const handleRegisterSubmit = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const username = usernameRef.current?.value;
    const displayName = fullname.current?.value;
    if (!email || !password || !username || !displayName)
      return alert("Please fill all the fields");
    mutation.mutate({ email, password, username, displayName });
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen">
        {mutation.isError && (
          <p className="text-xs italic text-center text-red-500">
            username or email already exist
          </p>
        )}
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
            <CardDescription className="text-center">
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    ref={usernameRef}
                    id="username"
                    placeholder="john_doe"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input
                    ref={fullname}
                    id="fullname"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  ref={emailRef}
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  ref={passwordRef}
                  id="password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
              <Button
                disabled={mutation.isPending}
                onClick={handleRegisterSubmit}
                className={cn(
                  "w-full",
                  mutation.isPending &&
                    "bg-black/50 cursor-not-allowed opacity-90"
                )}
              >
                {mutation.isPending ? (
                  <ProgressBar
                    visible={true}
                    height="60"
                    width="60"
                    barColor="#ffffff"
                    borderColor="#ffffff"
                    ariaLabel="progress-bar-loading"
                  />
                ) : (
                  <span>Register</span>
                )}
              </Button>{" "}
            </div>
            <div className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-blue-500 underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export default RegisterPage;
