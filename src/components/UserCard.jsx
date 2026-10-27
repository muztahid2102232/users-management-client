import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const UserCard = ({ user }) => {
  const { name, email, _id } = user;
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
      <Link href={`/users/${_id}`}>
        <button className="cursor-pointer border border-slate-500 m-3 rounded-2xl p-2.5">
          show user details
        </button>
      </Link>
    </Card>
  );
};

export default UserCard;
