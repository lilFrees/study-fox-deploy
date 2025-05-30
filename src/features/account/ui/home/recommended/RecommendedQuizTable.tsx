import { mockQuizzes } from "@/features/account/model/mock-quizzes";
import { Button, Table, TableProps, Tag } from "antd";
import { IoIosStar } from "react-icons/io";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

function RecommendedQuizTable() {
  const columns: TableProps["columns"] = [
    {
      title: "Course Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="text-lg font-semibold">{text}</span>,
    },
    {
      title: "Rate",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => (
        <div className="flex items-center gap-2 text-orange-400">
          <IoIosStar className="text-lg" />
          <span className="leading-0">{rating}</span>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "subject",
      key: "subject",
      width: 1,
      render: (text) => (
        <Tag
          color="white"
          className="min-w-[110px] py-1 text-center text-xs font-semibold text-black uppercase"
        >
          {text}
        </Tag>
      ),
    },
    {
      title: "Questions",
      dataIndex: "questionCount",
      key: "questionCount",
      render: (count) => <span>{count} questions</span>,
    },
    {
      title: "Save",
      key: "actions",
      width: 1,
      className: "text-center",
      render: (_, record) => (
        <Button
          type="text"
          className="text-primary p-0 hover:bg-transparent"
          icon={
            record.saved ? (
              <FaBookmark className="text-2xl" />
            ) : (
              <FaRegBookmark className="text-foreground text-2xl" />
            )
          }
        ></Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={mockQuizzes?.map((value) => ({ ...value, key: value.id }))}
      bordered={false}
    />
  );
}

export default RecommendedQuizTable;
