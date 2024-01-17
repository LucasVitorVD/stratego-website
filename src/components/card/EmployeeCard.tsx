import { UserRound } from "lucide-react";

interface Props {
  name: string,
  activity: string
}

export default function EmployeeCard({ name, activity }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-center h-64 w-64 rounded-full bg-gray-400">
        <UserRound size={150} />
      </div>
      <div className="text-center text-xl font-bold font-montserrat_alt">
        <p>{name}</p>
        <p className="text-highlightYellow w-[196px]">{activity}</p>
      </div>
    </div>
  );
}
