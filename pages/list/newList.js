import AddList from "../../components/list/add-list/add-list";
import { getAllLists } from "../../helpers/api-util";

function newListPage(props) {
  const { lists } = props;

  return (
    <section>
      <AddList items={lists} />
    </section>
  );
}

export async function getStaticProps() {
  const lists = await getAllLists();

  return {
    props: {
      lists: lists,
    },
    revalidate: 10,
  };
}

export default newListPage;
