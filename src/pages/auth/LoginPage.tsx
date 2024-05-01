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
import { login } from "@/http/api";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";
import { cn } from "@/lib/utils";
import { useTokenStore } from "@/store/store";
function LoginPage() {
  //navigation
  const navigate = useNavigate();
  const setToken = useTokenStore((state) => state.setToken);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      setToken(res.data?.accessToken);
      console.log(res.data);
      navigate("/dashboard/home");
    },
  });
  const handleLoginSubmit = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!email || !password) return alert("Please fill all the fields");
    mutation.mutate({ email, password });
  };
  return (
    <>
      <section className="flex items-center justify-center h-screen">
        <Card className="w-full max-w-sm">
          <CardHeader>
            {mutation.isError && (
              <p className="text-xs italic text-center text-red-500">
                {mutation.error.message}: Try Again
              </p>
            )}
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
            <Button
              disabled={mutation.isPending}
              onClick={handleLoginSubmit}
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
                <span>Sign in</span>
              )}
            </Button>
            <div className="mt-4 text-sm text-center">
              Don't have an account?{" "}
              <Link to="/auth/register" className="text-blue-500 underline">
                Register{" "}
              </Link>
            </div>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}

export default LoginPage;
