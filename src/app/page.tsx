import CatalogPage from "@/components/pages/catalog-page/catalog-page";
import { GameRequestParams, getGamesBy } from "@/services/games.service";

interface HomeProps {
  searchParams: GameRequestParams;
}

export default async function Home(props: HomeProps) {
  const { searchParams } = props;

  const gamesResponse = await getGamesBy(searchParams);

  if (!gamesResponse) {
    return <>No games found</>;
  }

  return (
    <main className="">
      <CatalogPage {...gamesResponse} />
    </main>
  );
}
