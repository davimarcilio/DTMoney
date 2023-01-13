import ReactPaginate from "react-paginate";
import styled from "styled-components";
export const PaginateContainer = styled.form`
  display: flex;
  justify-content: center;
  justify-items: center;
`;

export const Paginate = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  list-style-type: none;
  gap: 0.5rem;
  padding: 0 5rem;

  li a {
    background: ${(props) => props.theme["gray-600"]};
    padding: 0.725rem 1rem;
    border-radius: 6px;
    color: ${(props) => props.theme["gray-400"]};
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    background: transparent;
    color: ${(props) => props.theme["green-500"]};
    padding-top: 0.875rem;
    padding-bottom: 0;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  li.active a {
    background-color: ${(props) => props.theme["green-700"]};
    /* border-color: transparent; */

    color: ${(props) => props.theme["gray-100"]};
    /* min-width: 32px; */
  }
  li.disabled a {
    color: ${(props) => props.theme["gray-600"]};
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
//
