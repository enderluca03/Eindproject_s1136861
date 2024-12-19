import { getAllLists } from "../helpers/api-util";
import AllLists from "../components/list/all-lists";
import NewList from "../components/list/new-list";

function HomePage(props) {
  const { lists } = props;

  return (
    <section>
      <section>
        <p>Make a new list based on your inspiration.</p>
        <p>Bucket lists, what groceries to get or which movies to watch.</p>
        <p>Anything you can fink of can be made!</p>
      </section>
      <section>
        <AllLists items={lists} />
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
    revalidate: 60,
  };
}

export default HomePage;
