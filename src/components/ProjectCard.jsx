
import { useState, useEffect } from "react";

const galleryGroups = [
    { label: "Overview", indices: [0] },
    { label: "Clinical AI", indices: [1, 2, 3] },
    { label: "2D XCA", indices: [4, 5] },
    { label: "3D CCTA", indices: [6, 7] },
];

function ProjectCard({ project }) {
    const [activeImage, setActiveImage] = useState(0);
    
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const images = project.gallery || [];
    const selectedImage = images[activeImage];

    const changeImage = (direction) => {
        setActiveImage((current) => {
        return (current + direction + images.length)
            % images.length;
        });
    };

    useEffect(() => {
        if (!isLightboxOpen || images.length === 0) return;

        const handlekeyDown = (event) => {
            if (event.key === "Escape") {
                setIsLightboxOpen(false);
            }
            if (event.key === "ArrowRight") {
                changeImage(1);
            }
            if (event.key === "ArrowLeft") {
                changeImage(-1);
            }
        };
        window.addEventListener("keydown", handlekeyDown);

        return () => {
            window.removeEventListener("keydown", handlekeyDown)
        };
    }, [isLightboxOpen, images.length]);
    

    return (
        <article
            className={`project-card ${
                project.featured ? "project-card--featured" : ""
            }`}
        >
            <div className="project-content">
                {project.image && (
                    <div className="dugn-gallery">
                        <div className="dugn-gallery-tabs">
                            {galleryGroups.map((group) => {
                                const firstIndex = group.indices.find(
                                    (index) => images[index]
                                );

                                if (firstIndex === undefined) {
                                    return null;
                                }

                                const isActive =
                                    group.indices.includes(activeImage);

                                return (
                                    <button
                                        key={group.label}
                                        type="button"
                                        className={isActive ? "active" : ""}
                                        aria-pressed={isActive}
                                        onClick={() =>
                                            setActiveImage(firstIndex)
                                        }
                                    >
                                        {group.label}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="dugn-gallery-preview">
                            <button
                                type="button"
                                className="dugn-preview-button"
                                onClick={() => setIsLightboxOpen(true)}
                                aria-label="이미지 크게 보기"
                            >
                                <img
                                    src={selectedImage?.image || project.image}
                                    alt={selectedImage?.title || project.title}
                                />
                                <span className="dugn-zoom-label">
                                    ⤢ 크게 보기
                                </span>
                            </button>
                        </div>

                        <div className="dugn-gallery-footer">
                            <div>
                                <span className="dugn-gallery-count">
                                    {String(activeImage + 1).padStart(2, "0")}
                                    {" / "}
                                    {String(images.length).padStart(2, "0")}
                                </span>
                                <p>
                                    {selectedImage?.title || project.title}
                                </p>
                            </div>

                            {images.length > 1 && (
                                <div className="dugn-gallery-arrows">
                                    <button
                                        type="button"
                                        onClick={() => changeImage(-1)}
                                        aria-label="이전 이미지"
                                    >
                                        ←
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => changeImage(1)}
                                        aria-label="다음 이미지"
                                    >
                                        →
                                    </button>
                                </div>
                            )}
                        </div>

                        {project.imageNote && (
                            <p className="dugn-gallery-note">
                                {project.imageNote}
                            </p>
                        )}
                    </div>
                )}

                <div className="project-info">
                    <span className="project-category">
                        {project.category}
                    </span>

                    <h3>{project.title}</h3>
                    <h4>{project.subtitle}</h4>
                    <p>{project.description}</p>

                    {project.role?.length > 0 && (
                        <div className="project-role">
                            <strong>주요 구현</strong>

                            {project.role.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                        </div>
                    )}

                    <div className="tech-stack">
                        {project.techStack.map((tech) => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View GitHub →
                        </a>
                    )}
                </div>
            </div>

            {isLightboxOpen && (
                <div
                    className="dugn-lightbox"
                    role="presentation"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setIsLightboxOpen(false);
                        }
                    }}
                >
                    <div
                        className="dugn-lightbox-content"      
                        role="dialog"
                        aria-modal="true"
                        aria-label="DUGN 프로젝트 이미지 확대"
                    >
                        <div className="dugn-lightbox-header">
                            <div>
                                <strong>
                                    {selectedImage?.title || project.title}
                                </strong>
                                <span>
                                    {activeImage + 1} / {images.length}
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsLightboxOpen(false)}
                                aria-label="확대창 닫기"
                            >
                                ✕
                            </button>
                        </div>

                        <img
                            className="dugn-lightbox-image"
                            src={selectedImage?.image || project.image}
                            alt={selectedImage?.title || project.title}
                        />

                        <div className="dugn-lightbox-controls">
                            <button
                                type="button"
                                onClick={() => changeImage(-1)}
                            >
                                ←  이전
                            </button>

                            <span>ESC 키로 닫기</span>

                            <button
                                type="button"
                                onClick={() => changeImage(1)}
                            >
                                다음 →
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
}

export default ProjectCard;
