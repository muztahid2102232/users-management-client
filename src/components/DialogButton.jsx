"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const DialogueButton = ({ user }) => {
  const { _id } = user;

  const router = useRouter();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const users = Object.fromEntries(formData.entries());
    console.log(users);

    const response = await fetch(`http://localhost:5000/users/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    });
    const result = await response.json();
    if (result.modifiedCount > 0) {
      router.refresh();
    }
  };
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Edit Info</Button>} />
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleOnSubmit} className="bg-slate-300 p-5 rounded">
          <DialogHeader className="mb-2">
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input
                id="name-1"
                name="name"
                type="text"
                defaultValue={user.name}
              />
            </Field>
            <Field>
              <Label htmlFor="email-1">Email</Label>
              <Input
                id="email-1"
                name="email"
                type="email"
                defaultValue={user.email}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose
              render={
                <Button className="cursor-pointer" variant="outline">
                  Cancel
                </Button>
              }
            />
            <DialogClose
              render={
                <Button
                  variant="outline"
                  className="cursor-pointer"
                  type="submit"
                >
                  Save changes
                </Button>
              }
            />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogueButton;
