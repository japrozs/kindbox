// import { Meta } from "@/components/shared/meta";
import { Button } from "@/components/custom/button";
import { InputField } from "@/components/custom/input-field";
import { useLoginMutation } from "@/generated/graphql";
import { toErrorMap } from "@/utils/to-error-map";
import { useIsAuth } from "@/utils/use-is-auth";
import { useApolloClient } from "@apollo/client";
import { Form, Formik } from "formik";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
    useIsAuth();
    const [loginMut] = useLoginMutation();
    const [loading, setLoading] = useState(false);
    const client = useApolloClient();
    const router = useRouter();
    return (
        <div>
            {/* <Head>
                <Meta title={"Login - Lumos"} />
                <title>Login – Lumos</title>
            </Head> */}
            <div className="h-screen">
                <div className="px-6 py-5 z-10">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            className="h-7 w-auto"
                            height={20}
                            width={20}
                            alt="uniwork"
                        />
                    </Link>
                </div>
                <div
                    style={{
                        marginTop: "13.8vh",
                    }}
                    className="w-80 ml-auto mr-auto  flex flex-col items-center justify-center"
                >
                    <p className="text-xl mr-auto ml-0 font-semibold">
                        Think it. Do it.
                    </p>
                    <p className="text-xl mr-auto ml-0 mb-2 font-medium text-slate-500">
                        Log in to your KindBox account
                    </p>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={async (values, { setErrors }) => {
                            const response = await loginMut({
                                variables: values,
                            });
                            if (response.data?.login.errors) {
                                setErrors(
                                    toErrorMap(response.data.login.errors)
                                );
                            } else if (response.data?.login.user) {
                                if (typeof router.query.next === "string") {
                                    router.push(router.query.next);
                                } else {
                                    // worked
                                    setLoading(true);
                                    await client.resetStore();
                                    router.push("/");
                                }
                            }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <InputField
                                    name="email"
                                    placeholder="jim@dundermifflin.com"
                                    label="Email"
                                />
                                <InputField
                                    type="password"
                                    name="password"
                                    placeholder="that's what she said..."
                                    label="Password"
                                />
                                <Button
                                    loading={isSubmitting || loading}
                                    // colored
                                    type="submit"
                                    label="Continue"
                                    className="mt-5 rounded-lg"
                                />
                            </Form>
                        )}
                    </Formik>
                    <p className="text-gray-400 text-sm font-medium mt-6">
                        Don{"'"}t have an account?{" "}
                        <Link
                            href="/signup"
                            className="hover:text-primary-color transition-all"
                        >
                            Sign up
                        </Link>
                    </p>
                    {/* TODO – build pages for forgot password */}
                    {/* <p className="text-gray-600 text-smol mt-2">
                        <a
                            href="/forgot-password"
                            className="hover:underline hover:text-primary-color transition-all"
                        >
                            Forgot password?
                        </a>
                    </p> */}
                </div>
            </div>
        </div>
    );
};

export default Login;
