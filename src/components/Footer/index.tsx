import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-800 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 px-4 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-xs text-lime-400 font-mono mb-2">
              Currently available for work
            </p>
            <h3 className="text-2xl font-medium text-white">
              Let&apos;s build something great together.
            </h3>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <SocialLinks />
          </div>
        </div>

        <div className="flex justify-center pt-2 border-t border-neutral-800/60">
          <p className=" text-neutral-300">
            © {year} Diego Torres. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
