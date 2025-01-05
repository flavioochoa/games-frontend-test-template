"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/app/loading";
import CatalogGrid from "./catalog-grid";
import CatalogGenderFilter from "./catalog-gender-filter";
import useGameCatalogPage from "./useGameCatalogPage";
import { Button } from "@/components/button";

export default function CatalogPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const genreParam = searchParams.get("genre") ?? "All";
  const pageParam = searchParams.get("page") ?? "1";

  const { init, gamesCatalog, loadMoreGames, isPending, startTransition } =
    useGameCatalogPage();

  const onGenreChange = async (event: React.FormEvent<HTMLSelectElement>) => {
    const genreValue = event.currentTarget.value;

    const params = new URLSearchParams(searchParams);
    params.set("genre", genreValue);
    params.set("page", "1");

    updateRouteParams(params);

    await init({
      genre: genreValue,
      page: 1,
    });
  };

  const nextPage = async () => {
    if (currentPage > totalPages || currentPage <= 0) {
      return;
    }

    const nextPage = currentPage + 1;

    const params = new URLSearchParams(searchParams);
    params.set("page", nextPage.toString());

    updateRouteParams(params);

    await loadMoreGames({
      genre: genreParam,
      page: nextPage,
    });
  };

  const updateRouteParams = (params: URLSearchParams) => {
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  useEffect(() => {
    init({
      genre: genreParam,
      page: parseInt(pageParam),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { games, totalPages, currentPage, availableFilters } = gamesCatalog;

  if (isPending) {
    return <Loading />;
  }

  if (parseInt(pageParam) > totalPages && totalPages > -1) {
    return <>The page does not exists for the current genre</>;
  }

  return (
    <>
      <div className="page-layout">
        <div className="bold-2xl">Top Sellers</div>

        <div className="flex flex-1 justify-end">
          <CatalogGenderFilter
            availableFilters={availableFilters}
            value={genreParam}
            onChange={onGenreChange}
          />
        </div>
      </div>
      <div className="page-layout">
        <CatalogGrid games={games} />
        <div className="w-fit">
          <Button
            label="SEE MORE"
            variant="primary"
            onClick={nextPage}
            disabled={currentPage >= totalPages}
          />
        </div>
      </div>
    </>
  );
}
