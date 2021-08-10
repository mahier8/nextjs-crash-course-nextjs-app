import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

function ArticleItem({ article }) {
  return <Link href="/article/[id]" as={`/article/${article.id}`}>
  {/* this is how you add the key to the list */}
      <a className={articleStyles.card}>
          <h3>{article.title} &rarr;</h3>
          <p>{article.body}</p>
      </a>
  </Link>;
}

export default ArticleItem;
