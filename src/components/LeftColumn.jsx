import TableComponent from "./TableComponent";

const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col p-2 justify-between">
      <div>
        <TableComponent />
      </div>
    </div>
  );
};

export default LeftColumn;
