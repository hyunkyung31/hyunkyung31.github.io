import './App.css'
import Navbar from './components/Navbar'
import { projects } from './data/projects';
import ProjectCard  from './components/ProjectCard';
import { experiments } from './data/experiments';
import ExperimentCard from './components/ExperimentCard';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

//대표 프로젝트 찾기
const featuredProject = projects.find(
  (project) => project.featured === true
);

//대표 프로젝트를 제외한 나머지 프로젝트
const otherProjects = projects.filter(
  (project) => project.featured !== true
)


  return (
    <>
      <Navbar />

      <section id="home" className="hero">
        <div className="hero-container">

          {/* 왼쪽: 소개 영역 */}
          <div className="hero-content">
            <span className="hero-eyebrow">
              DATA · AI · DEVELOPMENT 
            </span>

            <h1 className="hero-title">
              관찰하고, 분석하고,
              <br />
              <span>직접 구현합니다.</span>
            </h1>

            <p className="hero-name">
              황현경 <span>. Data & AI Developer</span>
            </p>

            <p className="hero-description">
              데이터 분석과 모델 검증부터
              실제 서비스 개발까지,
              직접 고민하고 구현한 과정을 기록합니다.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="hero-primary">
                Explore My Work <span aria-hidden="true">↗</span>
              </a>

              <a href="#about" className="hero-secondary">
                About Me
              </a>
            </div>
          </div>

          {/* 오른쪽: 프로필 비주얼 */}
          <div className="hero-visual">
            <div className="hero-artwork">

              {/* 원형 라인 장식 */}
              <div className="hero-shape-circle" />

              <span className="hero-signature">
                Hyunkyung
              </span>

              <span className="hero-side-note">
                DATA
                <br />
                ANALYSIS
                <br />
                MACHINE LEARNING
                <br />
                MEDICAL AI
              </span>

              {/* 실제 프로필 사진 */}
              <img
                src="/images/profile-cutout.png"
                alt="황현경 프로필 사진"
                className="hero-photo"
              />
              
            </div>

            <span className="hero-visual-caption">
              PORTFOLIO / 2026
            </span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SELECTED WORK · EXPERIMENTS · JOURNAL</span>

          <a href="#projects">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>


      <section id="projects" className="projects">
        <h2>Selected Projects</h2>

        <p>
          직접 참여한 프로젝트와 구현 경험을 소개합니다.
        </p>

        <div className="project-list">
          {featuredProject && (
            <div className="featured-project">
              <ProjectCard project={featuredProject} />
            </div>
          )}

          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      <section id="experiments" className="experiments">
          <div className="experiments-heading">
            <span>MODEL DEVELOPMENT & VALIDATION</span>
            <h2>Experiments & Research</h2>
            <p>
              직접 수행한 모델 학습, 전처리 및 기능 성능 검증 과정을 기록했습니다.
            </p>
          </div>
          
          <div className="experiment-list">
            {experiments.map((experiment) => (
              <ExperimentCard
                key={experiment.id}
                experiment={experiment}
              />
            ))}
          </div>
      </section> 
      <About />   
      <Contact />
      <Footer />
    </>
  )
}

export default App
