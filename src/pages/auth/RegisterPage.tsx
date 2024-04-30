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
import {} from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <>
      <section className="flex items-center justify-center h-screen">
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
                  <Input id="username" placeholder="john_doe" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input id="fullname" placeholder="John Doe" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
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
