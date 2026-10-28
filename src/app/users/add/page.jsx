"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

const handleOnSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  const response = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
   const result=await response.json();
   if (result.insertedId) {
    redirect("/users");
   }
};

export default function AddUserPage() {
  return (
    <form action="" onSubmit={handleOnSubmit}>
      <p className="ml-36 text-3xl mb-3.5">User Information Submission Form</p>
      <FieldGroup>
        <Field className="ml-36">
          <FieldLabel htmlFor="fieldgroup-name" className="">
            Name
          </FieldLabel>
          <Input
            required
            id="fieldgroup-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full max-w-96"
          />
        </Field>
        <Field className="ml-36">
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            required
            id="fieldgroup-email"
            name="email"
            type="email"
            placeholder="Enter your valid email address"
            className="w-full max-w-96"
          />
        </Field>
        <Field orientation="horizontal" className="ml-36">
          <Button type="reset" variant="outline">
            Reset
          </Button>
          <Button type="submit" className="bg-black text-white">
            Add User
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
