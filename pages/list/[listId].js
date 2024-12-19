import { Fragment } from "react";

import { getAllLists, getListById } from "../../helpers/api-util";
import ListContent from "../../components/list/list-content";
import ListSummary from "../../components/list/list-summary";
import ListPoints from "../../components/list/list-points";
import AddItem from "../../components/list/add-list/add-item";

function ListDetailPage(props) {
  const list = props.selectedList;

  const listItems = list.items;
  const listItemsArray = Object.keys(listItems).map((key) => listItems[key]);

  if (!list) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <ListSummary title={list.title} />
      <ListContent>
        <p>{list.description}</p>
      </ListContent>
      <ListPoints list={list} listId={list.listId} itemId={list.items} />
      <AddItem listId={list.listId} itemId={list.items} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const listId = context.params.listId;

  const list = await getListById(listId);

  return {
    props: {
      selectedList: list,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const lists = await getAllLists();

  const paths = lists.map((list) => ({ params: { listId: list.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default ListDetailPage;
