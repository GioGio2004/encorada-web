"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
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

export default function SignInPage() {
  return (
    <div className="grid w-full grow items-center px-4 sm:justify-center bg-slate-900 min-h-screen">
      <div className="flex flex-col items-center w-full gap-6">
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Welcome back to reDevBlock.com
          </h1>
          <p className="text-slate-300 mb-2">
            Where innovation meets collaboration
          </p>
          <div className="h-1 w-16 bg-slate-600 mx-auto rounded-full"></div>
        </div>

        <SignIn.Root>
          <Clerk.Loading>
            {(isGlobalLoading) => (
              <>
                <SignIn.Step name="start">
                  <Card className="w-full sm:w-96 bg-slate-800/80 backdrop-blur-md border-slate-700 shadow-xl rounded-xl">
                    <CardHeader>
                      <CardTitle className="text-white">
                        Sign in to reDevBlock.com
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        Welcome back! Please sign in to continue
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-y-4">
                      <div className="grid grid-cols-2 gap-x-4">
                        <Clerk.Connection name="github" asChild>
                          <Button
                            size="sm"
                            variant="outline"
                            type="button"
                            disabled={isGlobalLoading}
                            className="border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600 hover:border-slate-500 transition-all duration-200"
                          >
                            <Clerk.Loading scope="provider:github">
                              {(isLoading) =>
                                isLoading ? (
                                  <Icons.spinner className="size-4 animate-spin text-white" />
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
                            className="border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600 hover:border-slate-500 transition-all duration-200"
                          >
                            <Clerk.Loading scope="provider:google">
                              {(isLoading) =>
                                isLoading ? (
                                  <Icons.spinner className="size-4 animate-spin text-white" />
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
                          <span className="w-full border-t border-slate-600"></span>
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="bg-slate-800 px-2 text-slate-300 rounded-full">
                            or
                          </span>
                        </div>
                      </div>
                      <Clerk.Field name="identifier" className="space-y-2">
                        <Clerk.Label asChild>
                          <Label className="text-slate-200 font-medium">
                            Email address
                          </Label>
                        </Clerk.Label>
                        <Clerk.Input type="email" required asChild>
                          <Input className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-slate-500 focus:ring-slate-500" />
                        </Clerk.Input>
                        <Clerk.FieldError className="block text-sm text-red-400" />
                      </Clerk.Field>
                    </CardContent>
                    <CardFooter>
                      <div className="grid w-full gap-y-4">
                        <div
                          id="clerk-captcha"
                          data-cl-theme="dark"
                          data-cl-size="flexible"
                          data-cl-language="es-ES"
                        />
                        <SignIn.Action submit asChild>
                          <Button
                            disabled={isGlobalLoading}
                            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium transition-all duration-200 shadow-lg shadow-slate-900/30"
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
                        </SignIn.Action>

                        <Button
                          variant="link"
                          size="sm"
                          asChild
                          className="text-slate-300 hover:text-white transition"
                        >
                          <Clerk.Link navigate="sign-up">
                            Don&apos;t have an account? Sign up
                          </Clerk.Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </SignIn.Step>

                <SignIn.Step name="choose-strategy">
                  <Card className="w-full sm:w-96 bg-slate-800/80 backdrop-blur-md border-slate-700 shadow-xl rounded-xl">
                    <CardHeader>
                      <CardTitle className="text-white">
                        Use another method
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        Facing issues? You can use any of these methods to sign
                        in.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-y-4">
                      <SignIn.SupportedStrategy name="email_code" asChild>
                        <Button
                          type="button"
                          variant="link"
                          disabled={isGlobalLoading}
                          className="text-slate-300 hover:text-white transition"
                        >
                          Email code
                        </Button>
                      </SignIn.SupportedStrategy>
                      <SignIn.SupportedStrategy name="password" asChild>
                        <Button
                          type="button"
                          variant="link"
                          disabled={isGlobalLoading}
                          className="text-slate-300 hover:text-white transition"
                        >
                          Password
                        </Button>
                      </SignIn.SupportedStrategy>
                    </CardContent>
                    <CardFooter>
                      <div className="grid w-full gap-y-4">
                        <SignIn.Action navigate="previous" asChild>
                          <Button
                            disabled={isGlobalLoading}
                            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium transition-all duration-200 shadow-lg shadow-slate-900/30"
                          >
                            <Clerk.Loading>
                              {(isLoading) => {
                                return isLoading ? (
                                  <Icons.spinner className="size-4 animate-spin mr-2" />
                                ) : (
                                  "Go back"
                                );
                              }}
                            </Clerk.Loading>
                          </Button>
                        </SignIn.Action>
                      </div>
                    </CardFooter>
                  </Card>
                </SignIn.Step>

                <SignIn.Step name="verifications">
                  <SignIn.Strategy name="password">
                    <Card className="w-full sm:w-96 bg-slate-800/80 backdrop-blur-md border-slate-700 shadow-xl rounded-xl">
                      <CardHeader>
                        <CardTitle className="text-white">
                          Check your email
                        </CardTitle>
                        <CardDescription className="text-slate-300">
                          Enter the verification code sent to your email
                        </CardDescription>
                        <p className="text-sm text-slate-400">
                          Welcome back <SignIn.SafeIdentifier />
                        </p>
                      </CardHeader>
                      <CardContent className="grid gap-y-4">
                        <Clerk.Field name="password" className="space-y-2">
                          <Clerk.Label asChild>
                            <Label className="text-slate-200 font-medium">
                              Password
                            </Label>
                          </Clerk.Label>
                          <Clerk.Input type="password" asChild>
                            <Input className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-slate-500 focus:ring-slate-500" />
                          </Clerk.Input>
                          <Clerk.FieldError className="block text-sm text-red-400" />
                        </Clerk.Field>
                      </CardContent>
                      <CardFooter>
                        <div className="grid w-full gap-y-4">
                          <SignIn.Action submit asChild>
                            <Button
                              disabled={isGlobalLoading}
                              className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium transition-all duration-200 shadow-lg shadow-slate-900/30"
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
                          </SignIn.Action>
                          <SignIn.Action navigate="choose-strategy" asChild>
                            <Button
                              type="button"
                              size="sm"
                              variant="link"
                              className="text-slate-300 hover:text-white transition"
                            >
                              Use another method
                            </Button>
                          </SignIn.Action>
                        </div>
                      </CardFooter>
                    </Card>
                  </SignIn.Strategy>

                  <SignIn.Strategy name="email_code">
                    <Card className="w-full sm:w-96 bg-slate-800/80 backdrop-blur-md border-slate-700 shadow-xl rounded-xl">
                      <CardHeader>
                        <CardTitle className="text-white">
                          Check your email
                        </CardTitle>
                        <CardDescription className="text-slate-300">
                          Enter the verification code sent to your email
                        </CardDescription>
                        <p className="text-sm text-slate-400">
                          Welcome back <SignIn.SafeIdentifier />
                        </p>
                      </CardHeader>
                      <CardContent className="grid gap-y-4">
                        <Clerk.Field name="code">
                          <Clerk.Label className="sr-only">
                            Email verification code
                          </Clerk.Label>
                          <div className="grid gap-y-2 items-center justify-center">
                            <div className="flex justify-center text-center">
                              <Clerk.Input
                                type="otp"
                                autoSubmit
                                className="flex justify-center has-[:disabled]:opacity-50"
                                render={({ value, status }) => {
                                  return (
                                    <div
                                      data-status={status}
                                      className="relative flex h-9 w-9 items-center justify-center border-y border-r border-slate-600 bg-slate-700/50 text-white text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=selected]:ring-2 data-[status=selected]:ring-slate-400 data-[status=selected]:ring-offset-2 data-[status=selected]:ring-offset-slate-900 data-[status=cursor]:ring-2 data-[status=cursor]:ring-slate-400 data-[status=cursor]:ring-offset-2 data-[status=cursor]:ring-offset-slate-900"
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
                            <Clerk.FieldError className="block text-sm text-red-400 text-center" />
                            <SignIn.Action
                              asChild
                              resend
                              className="text-slate-400"
                              fallback={({ resendableAfter }) => (
                                <Button
                                  variant="link"
                                  size="sm"
                                  disabled
                                  className="text-slate-500/50"
                                >
                                  Didn&apos;t receive a code? Resend (
                                  <span className="tabular-nums">
                                    {resendableAfter}
                                  </span>
                                  )
                                </Button>
                              )}
                            >
                              <Button
                                variant="link"
                                size="sm"
                                className="text-slate-300 hover:text-white transition"
                              >
                                Didn&apos;t receive a code? Resend
                              </Button>
                            </SignIn.Action>
                          </div>
                        </Clerk.Field>
                      </CardContent>
                      <CardFooter>
                        <div className="grid w-full gap-y-4">
                          <SignIn.Action submit asChild>
                            <Button
                              disabled={isGlobalLoading}
                              className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium transition-all duration-200 shadow-lg shadow-slate-900/30"
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
                            <div id="clerk-captcha"></div>
                          </SignIn.Action>
                          <SignIn.Action navigate="choose-strategy" asChild>
                            <Button
                              size="sm"
                              variant="link"
                              className="text-slate-300 hover:text-white transition"
                            >
                              Use another method
                            </Button>
                          </SignIn.Action>
                        </div>
                      </CardFooter>
                    </Card>
                  </SignIn.Strategy>
                </SignIn.Step>
              </>
            )}
          </Clerk.Loading>
        </SignIn.Root>
      </div>
    </div>
  );
}