import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Select from "../components/Select";
import Guest from "../layouts/Guest";

export default function Register() {
    return (
        <div>
            <form>
                <div className="mb-6">
                    <Label forInput="name">Name</Label>
                    <Input name="name" id="name" placeholder="John Doe"></Input>
                </div>
                <div className="mb-6">
                    <Label forInput="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@gmail.com"
                    ></Input>
                </div>
                <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
                    <div className="mb-6">
                        <Label forInput="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                        ></Input>
                    </div>
                    <div className="mb-6">
                        <Label forInput="password_confirmation">
                            Confirm Password
                        </Label>
                        <Input
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                        ></Input>
                    </div>
                </div>

                <div className="mb-6">
                    <Label forInput={"gender"}>Gender</Label>
                    <Select>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Select>
                </div>

                <div className="flex justify-between mb-6">
                    <Checkbox
                        forInput="acceptance"
                        label={"Aggree with Privacy and Terms"}
                        name="acceptance"
                        id="acceptance"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Button>Register</Button>
                    <span>
                        Already have account ? {""}
                        <Link href="/login">
                            <a className="font-medium text-sky-500">Login</a>
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

Register.getLayout = (page) => (
    <Guest
        cardClassName="lg:w-2/5"
        header="Register"
        title="Register"
        children={page}
    />
);
