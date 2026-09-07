export function About() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-screen px-8 pt-32">
        <div>
          <h1 className="text-center font-serif text-6xl font-semibold">
            fosstabs
          </h1>
        </div>
        <div className="py-8">
          <p className="text-lg">
            fosstabs is a open-source project created by Brazilian developer{" "}
            <a
              href="https://github.com/kiravalcante"
              className="text-[#0000FF] underline"
            >
              kiravalcante
            </a>{" "}
            aiming to provide free learning resources for guitarists/bassists.
          </p>
        </div>
        <div>
          <a
            href="https://github.com/kiravalcante/fosstabs"
            className="text-[#0000FF] underline"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
