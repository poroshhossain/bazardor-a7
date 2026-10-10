"use client";

import Logout from "@/components/shared/Logout";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, Tabs, TextField } from "@heroui/react";
import Image from "next/image";
import { toast } from "react-toastify";

const ProfilePage = () => {
    const { data } = authClient.useSession();
    const user = data?.user;


    if (!user) {
        return (
            <section className="flex min-h-screen items-center justify-center bg-bgColor p-4">
                <div className="rounded-2xl bg-cLight p-8 text-center shadow-sm">
                    <h1 className="text-xl font-bold text-cForeground">লগইন করুন</h1>
                    <p className="mt-2 text-cForeground/70">
                        আপনার প্রোফাইল দেখতে লগইন করতে হবে।
                    </p>
                </div>
            </section>
        );
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries()) as {
            name: string
        };

        await authClient.updateUser({
            ...userData,
        });

    };

    return (
        <section className="min-h-screen bg-bgColor px-4 py-12">
            <div className="mx-auto max-w-7xl md:max-w-1/2">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-cForeground">
                        আমার প্রোফাইল
                    </h1>
                    <p className="mt-2 text-cForeground/70">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl bg-cLight shadow-lg">
                    <div className="h-32 bg-cPrimary/75 sm:h-40" />

                    <div className="px-6 pb-8 sm:px-8">
                        <div className="-mt-14 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
                            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end">
                                <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-4 border-cLight bg-bgColor shadow-md sm:h-32 sm:w-32">
                                    {user.image ? (
                                        <Image
                                            src={user.image}
                                            alt={user.name || "Profile picture"}
                                            width={128}
                                            height={128}
                                            className="h-full w-full object-cover"
                                            loading="eager"
                                        />
                                    ) : (
                                        <span className="text-4xl font-bold text-cPrimary">
                                            {user.name?.charAt(0).toUpperCase() || "U"}
                                        </span>
                                    )}
                                </div>

                                <div className="pb-1">
                                    <h2 className="text-2xl font-bold text-cForeground">
                                        {user.name}
                                    </h2>
                                    <p className="mt-1 break-all text-sm text-cForeground/70">
                                        {user.email}
                                    </p>
                                    <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-cPrimary/10 px-3 py-1 text-xs font-medium text-cPrimary">
                                        <span className="h-2 w-2 rounded-full bg-cPrimary" />
                                        Active Account
                                    </span>
                                </div>
                            </div>

                            <div className="sm:pb-1">
                                <Logout />
                            </div>
                        </div>

                        <div className="my-8 border-t border-shadoColor" />


                        <Tabs className="w-full">
                            <Tabs.ListContainer className="max-w-md">
                                <Tabs.List aria-label="Options">
                                    <Tabs.Tab id="overview">
                                        ব্যক্তিগত তথ্য
                                        <Tabs.Indicator />
                                    </Tabs.Tab>
                                    <Tabs.Tab id="editProfile">
                                        প্রোফাইলের তথ্য আপডেট করুন
                                        <Tabs.Indicator />
                                    </Tabs.Tab>
                                </Tabs.List>
                            </Tabs.ListContainer>
                            <Tabs.Panel className="pt-4" id="overview">
                                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-shadoColor bg-bgColor p-5">
                                        <p className="text-sm text-cForeground/70">পুরো নাম</p>
                                        <p className="mt-2 font-semibold text-cForeground">
                                            {user.name || "নাম দেওয়া হয়নি"}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-shadoColor bg-bgColor p-5">
                                        <p className="text-sm text-cForeground/70">ইমেইল ঠিকানা</p>
                                        <p className="mt-2 break-all font-semibold text-cForeground">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                            </Tabs.Panel>
                            <Tabs.Panel className="pt-4" id="editProfile">
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
                                        <Input placeholder="প্রোফাইলের নাম আপডেট করুন" />
                                        <FieldError />
                                    </TextField>

                                    <Button
                                        type="submit"
                                        className="w-full bg-cPrimary text-cLight"
                                    >
                                        আপডেট করুন
                                    </Button>
                                </Form>
                            </Tabs.Panel>
                        </Tabs>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;