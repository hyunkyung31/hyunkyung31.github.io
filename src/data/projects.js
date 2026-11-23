export const projects = [
    {
        id : "dugn",
        title : "DUGN (두근)",
        subtitle : "AI 기반 심혈관 임상의사결정지원 시스템",
        category : "Featured Project",
        type : "Team Project",
        description :
            "임상 데이터와 의료영상을 활용한 AI 분석 결과를 의료진의 진료 업무와 연결하는 통합 시스템입니다.",
        role : [
            "React 기반 의료진 웹 개발 및 환자별 조회·필터링 기능 구현",
            "Django 백엔드 API 연동 및 서비스 기능 통합",
            "Clinical AI 모델 개발·검증 및 FastAPI 추론 API 구현",
            "2D XCA AI 모델 개발·실험 및 영상 전처리 성능 비교",
            "SHAP 분석 결과 및 3D CCTA 영상 시각화 연동",
            "GPU VM 환경의 서비스 배포 및 HTTPS 적용",
        ],
        techStack : [
            "React",
            "JavaScript",
            "Python",
            "Django",
            "PostgreSQL",
            "Machine Learning",
        ],
        github : "https://github.com/hyunkyung31/final_clinician-web",

        featured: true,

        image: "/images/projects/dugn-main.png",

        
        gallery: [
            {
                title: "의료진 대시보드",
                image: "/images/projects/dugn-main.png",
            },
            {
                title: "Clinical AI 분석",
                image: "/images/projects/dugn-clinical.png",
            },
            {
                title: "SHAP 변수 기여도",
                image: "/images/projects/dugn-shap.png",
            },
            {
                title: "혈액검사 추적관찰",
                image: "/images/projects/dugn-lab.png",
            },
            {
                title: "2D XCA 분석 결과",
                image: "/images/projects/dugn-xca.png",
            },
            {
                title: "2D XCA 의심 영역",
                image: "/images/projects/dugn-xca-frame.png",
            },
            {
                title: "3D CCTA 렌더링",
                image: "/images/projects/dugn-ccta.png",
            },
            {
                title: "3D CCTA 결과보고서",
                image: "/images/projects/dugn-ccta-report.png",
            },
        ],


        imageNote:
            "기존 시연 화면을 바탕으로 재구성한 포트폴리오 이미지입니다.",
    },

    {
        id : "eye-to-ai",
        title : "EYE TO AI",
        subtitle : "안구 데이터 기반 만성질환 예측",
        category : "Machine Learning",
        type : "Team Project",
        description :
            "안구 데이터를 활용해 고혈압 및 당뇨 관련 분류 모델을 개발하고 Django 웹서비스와 연결한 프로젝트입니다. ",
        role: [
            "팀 프로젝트 내 머신러닝 모델 관련 개인 추가 실험",
            "데이터 전처리 및 변수 특성 분석",
            "Logistic Regression·Random Forest·XGBoost 모델 비교",
            "GridSearchCV·Optuna 기반 하이퍼파라미터 탐색",
            "분류 임계값에 따른 성능 변화 분석",

        ],
        techStack : ["Python", "Scikit-learn", "Django"],
        github : "https://github.com/hyunkyung31/Django_project_2team",
        featured : false,
    },
    { 
        id : "xca-platform",
        title : "Coronary AI Platform",
        subtitle : "관상동맥 영상 분석 및 서비스 구현",
        category : "Deep Learning",
        type : "Team Project",
        description :
            "관상동맥조영술 영상 분석을 바탕으로 AI모델과 웹·앱 서비스를 연결한 프로젝트입니다.",
        role : [],
        techStack : ["Python", "Pytorch", "React", "Django", "Flutter"],
        github : "https://github.com/hyunkyung31/DeepLearningProject",
        featured : false,
    },
];



