import Link from "next/link";
import { useEffect, useState } from "react";
import MainContent from "../src/components/content";
import TeamCard from "../src/components/team";
import { ITeam } from "../src/interfaces/teams";

function HomePage() {
  const [teams, setTeams] = useState<ITeam[]>([]);
  const getTeams = async () => {
    const teams = await fetch("https://www.balldontlie.io/api/v1/teams")
      .then((response) => response.json())
      .then((response) => response.data)
      .then((response) => {
        setTeams(response);
      })
      .catch((err) => console.error(err));
    return teams;
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <>
      <div>Welcome to Next.js!</div>
      <nav>
        <Link href="/about">About Page</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div>
        <h2>Hola, este es el Main Content!</h2>
        <MainContent>
          {teams.map((t: ITeam) => {
            return <TeamCard key={t.id} team={t} />;
          })}
        </MainContent>
      </div>
    </>
  );
}

export default HomePage;
