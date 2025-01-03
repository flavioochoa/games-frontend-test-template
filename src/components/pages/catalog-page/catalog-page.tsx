"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/app/loading";
import CatalogGrid from "./catalog-grid";
import CatalogGenderFilter from "./catalog-gender-filter";
import useGameCatalogPage from "./useGameCatalogPage";

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
  };

  const nextPage = async () => {
    if (currentPage <= totalPages) {
      const nextPage = currentPage + 1;

      const params = new URLSearchParams(searchParams);
      params.set("page", nextPage.toString());

      updateRouteParams(params);

      await loadMoreGames({
        genre: genreParam,
        page: nextPage,
      });
    }
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

  if (parseInt(pageParam) > totalPages) {
    return <>The page does not exists for the current genre</>;
  }

  return (
    <div>
      <CatalogGenderFilter
        availableFilters={availableFilters}
        value={genreParam}
        onChange={onGenreChange}
      />

      <CatalogGrid games={games} />

      <button disabled={currentPage >= totalPages} onClick={nextPage}>
        See more
      </button>
    </div>
  );
}
