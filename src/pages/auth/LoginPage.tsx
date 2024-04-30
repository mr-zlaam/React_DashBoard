import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const handleLoginSubmit = () => {
    const email = emailRef.current?.value as string;
    const password = passwordRef.current?.value as string;
    //   console.log(email, password);//Data is changing with input
  };
  return (
    <>
      <section className="flex items-center justify-center h-screen">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                ref={emailRef}
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
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col">
            <Button onClick={handleLoginSubmit} className="w-full">
              Sign in
            </Button>
            <div className="mt-4 text-sm text-center">
              Don't have an account?{" "}
              <Link to="/auth/register" className="text-blue-500 underline">
                Register
              </Link>
            </div>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}

export default LoginPage;
