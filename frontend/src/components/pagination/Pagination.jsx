import "./pagination.css";

const pages = [1, 2, 3, 4, 5];

export const Pagination = () => {
  return (
    <div className="pagination">
      <div className="page-bar">
        <div className="left-arrow">{"<"}</div>
        {pages.map((page) => {
          return <div className="page">{page}</div>;
        })}
        <div className="right-arrow">{">"}</div>
      </div>
    </div>
  );
};
