import SHome from './style';

export default function Home() {
  return (
    <SHome>
      <h3>Welcome trainer!</h3>
      <p>
        Tired to not know what is a move or a pokemon when you see it&apos;s
        name in another language? Want a quick way to search the names when
        you&apos;re in an online battle, because you played the game in your
        native language, but have the opponent use a Pokemon coming from a save
        with a language you don&apos;t speak?
      </p>
      <p className="eyeCatch">This tool is for you!</p>
      <p>
        You just have to write the name in the language of your choice into the
        input field, and it will give you the name in french, english and
        japanese.
      </p>
      <p className="eyeCatch">But there is more!</p>
      <p>
        Click in one of the entries of the list to see more details about what
        you searched. And it&apos;s still displayed in the three languages!
      </p>
    </SHome>
  );
}
