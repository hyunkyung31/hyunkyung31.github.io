
const careers = [
    {
        company: "한국공항공사",
        position: "시설부 · 선임응급구조사",
        period: "2019.12 – 2026.03",
        duration: "6년 4개월",
        tasks: [
            "공항 내 응급환자 처치·이송 및 구급업무 총괄",
            "연간 예산 계획·집행, 장비 구매 및 관리",
            "교육훈련 계획 수립, 결과보고 및 응급처치 교육",
            "민·관·군 합동 항공기 사고 수습훈련 기획 및 기관별 역할 조율",
        ],
        achievement:
            "합동훈련 본사 우수사례 선정 · 2024년 표창 수상",
    },
    {
        company: "한국마사회",
        position: "응급센터 · 응급구조사",
        period: "2018.03 – 2018.08",
        duration: "6개월",
        tasks: [
            "경마 경기 중 낙마 등 응급상황 발생 시 응급처치 및 병원 이송",
            "안전사고 예방 교육 수행",
        ],
    },
    {
        company: "분당서울대학교병원",
        position: "응급의학과 · 연구원",
        period: "2016.10 – 2018.03",
        duration: "1년 6개월",
        tasks: [
            "심정지 관련 임상연구 5건의 연구 자료 및 IRB 행정 관리",
            "1,000건 이상 규모의 연구 대상자 정보 관리 및 추적조사",
            "Excel 기반 연구 데이터 정리·보관",
            "Case Study Meeting 준비 및 연구 진행 현황 발표",
        ],
        achievement: "임상연구 데이터 관리 및 연구 행정 경험",
    },
    {
        company: "한마음의료재단 하나병원",
        position: "심뇌혈관센터 · 응급구조사",
        period: "2015.04 – 2015.09",
        duration: "6개월",
        tasks: [
            "관상동맥조영술(CAG), TFCA 및 관련 시술 준비",
            "의료기기 및 시술 물품 소독·관리",
        ],
    },
];

function About() {
    return (
        <section id="about" className="about">
            {/* About 소개 */}
            <div className="about-heading">
                <span>ABOUT ME</span>
                <h2>
                    현장에서 쌓은 경험을,
                    <br />
                    개발로 이어갑니다.
                </h2>

                <p className="about-lead">
                    응급의료 현장과 임상연구 업무를 경험하며
                    데이터 관리와 정보 활용의 중요성을 느꼈습니다.
                    이후 Python과 데이터 분석을 공부하기 시작했고,
                    AI 모델 개발부터 모델 서빙,
                    웹 서비스 구현까지 경험을 넓혀왔습니다.
                </p>
            </div>

            {/* 경력 구분 */}
            <div className="about-summary">
                <div className="about-summary-item">
                    <span>AI & DEVELOPMENT</span>
                    <strong>2026</strong>
                    <p>AI 개발 교육 및 프로젝트 수행 경험</p>
                </div>

                <div className="about-summary-item">
                    <span>PREVIOUS CAREER</span>
                    <strong>8년 10개월</strong>
                    <p>응급의료 · 임상연구 분야 직무 경력</p>
                </div>
            </div>

            {/* 01. 개발 학습 및 프로젝트 */}
            <div className="about-section">
                <div className="about-section-heading">
                    <span>01</span>
                    <h3>AI & Development</h3>
                </div>

                <p className="about-section-description">
                    개발 실무 경력과 구분되는 교육 및
                    팀·개인 프로젝트 경험입니다.
                </p>

                <div className="about-development">
                    <span className="about-date">
                        2026.03 – 2026.10
                    </span>

                    <h4>의료·바이오 AI 개발 실무 교육</h4>
                    <p className="about-subtitle">
                        미래융합교육원 · 건양대학교 연계 과정
                    </p>

                    <p>
                        Python·SQL 데이터 분석,
                        머신러닝·딥러닝 모델 개발,
                        React·Django 기반 웹 서비스 구현을
                        학습하고 프로젝트에 적용했습니다.
                    </p>

                    <div className="about-project-highlights">
                        <div>
                            <strong>DUGN (두근)</strong>
                            <p>
                                Clinical AI 모델 개발,
                                Clinical AI·2D XCA·3D CCTA
                                모델 서빙 전담,
                                React 기반 의료진 웹 구현
                            </p>
                        </div>

                        <div>
                            <strong>AngioCAD</strong>
                            <p>
                                관상동맥 영상 분석 및
                                모델 비교 실험
                            </p>
                        </div>

                        <div>
                            <strong>Clinical RF</strong>
                            <p>
                                임상정보 기반 Random Forest
                                분류 모델 개발 및 평가
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 02. 기존 직무 경력 */}
            <div className="about-section">
                <div className="about-section-heading">
                    <span>02</span>
                    <h3>Professional Experience</h3>
                </div>

                <p className="about-section-description">
                    응급의료 및 임상연구 분야에서 수행한
                    업무와 경력입니다.
                </p>

                <div className="about-timeline">
                    {careers.map((career) => (
                        <article
                            className="about-career"
                            key={career.company}
                        >
                            <div className="about-career-date">
                                <span>{career.period}</span>
                                <strong>{career.duration}</strong>
                            </div>

                            <div className="about-career-content">
                                <h4>{career.company}</h4>

                                <p className="about-subtitle">
                                    {career.position}
                                </p>

                                <ul>
                                    {career.tasks.map((task) => (
                                        <li key={task}>{task}</li>
                                    ))}
                                </ul>

                                {career.achievement && (
                                    <p className="about-achievement">
                                        {career.achievement}
                                    </p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* 03. 학력, 자격증, 수상 */}
            <div className="about-section">
                <div className="about-section-heading">
                    <span>03</span>
                    <h3>Education & Credentials</h3>
                </div>

                <div className="about-credentials">
                    <div className="about-credential-card">
                        <h4>Education</h4>

                        <div className="about-credential-item">
                            <strong>
                                대전대학교 · 응급구조학과
                            </strong>
                            <span>
                                2011.03 – 2015.02 · 학사 졸업
                            </span>
                        </div>

                        <div className="about-credential-item">
                            <strong>
                                의료·바이오 AI 개발 실무 교육
                            </strong>
                            <span>
                                미래융합교육원 · 2026.03 – 2026.10
                            </span>
                        </div>
                    </div>

                    <div className="about-credential-card">
                        <h4>Certifications</h4>

                        <div className="about-credential-item">
                            <strong>1급 응급구조사</strong>
                            <span>국가자격</span>
                        </div>

                        <div className="about-credential-item">
                            <strong>ADsP</strong>
                            <span>데이터분석 준전문가</span>
                        </div>
                    </div>

                    <div className="about-credential-card about-awards">
                        <h4>Awards</h4>

                        <div className="about-credential-item">
                            <strong>
                                미래융합교육원 · 공로상
                            </strong>
                            <span>2026.10.02</span>
                            <p>
                                긍정적인 교육환경 조성 및
                                협력 분위기 형성에 기여
                            </p>
                        </div>

                        <div className="about-credential-item">
                            <strong>
                                한국공항공사 · 표창
                            </strong>
                            <span>2024.11</span>
                            <p>
                                민·관·군 합동 항공기 사고
                                수습훈련 기획 및 운영 공로
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
