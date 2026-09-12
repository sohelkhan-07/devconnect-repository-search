import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-10rem)] bg-[#F8F7FC] px-5 py-14 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#4B6478]">
              About the project
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#25232A] sm:text-4xl">
              Repository Explorer
            </h1>

            <p className="mt-5 text-base leading-7 text-[#706B78] sm:text-lg">
              A simple way to search and explore public GitHub repositories
              without leaving a focused, lightweight interface.
            </p>
          </div>

          <div className="my-12 border-t border-[#E4E1EA]" />

          <div className="grid gap-10 sm:grid-cols-2">
            <section>
              <h2 className="text-lg font-semibold text-[#25232A]">
                What it does
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#706B78]">
                Search public repositories using GitHub&apos;s repository search
                API. Results include useful information such as the repository
                description, programming language, star count, and last update
                date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#25232A]">
                Built with
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "JavaScript", "Tailwind CSS", "GitHub REST API"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="border border-[#D0D7DE] bg-white px-3 py-1.5 text-sm text-[#656D76]"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </section>
          </div>

          <section className="mt-12 border-t border-[#E4E1EA] pt-10">
            <h2 className="text-lg font-semibold text-[#25232A]">
              Project purpose
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#706B78]">
              This project was built as part of the DevConnect Verified Frontend
              Internship, with a focus on working with real API data, handling
              different application states, and building a responsive interface.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
