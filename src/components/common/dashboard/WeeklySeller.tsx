export interface WeeklyProps {}

export function Weekly() {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
      <div className="flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">Weekly Top Seller</h2>
        <a href="#" className="ml-auto text-primary truncate">
          Show More
        </a>
      </div>
      <div></div>
    </div>
  );
}
