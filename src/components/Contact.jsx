
import { useState } from "react";

function Contact() {
    const [copied, setCopied] = useState(false);

    const email = "piehyun31@gmail.com";

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
        } catch (error) {
            console.error("이메일 복사 실패:", error);
            setCopied(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-content">
                <span className="contact-label">CONTACT</span>

                <h2>함께할 기회를 찾고 있습니다.</h2>

                <p>
                    데이터 분석과 AI 모델 개발,
                    그리고 이를 실제 서비스로 연결하는
                    개발에 관심을 가지고 있습니다.
                </p>

                <div className="contact-links">
                    <a
                        href="https://github.com/hyunkyung31"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub ↗
                    </a>

                    <a
                        href="https://piehyun31.tistory.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tech Blog ↗
                    </a>

                    <div className="email-contact">
                        <span>{email}</span>

                        <button
                            type="button"
                            onClick={handleCopyEmail}
                        >
                            {copied ? "복사 완료!" : "복사"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
