export default function Header() {
  return (
    <section className="flex gap-4 md:flex-row flex-col justify-between items-center my-16">
      <h1 className="text-4xl md:text-6xl cursor-pointer">Advisors</h1>
      <p className="text-lg">
        A test made from{' '}
        <a href="https://reactjs.org/" className="underline hover:text-sky-600">
          ReactJS
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          className="underline hover:text-sky-600"
        >
          Tailwindcss
        </a>{' '}
        by PhinNL
      </p>
    </section>
  )
}
