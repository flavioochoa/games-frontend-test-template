"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { GameApiResponse } from "@/services/games.service";
import { useTransition } from "react";
import Loading from "@/app/loading";
import CatalogGrid from "./catalog-grid";
import CatalogGenderFilter from "./catalog-gender-filter";

export default function CatalogPage(props: GameApiResponse) {
  const { games, totalPages, currentPage, availableFilters } = props;

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const genreParam = searchParams.get("genre") ?? "All";

  const [isPending, startTransition] = useTransition();

  const onGenreChange = async (event: React.FormEvent<HTMLSelectElement>) => {
    const genreValue = event.currentTarget.value;

    const params = new URLSearchParams(searchParams);

    params.set("genre", genreValue);
    params.set("page", "1");

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const nextPage = async () => {
    if (currentPage <= totalPages) {
      const params = new URLSearchParams(searchParams);

      const nextPage = currentPage + 1;

      params.set("page", nextPage.toString());

      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`);
      });
    }
  };

  if (isPending) {
    return <Loading />;
  }

  return (
    <div>
      <div>Top Sellers</div>
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
