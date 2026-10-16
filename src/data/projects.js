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
            "Clinical AI · 2D XCA · 3D CCTA 모델 서빙 전담",
            "Clinical AI 머신러닝 모델 개발 및 서비스 연동",
            "React 기반 의료진 워크스테이션 및 주요 업무 화면 구성",
            "SHAP 기반 예측 변수 기여도 시각화",
            "데이터베이스 설계 참여",
        ],
        techStack : [
            "React",
            "TypeScript",
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
        role: [],
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



