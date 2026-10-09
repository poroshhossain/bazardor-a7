
"use client";
import SocialBtn from "@/components/shared/SocialBtn";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";

const SignInPage = () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};
        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
        alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    };
    return (
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-8">
            {/* Header */}
            <section className="mb-6 pt-2 text-center">
                <h1 className="text-2xl font-bold text-cForeground">
                    সাইন ইন
                </h1>
                <p className="mt-2 text-sm text-cForeground/60">
                    বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                </p>
            </section>

            {/* Signup Form */}
            <div className="rounded-2xl bg-cLight p-5 sm:p-6 w-full max-w-md ">
                <Form
                    className="space-y-4 "
                    onSubmit={onSubmit}
                >
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

                    <Button
                        type="submit"
                        className="w-full bg-cPrimary text-cLight"
                    >
                        সাইন ইন
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
                <p className="mt-4 text-center text-sm text-cForeground/70"> অ্যাকাউন্ট নেই? <Link href="/sign-in" className="font-semibold text-cPrimary underline-offset-4 hover:underline" > সাইন আপ করুন </Link> </p>
            </div>
            {/* Back to Home */}
            <Link href="/" className="mt-6 text-sm font-medium text-cForeground/60 transition-colors hover:text-cPrimary" > ← হোম পেজে ফিরে যান </Link>
        </div>
    )
}
export default SignInPage