import UserCard from "@/components/UserCard";

const userPromise = async () => {
  const res = await fetch("http://localhost:5000/users");
  return res.json();
};
const UserPage = async () => {
  const users = await userPromise();
  return (
    <>
      <div className="grid grid-cols-3 gap-2.5 p-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UserPage;
