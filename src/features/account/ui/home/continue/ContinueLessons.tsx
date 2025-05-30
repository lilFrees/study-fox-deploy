import DeleteIcon from "@/assets/icons/delete";
import PlayIcon from "@/assets/icons/play";
import { Button, Typography } from "antd";

function ContinueLessons() {
  return (
    <div className="flex items-center gap-5">
      {Array.from({ length: 2 }).map((e, i) => (
        <div
          className="bg-foreground/10 flex basis-1/2 justify-between rounded-2xl p-5"
          key={i}
        >
          <div className="flex flex-col gap-3">
            <Typography.Title level={4} className="text-2xl">
              Quiz Title
            </Typography.Title>
            <Typography.Text className="text-sm text-gray-500">
              Quiz Description
            </Typography.Text>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              type="text"
              className="hover:text-primary flex items-center justify-end gap-2 p-0 hover:bg-transparent"
            >
              Resume <PlayIcon className="text-2xl" />
            </Button>
            <Button
              type="text"
              className="hover:text-primary flex items-center justify-end gap-2 p-0 hover:bg-transparent"
            >
              Forget <DeleteIcon className="text-2xl" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContinueLessons;
