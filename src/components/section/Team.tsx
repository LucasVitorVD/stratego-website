import EmployeeCard from "../card/EmployeeCard";

const employees = [
  {
    name: "Amanda Marie",
    activity: "Diretoria de negócios",
  },
  {
    name: "Ana Clara",
    activity: "Presidência Institucional",
  },
  {
    name: "Andiarra",
    activity: "Presidência Organizacional",
  },
  {
    name: "Sabrina Alves",
    activity: "Gestão de pessoas",
  },
  {
    name: "Caio Rezenda",
    activity: "Diretoria de projetos",
  },
];

export default function Team() {
  return (
    <section className="flex flex-col gap-4 py-20">
      <div className="flex flex-col items-center font-montserrat_alt text-4xl font-bold">
        <div className="flex items-center lg:w-full lg:gap-5 lg:after:content-[''] lg:after:inline-block lg:after:h-3 lg:after:flex-grow lg:after:bg-highlightYellow">
          <h3 className="lg:w-[55vw] lg:text-end">CONHEÇA A</h3>
        </div>

        <div className="flex items-center lg:w-full lg:gap-5 lg:before:content-[''] lg:before:h-3 lg:before:flex-grow lg:before:bg-highlightYellow">
          <h3 className="lg:w-[55vw]">EQUIPE</h3>
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-7 py-10">
        {employees.map((employee, i) => (
          <EmployeeCard
            key={i}
            name={employee.name}
            activity={employee.activity}
            index={i}
          />
        ))}
      </div>

      <p className="text-base font-semibold px-4 text-pretty text-center">
        Contamos com{" "}
        <span className="text-highlightYellow">31 consultores</span>{" "}
        especializados e prontos para lhe atender
      </p>
    </section>
  );
}
