import { useState } from "react";
import RepositoryCard from "./RepositoryCard";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();

    if (!search.trim()) return;

    setLoading(true);
    setError("");
    setRepositories([]);
    setHasSearched(true);

    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(
          search,
        )}`,
      );

      if (!response.ok) {
        throw new Error("Unable to fetch repositories.");
      }

      const data = await response.json();

      setRepositories(data.items || []);
    } catch {
      setRepositories([]);
      setError("Unable to fetch repositories. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-[calc(100vh-10rem)] w-full bg-[#F8F7FC] px-6 py-20">
      <h2 className="text-center text-[40px] font-bold tracking-tight text-[#25232A]">
        Explore Public Repositories
      </h2>

      <p className="mt-4 text-center text-base text-[#706B78]">
        Search and discover repositories from public sources.
      </p>

      <div className="mx-auto mt-20 w-full max-w-4xl">
        <form onSubmit={handleSearch}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-2">
            <label htmlFor="repository-search" className="sr-only">
              Search repositories
            </label>

            <input
              id="repository-search"
              className="h-12 w-full rounded-lg border border-[#D0D7DE] bg-white px-3 outline-none focus:border-[#4B6478]"
              type="text"
              placeholder="Search repositories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              className="h-12 shrink-0 cursor-pointer rounded-lg bg-[#4B6478] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#3D5365]"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="mx-auto w-full max-w-4xl">
        {loading && (
          <p
            className="mt-10 text-center text-sm text-[#706B78]"
            aria-live="polite"
          >
            Searching repositories...
          </p>
        )}

        {error && (
          <p className="mt-10 text-center text-sm text-[#CF222E]" role="alert">
            {error}
          </p>
        )}

        {!loading && !error && hasSearched && repositories.length === 0 && (
          <p className="mt-10 text-center text-sm text-[#706B78]">
            No repositories found for "{search}".
          </p>
        )}

        {!loading &&
          !error &&
          repositories.map((repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))}
      </div>
    </section>
  );
};

export default Hero;
