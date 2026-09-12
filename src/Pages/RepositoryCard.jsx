import { ExternalLink, Star, CircleDot } from "lucide-react";

const RepositoryCard = ({ repository }) => {
  return (
    <article className="mx-auto mt-10 w-full border border-[#E4E1EA] bg-white">
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <a
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold tracking-tight text-[#0969DA] hover:underline"
          >
            {repository.full_name}
          </a>

          <a
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${repository.full_name} on GitHub`}
            className="mt-1 shrink-0 text-[#656D76] transition-colors hover:text-[#0969DA]"
          >
            <ExternalLink size={17} strokeWidth={1.8} />
          </a>
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#706B78]">
          {repository.description || "No description provided."}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#656D76]">
          <span className="flex items-center gap-2">
            <CircleDot size={14} strokeWidth={2} />
            {repository.language || "Not specified"}
          </span>

          <span className="flex items-center gap-2">
            <Star size={15} strokeWidth={1.8} />
            {repository.stargazers_count} stars
          </span>

          <span>
            Updated {new Date(repository.updated_at).toLocaleDateString()}
          </span>
        </div>
      </div>
    </article>
  );
};

export default RepositoryCard;
