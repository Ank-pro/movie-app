import "./pagination.css";

export const Pagination = ({totalPages,setCurrentPage}) => {
  const pages = [];
  for(let i = 1;i <= totalPages;i++){
    pages.push(i);
  }
  return (
    <div className="pagination">
      <div className="page-bar">
        <div className="left-arrow">{"<"}</div>
        {pages.map((page) => {
          return <div className="page" key={page} onClick={()=> setCurrentPage(page)}>{page}</div>;
        })}
        <div className="right-arrow">{">"}</div>
      </div>
    </div>
  );
};
