function getArticleGenerator(articles) {
    const articlesContent = Array.from(articles);
    const contentRef = document.getElementById('content');

    console.log(articlesContent);
    return () => {
        if (!articlesContent.length) {
            return
        }
        let currentArticleValue = articlesContent.shift();
        let newArticle = document.createElement('article');
        newArticle.textContent = currentArticleValue;
        contentRef.appendChild(newArticle)
    }
}
