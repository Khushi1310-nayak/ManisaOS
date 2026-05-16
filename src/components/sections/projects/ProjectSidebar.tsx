import { ProjectFilters } from "./ProjectFilters";
/** Projects Sidebar Container **/
import { ProjectQuote } from "./ProjectQuote";

export function ProjectSidebar() {
  return (
    <div className="flex flex-col gap-8 sticky top-32">
      <ProjectFilters />
      <ProjectQuote />
    </div>
  );
}
