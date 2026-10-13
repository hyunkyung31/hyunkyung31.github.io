function About() {
    const skills = {
        "Data & AI" : [
            "Python",
            "Pandas",
            "Scikit-learn",
            "PyTorch",
            "TensorFlow",
        ],
        "Web & Backend": [
            "React",
            "JavaScript",
            "TypeScript",
            "Django",
            "REST API",
        ],
        "Database & Tools": [
            "PostgreSQL",
            "SQL",
            "Git",
            "Docker",
        ],
    };

    return (
        <section id="about" className="about">
            <div className="about-heading">
                <span>ABOUT ME</span>
                <h2>기술을 배우고, 문제를 해결하는 과정</h2>
            </div>

            <div className="about-content">
                <div className="about-intro">
                    <h3>
                        현장의 경험을 바탕으로,
                        <br />
                        데이터를 다루고 서비스를 만듭니다.
                    </h3>

                    <p>
                        의료 현장과 연구 업무를 경험하며
                        데이터의 중요성을 체감했습니다.
                        이후 Python과 머신러닝·딥러닝을 공부하며
                        데이터 분석과 AI 모델 개발로 영역을 확장했습니다.
                    </p>

                    <p>
                        현재는 모델 학습과 성능 검증뿐 아니라
                        React와 Django를 활용하여
                        분석 결과를 실제 서비스에 연결하는
                        개발 경험을 쌓고 있습니다.
                    </p>
                </div>

                <div className="about-skilss">
                    <h3>Technical Skills</h3>

                    {Object.entries(skills).map(
                        ([category, items]) => (
                            <div className="skill-group" key={category}>
                                <h4>{category}</h4>

                                <div className="skill-items">
                                    {items.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                    </div>
                                </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default About;