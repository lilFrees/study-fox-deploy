import LinksList from "../LinksList";
import ProfileDisplay from "../ProfileDisplay";

function Sidebar() {
  return (
    <div className="flex basis-1/3 flex-col gap-5">
      <ProfileDisplay />
      <LinksList />
    </div>
  );
}

export default Sidebar;
