import { Card, CardContent, CardHeader } from "@/components/ui/card";

const UserCard = ({ user }) => {
  const { name, email } = user;
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
    </Card>
  );
};

export default UserCard;
