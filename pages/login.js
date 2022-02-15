import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Guest from "../layouts/Guest";

export default function Login() {
    return (
        <div>
            <form>
                <div className="mb-6">
                    <Label forInput="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@gmail.com"
                    ></Input>
                </div>
                <div className="mb-6">
                    <Label forInput="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                    ></Input>
                </div>
                <div className="flex justify-between mb-6">
                    <Checkbox
                        forInput="remember"
                        label={"Remember"}
                        name="remember"
                        id="remember"
                    />
                    <a href="#" className="font-medium text-sky-500">
                        Forgot password
                    </a>
                </div>
                <div className="flex items-center justify-between">
                    <Button>Register</Button>
                    <span>
                        Don't have account ? {""}
                        <Link href="/register">
                            <a className="font-medium text-sky-500">Register</a>
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

Login.getLayout = (page) => (
    <Guest header="Login" title="Login" children={page} />
);
