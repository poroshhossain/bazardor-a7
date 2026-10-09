
"use client";
import SocialBtn from "@/components/shared/SocialBtn";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";


const SignUpPage = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
        };
        const { data } = await authClient.signUp.email({
            ...userData
        })
        console.log(data)
    };

    return (

        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-8">
            {/* Header */}
            <section className="mb-6 pt-2 text-center">
                <h1 className="text-2xl font-bold text-cForeground">
                    অ্যাকাউন্ট তৈরি করুন
                </h1>
                <p className="mt-2 text-sm text-cForeground/60">
                    বিনা খরচে সাইন আপ করে পণ্যের বিস্তারিত দাম দেখুন।
                </p>
            </section>

            {/* Signup Form */}
            <div className="rounded-2xl bg-cLight p-5 sm:p-6 w-full max-w-md ">
                <Form
                    className="space-y-4 "
                    onSubmit={onSubmit}
                >
                    <TextField
                        name="name"
                        type="text"
                        validate={(value) =>
                            value.trim().length < 3
                                ? "নাম কমপক্ষে ৩ অক্ষরের হতে হবে"
                                : null
                        }
                    >
                        <Label>নাম</Label>
                        <Input placeholder="যেমন: রহিম উদ্দিন" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) =>
                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                                ? null
                                : "সঠিক ইমেইল ঠিকানা লিখুন"
                        }
                    >
                        <Label>ইমেইল</Label>
                        <Input placeholder="you@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "অন্তত একটি বড় হাতের ইংরেজি অক্ষর দিন";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "অন্তত একটি সংখ্যা দিন";
                            }
                            return null;
                        }}
                    >
                        <Label>পাসওয়ার্ড</Label>
                        <Input placeholder="কমপক্ষে ৮ অক্ষর" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="confirmPassword"
                        type="password"
                        validate={(value) =>
                            value.length === 0
                                ? "পাসওয়ার্ড নিশ্চিত করুন"
                                : null
                        }
                    >
                        <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
                        <Input placeholder="আবার পাসওয়ার্ড লিখুন" />
                        <FieldError />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full bg-cPrimary text-cLight"
                    >
                        অ্যাকাউন্ট তৈরি করুন
                    </Button>
                </Form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-cForeground/10" />
                    <span className="text-xs font-medium text-cForeground/50"> অথবা </span>
                    <div className="h-px flex-1 bg-cForeground/10" />
                </div>

                <div className="flex w-full flex-col gap-3 sm:flex-row">
                    <SocialBtn />
                </div>
                {/* Sign In */}
                <p className="mt-4 text-center text-sm text-cForeground/70"> ইতিমধ্যে অ্যাকাউন্ট আছে? <Link href="/sign-in" className="font-semibold text-cPrimary underline-offset-4 hover:underline" > সাইন ইন করুন </Link> </p>
            </div>
            {/* Back to Home */}
            <Link href="/" className="mt-6 text-sm font-medium text-cForeground/60 transition-colors hover:text-cPrimary" > ← হোম পেজে ফিরে যান </Link>
        </div>
    )
}
export default SignUpPage