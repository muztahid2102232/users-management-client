'use client';
import DialogButton from "@/components/DialogButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";


const UserCard = ({ user }) => {
  const { name, email, _id } = user;
  const router=useRouter();

  const handleOnClick = async () => {
    const res = await fetch(
      `http://localhost:5000/users/${_id}`,
      {
        method: "DELETE"
      }
    );
const result=await res.json();
if (result.deletedCount>0) {
  router.refresh();
}
  };


  return (
    <Card className="w-full max-w-sm bg-cyan-100 border border-amber-100">
      <CardHeader>
        <p className="text-[12px] text-black">Name</p>
        <p className="text-[16px]">{name}</p>
      </CardHeader>

      <CardContent>
        <p className="text-[12px] text-black">Email Address</p>
        <p className="wrap-break-words font-medium text-[16px]">{email}</p>
      </CardContent>
      <div className="flex justify-center items-center gap-3.5">
        <Link href={`/users/${_id}`}>
          <button className="cursor-pointer border border-slate-500 rounded-2xl p-2.5 ml-1.5">
            show user details
          </button>
        </Link>
<DialogButton user={user}></DialogButton>
        <button onClick={handleOnClick} className="cursor-pointer w-fit border px-2.5 py-1.75 rounded bg-red-300">
          delete user
        </button>
      </div>
    </Card>
  );
};

export default UserCard;
