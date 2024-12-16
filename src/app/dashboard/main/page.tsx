
export default function MainPage() {
  return (
    <div className=" w-full h-full flex justify-center items-center">
     <div className="flex flex-col text-center"> <h1 className="text-5xl mb-4">Welcome</h1>
     <p className="max-w-[700px]">In this Pokémon project, I implemented a solution using Next.js to dynamically generate static pages with the Pokémon API. Initially, 151 pages are created and automatically revalidated regularly. I used static site generation with getStaticPaths and getStaticProps to ensure each Pokémon page is loaded efficiently and remains up-to-date without performance issues. Additionally, I integrated dynamic metadata to improve SEO and user experience by displaying relevant information for each Pokémon. For the design, I used Tailwind CSS to create a clean and responsive UI, and the Pokémon API to fetch free and up-to-date data. <span className="text-red-600 underline">If a non-existing Pokémon is requested, users are redirected to a custom 404 error page</span></p></div>
    </div>
  );
}
