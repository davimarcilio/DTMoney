import { CaretLeft, CaretRight } from "phosphor-react";
import { Paginate, PaginateContainer } from "./style";

export function Pagination() {
  return (
    <PaginateContainer>
      <Paginate
        containerClassName={"PaginateRContainer"}
        previousLabel={<CaretLeft size={24} />}
        nextLabel={<CaretRight size={24} />}
        pageCount={3}
      />
    </PaginateContainer>
  );
}
