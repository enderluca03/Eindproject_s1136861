import { getAllLists } from "../../helpers/api-util";
import NewList from "../../components/list/new-list";
import AllLists from "../../components/list/all-lists";

function allListPage(props) {
  const { lists } = props;

  return (
    <section>
      <section>
        <AllLists items={lists} />
      </section>
      <section>
        <NewList />
      </section>
    </section>
  );
}

export async function getStaticProps() {
  const lists = await getAllLists();

  return {
    props: {
      lists: lists,
    },
    revalidate: 30,
  };
}

export default allListPage;
