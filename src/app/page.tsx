import StatistkaBook from "./books/bok/statistkabppk/page";
import Books from "./books/page";

export default function Home() {
  return (
   <div className=" container px-32 p-2">
  <StatistkaBook />
  <Books />
   </div>
  );
}
