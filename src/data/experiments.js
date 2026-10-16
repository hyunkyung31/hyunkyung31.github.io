export const experiments = [
    {
        id: "yolo-detection",
        number: "01",
        title: "YOLO & Faster R-CNN",
        subtitle: "관상동맥 협착 병변 탐지 모델 비교",
        category: "Object Detection",
        dataset: "ARCADE",

        description:
            "작은 협착 병변의 탐지 성능을 개선하기 위해 CLAHE, Gamma Correction 등 영상 전처리를 적용하고 YOLO11과 Faster R-CNN을 비교했습니다.",
        
        methods: [
            "CLAHE · Gamma · Frangi 영상 전처리",
            "YOLO11n / YOLO11s 모델 학습",
            "Faster R-CNN 탐지 성능 비교",
            "전처리 방법에 따른 성능 변화 분석",
        ],

        metrics: [
            {
                label: "Original · mAP50",
                value: "0.320",
                note: "YOLO11n · 100 epoch · best.pt",
            },
            {
                label: "CLAHE + Gamma · mAP50",
                value: "0.330",
                note: "YOLLOn · 동일 검증 데이터",
            },
        ],

        cover:
            "https://raw.githubusercontent.com/hyunkyung31/xca-yolo-experiments/main/results/figures/yolo11n_final_validation.png",
        coverAlt: "YOLO11n 전처리별 탐지 성능 비교",
        coverNote: "YOLO11n 검증 데이터 기준 성능 비교",

        techStack: ["Python", "Pytorch", "YOLO11", "OpenCV"],

        github:
            "https://github.com/hyunkyung31/xca-yolo-experiments",
    },

    {
        id: "angiocad-analysis",
        number: "02",
        title: "AngioCAD 영상 분석",
        subtitle: "혈관 분할부터 환자 단위 Fusion까지",
        category: "Medical Image Analysis",
        dataset: "DCA1 · AngioCAD",

        description:
            "관상동맥 조영술 데이터의 전처리와 환자 단위 분할을 진행하고, 혈관 분할·협착 분류·영상과 임상정보 결합 모델의 성능과 한계를 비교했습니다.",
        methods: [
            "환자 단위 데이터 분할 및 누수 점검",
            "U-Net · MedicalSAM 혈관 분할 비교",
            "ResNet 기반 협착 분류 실험",
            "Clinical · XCA Late Fusion 성능 분석",
        ],

        metrics:[
            {
                label: "U-Net 128 · Raw Dice",
                value: "0.7259",
                note: "DCA1 · 이미지 단위 5-fold OOF",
            },
            {
                label: "Late Fusion · ROC-AUC",
                value: "0.8662",
                note: "AngioCAD · 환자 단위 5-fold OOF",
            },
        ],

        cover:
            "https://raw.githubusercontent.com/hyunkyung31/angiocad-experiments/main/figures/portfolio_cover.png",
        coverAlt: "DCA1 혈관 분할 및 AngioCAD Fusion 결과",
        coverNote:
            "Fusion에서 AUROC는 증가했지만 민감도는 0.7637 → 0.7089로 감소",
        
        techStack:[
            "Python",
            "PyTorch",
              "OpenCV",
              "Scikit-learn",
            ],
        
        github:
            "https://github.com/hyunkyung31/angiocad-experiments",
    },
    {
        id: "clinical-cad-screening",
        number: "03",
        title: "Clinical RF",
        subtitle: "임상정보 기반 CAD 선별 모델",
        category: "Machine Learning",
        dataset: "Z-Alizadeh Sani Extension",

        description:
            "303명의 임상 데이터를 활용해 누수 가능 변수를 제외하고 Nested Cross-Validation으로 모델을 비교한 뒤, Random Forest의 확률 보정을 실험했습니다.",

        methods: [
            "임상 데이터 전처리 및 누수 변수 제외",
            "Nested CV 기반 XGBoost · RF · ANN 비교",
            "Random Forest 후보 및 Threshold 선택",
            "Sigmoid · Isotonic 확률 보정 비교",
        ],

        metrics: [
          {
            label: "Random Forest · ROC-AUC",
            value: "0.9278",
            note: "Outer 10 / Inner 5 Nested CV",
          },
          {
            label: "Random Forest · Sensitivity",
            value: "0.9537",
            note: "Nested CV · 환자 단위 OOF",
          },
        ],

        cover:
            "https://raw.githubusercontent.com/hyunkyung31/clinical-cad-screening/main/figures/portfolio_cover.png",
        coverAlt: "Clinical RF 내부 검증 및 확률 보정 결과",
        coverNote:
            "별도 5-fold 보정 비교에서 Sigmoid Brier 0.1245 → 0.1015",

        techStack: [
            "Python",
            "Scikit-learn",
            "Random Forest",
            "XGBoost",
        ],
        github:
      "https://github.com/hyunkyung31/clinical-cad-screening",
  },
];

    
