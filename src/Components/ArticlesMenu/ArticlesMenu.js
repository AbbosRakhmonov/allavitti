import React, { useCallback, useState } from "react";
import { map, uniqueId } from "lodash";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useNavigate } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import DetectScreenSize from "../../Hooks/DetectScreenSize";

function ArticlesMenu({ articles, id }) {
  const navigate = useNavigate();
  const { isMobile } = DetectScreenSize();

  const [openArticles, setOpenArticles] = useState(false);
  const handleClickButton = useCallback(() => {
    setOpenArticles(!openArticles);
  }, [openArticles])
  const onClickTitle = useCallback((e) => {
    const id = e.target.getAttribute("data_id");
    navigate(`/articles/${id}`);
    if (isMobile) setOpenArticles(true);
  }, [isMobile, navigate]);
  return (
    <div
      className={`rightOfBottomSection position-absolute vh-100 ${
        openArticles ? "closedMenu" : ""
      }`}
    >
      <div className={`articles-menu`}>
        {map(articles, (article) => (
          <ArticleCard
            key={uniqueId("article_")}
            activeArticleId={id}
            article={article}
            onClickTitle={onClickTitle}
          />
        ))}
      </div>
      <button
        type={"button"}
        className={`actionBtn ${openArticles ? "openArticleBoxButton" : ""}`}
        onClick={handleClickButton}
      >
        <IoChevronForward />
      </button>
    </div>
  );
}

export default ArticlesMenu;
