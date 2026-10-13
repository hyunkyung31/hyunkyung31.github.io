// Experiments : 직접 수행한 모델 학습, 성능비교, 전처리, 문제해결 과정

export const experiments = [
    {
        id : "yolo-detection",
        number : "01",
        title: "YOLO & Faster R-CNN",
        subtitle: "관상동맥 협착 병변 탐지 모델 비교",

        category: "Object Detection",
        dataset: "ARCADE",

        description :
            "관상동맥조영술 영상에서 협착 병변을 탐지하기 위해 영상 전처리와 객체 탐지 모델을 비교 실험했습니다.",

        methods : [
            "CLAHE 및 Gamma Correction 전처리",
            "YOLO11n / YOLO11s 모델 학습",
            "Faster R-CNN 모델 비교",
            "AP50 기반 성능 평가",
        ],

        metrics: [
            {
                label: "YOLO11n Original",
                value: "0.3193",
            },
            {
                label: "YOLO11n CLAHE + Gamma",
                value: "0.3458",
            },
        ],

        techStack: [
            "Python",
            "Pytorch",
            "YOLO11n",
            "OpenCV",
        ],

        github :
            "https://github.com/hyunkyung31/DeepLearningProject",
    },

    {
        id: "clinical-ml",
        number: "02",
        title: "Clinical ML",
        subtitle: "임상정보 기반 관상동맥 위험도 예측",

        category: "Machine Leanring",
        dataset: "Z-Alizadeh Sani Extension",

        description:
            "임상 데이터를 활용하여 CAD 위험도를 예측하고, 교차검증과 모델 해석을 통해 예측 결과를 검토했습니다.",
        
        methods: [
            "임상 데이터 전처리 및 데이터 누수 점검",
            "Logistic Regression / SVM / Random Forest / XGBoost 비교",
            "Nested Cross Validation",
            "SHAP 기반 주요 예측 요인 분석",
        ],

        metrics: [],

        techStack : [
            "Python",
            "Scikit-learn",
            "XGBoost",
            "SHAP",
        ],

        github:
            "https://github.com/hyunkyung31/coronary-ai-ml-dl",
    }
]