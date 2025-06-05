"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
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
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Logo and header section */}
      <div className="w-full max-w-md text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/logo.png"
            alt="IDEISGarshemo Logo"
            width={40}
            height={40}
            className="rounded-full shadow-lg"
          />
          <h1 className="ml-2 text-3xl font-bold text-white tracking-tight">
            reDevBlock.com
          </h1>
        </div>
        <p className="text-slate-400">
          Discover top-tier opportunities that match your skills
        </p>
      </div>

      <SignUp.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <SignUp.Step name="start">
                <Card className="w-full max-w-md mx-auto border-slate-700 bg-slate-800/90 shadow-xl rounded-lg">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-white">
                      Create an account
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Connect with leading employers and start your professional
                      journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-5">
                    <div className="grid grid-cols-2 gap-4">
                      <Clerk.Connection name="github" asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          type="button"
                          disabled={isGlobalLoading}
                          className="w-full border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600 hover:border-slate-500 transition-all duration-200"
                        >
                          <Clerk.Loading scope="provider:github">
                            {(isLoading) =>
                              isLoading ? (
                                <Icons.spinner className="size-4 animate-spin" />
                              ) : (
                                <>
                                  <Icons.gitHub className="mr-2 size-4" />
                                  GitHub
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                      <Clerk.Connection name="google" asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          type="button"
                          disabled={isGlobalLoading}
                          className="w-full border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600 hover:border-slate-500 transition-all duration-200"
                        >
                          <Clerk.Loading scope="provider:google">
                            {(isLoading) =>
                              isLoading ? (
                                <Icons.spinner className="size-4 animate-spin" />
                              ) : (
                                <>
                                  <Icons.google className="mr-2 size-4" />
                                  Google
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-600/50"></span>
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="bg-slate-800 px-2 text-slate-400 rounded-full">
                          or continue with
                        </span>
                      </div>
                    </div>
                    <Clerk.Field name="emailAddress" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label className="text-slate-300 font-medium">
                          Email address
                        </Label>
                      </Clerk.Label>
                      <Clerk.Input type="email" required asChild>
                        <Input className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-slate-500 focus:ring-slate-500" />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-red-400" />
                    </Clerk.Field>
                    <Clerk.Field name="password" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label className="text-slate-300 font-medium">
                          Password
                        </Label>
                      </Clerk.Label>
                      <Clerk.Input type="password" required asChild>
                        <Input className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-slate-500 focus:ring-slate-500" />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-red-400" />
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <div
                      id="clerk-captcha"
                      data-cl-theme="dark"
                      data-cl-size="flexible"
                      data-cl-language="es-ES"
                    />
                    <SignUp.Captcha className="empty:hidden" />
                    <SignUp.Action submit asChild>
                      <Button
                        className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium transition-all duration-200 shadow-lg"
                        disabled={isGlobalLoading}
                      >
                        <Clerk.Loading>
                          {(isLoading) => {
                            return isLoading ? (
                              <Icons.spinner className="size-4 animate-spin mr-2" />
                            ) : (
                              "Continue"
                            );
                          }}
                        </Clerk.Loading>
                      </Button>
                    </SignUp.Action>
                    <Button
                      variant="link"
                      size="sm"
                      asChild
                      className="text-slate-400 hover:text-white transition"
                    >
                      <Clerk.Link navigate="sign-in">
                        Already have an account? Sign in
                      </Clerk.Link>
                    </Button>
                  </CardFooter>
                </Card>
              </SignUp.Step>

              <SignUp.Step name="continue">
                <Card className="w-full max-w-md mx-auto border-slate-700 bg-slate-800/90 shadow-xl rounded-lg">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-white">
                      Continue registration
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Just one more step to complete your account setup
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Clerk.Field name="username" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label className="text-slate-300 font-medium">
                          Username
                        </Label>
                      </Clerk.Label>
                      <Clerk.Input type="text" required asChild>
                        <Input className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-slate-500 focus:ring-slate-500" />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-red-400" />
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter>
                    <SignUp.Action submit asChild>
                      <Button
                        className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium transition-all duration-200 shadow-lg"
                        disabled={isGlobalLoading}
                      >
                        <Clerk.Loading>
                          {(isLoading) => {
                            return isLoading ? (
                              <Icons.spinner className="size-4 animate-spin mr-2" />
                            ) : (
                              "Complete Registration"
                            );
                          }}
                        </Clerk.Loading>
                      </Button>
                    </SignUp.Action>
                  </CardFooter>
                </Card>
              </SignUp.Step>

              <SignUp.Step name="verifications">
                <SignUp.Strategy name="email_code">
                  <Card className="w-full max-w-md mx-auto border-slate-700 bg-slate-800/90 shadow-xl rounded-lg">
                    <CardHeader className="space-y-1">
                      <CardTitle className="text-2xl font-bold text-white">
                        Verify your email
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        Enter the verification code sent to your email address
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-5">
                      <div className="grid items-center justify-center gap-4">
                        <Clerk.Field name="code" className="space-y-2">
                          <Clerk.Label className="sr-only">
                            Verification code
                          </Clerk.Label>
                          <div className="flex justify-center text-center">
                            <Clerk.Input
                              type="otp"
                              className="flex justify-center has-[:disabled]:opacity-50"
                              autoSubmit
                              render={({ value, status }) => {
                                return (
                                  <div
                                    data-status={status}
                                    className={cn(
                                      "relative flex size-10 items-center justify-center border-y border-r border-slate-600 bg-slate-700/50 text-white text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
                                      {
                                        "z-10 ring-2 ring-slate-400 ring-offset-slate-900 ring-offset-2":
                                          status === "cursor" ||
                                          status === "selected",
                                      }
                                    )}
                                  >
                                    {value}
                                    {status === "cursor" && (
                                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                        <div className="animate-caret-blink h-4 w-px bg-white duration-1000" />
                                      </div>
                                    )}
                                  </div>
                                );
                              }}
                            />
                          </div>
                          <Clerk.FieldError className="block text-center text-sm text-red-400" />
                        </Clerk.Field>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4">
                      <SignUp.Action submit asChild>
                        <Button
                          className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium transition-all duration-200 shadow-lg"
                          disabled={isGlobalLoading}
                        >
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? (
                                <Icons.spinner className="size-4 animate-spin mr-2" />
                              ) : (
                                "Verify & Continue"
                              );
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignUp.Action>
                      <SignUp.Action
                        asChild
                        resend
                        className="text-slate-400"
                        fallback={({ resendableAfter }) => (
                          <Button
                            variant="link"
                            size="sm"
                            disabled
                            className="text-slate-500"
                          >
                            Didn&apos;t receive a code? Resend (
                            <span className="tabular-nums">
                              {resendableAfter}
                            </span>
                            )
                          </Button>
                        )}
                      >
                        <div id="clerk-captcha"></div>
                        <Button
                          type="button"
                          variant="link"
                          size="sm"
                          className="text-slate-400 hover:text-white transition"
                        >
                          Didn&apos;t receive a code? Resend
                        </Button>
                      </SignUp.Action>
                    </CardFooter>
                  </Card>
                </SignUp.Strategy>
              </SignUp.Step>
            </>
          )}
        </Clerk.Loading>
      </SignUp.Root>
    </div>
  );
}