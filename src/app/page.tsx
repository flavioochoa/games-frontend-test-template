import CatalogPage from "@/components/pages/catalog-page/catalog-page";
import { GameRequestParams, getGamesBy } from "@/services/games.service";

interface HomeProps {
  searchParams: GameRequestParams;
}

export default async function Home() {
  return (
    <main className="">
      <div>Top Sellers</div>
      <CatalogPage />
    </main>
  );
}
