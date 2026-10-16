import { useEffect, useState } from "react";

function LatestNotes() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function loadPosts() {
            try {
                const response = await fetch("/posts.json");

                if(!response.ok) {
                    throw new Error("게시글을 불러오지 못했습니다.");
                }

                const data = await response.json();
                setPosts(data);
            } catch (err) {
                console.error("Latest Notes 오류:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        loadPosts();
    }, []);
    
    return (
        <section id="notes" className="latest-notes">
            <div className="notes-heading">
                <div>
                    <span className="notes-eyebrow">
                        FROM MY JOURNAL
                    </span>
                    <h2>Latest Notes.</h2>
                    <p>배우고 실험하며 기록한 개발 노트입니다.</p>
                </div>

            <a 
                href="https://piehyun31.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="notes-all-link"
            >
                All Posts ↗
            </a>
        </div>

        {/* 1. 로딩 중일 때 */}
        {loading && (
            <p>게시글을 불러오는 중입니다...</p>
        )}

        {/* 2. 오류가 발생 했을 때 */}
        {error && (
            <p>게시글을 불러오지 못했습니다.</p>
        )}

        {/* 3. 로딩완료 + 오류없음 */}
        {!loading && !error && (
            <div className="notes-list">
                {posts.map((post, index) => (
                    <a
                        key={post.id}
                        href={post.url}
                        target="_blank"
                        rel="noopener nereferrer"
                        className="note-item"
                    >
                        <span className="note-number">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="note-content">
                            <span className="category">
                                {post.category}
                            </span>
                            <h3>{post.title}</h3>
                        </div>

                        <span className="note-date">
                            {post.date}
                        </span>

                        <span className="note-arrow" aria-hidden="true">
                            ↗
                        </span>
                    </a>
                ))}
            </div>
        )} 
    </section>
    );
}

export default LatestNotes;