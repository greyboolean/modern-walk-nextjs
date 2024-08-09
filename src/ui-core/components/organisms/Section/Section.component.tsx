import { Loading } from "../../atoms";
import { SectionProps } from "./Section.types";

function Section({ heading, loading, children }: SectionProps) {
  return (
    <div className="mb-12">
      <h1 className="mx-4 mb-8 mt-0 text-2xl font-black">{heading}</h1>
      {loading ? <Loading /> : children}
    </div>
  );
}

export default Section;
