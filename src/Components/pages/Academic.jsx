import React, { useRef, useEffect } from "react";
import './styles/Academic.css';

const education = [
  {
    degree: "Bachelor of Information Technology (BIT)",
    school: "Gandaki University",
    period: "2022 – Present",
    note: "Currently in 8th Semester",
  },
  {
    degree: "+2 Science",
    school: "Srijana Secondary School",
    period: "Completed",
    note: "Passed with B Grade",
  },
  {
    degree: "SEE",
    school: "Srijana Secondary School",
    period: "Completed",
    note: "Passed with A+ Grade",
  },
];

function Academic() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("academic-in-view");
          observer.unobserve(el);
        }
      },
      { rootMargin: "-100px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="academic-section" ref={ref}>
      <div className="academic-header">
        <span className="academic-label">Education</span>
        <h2 className="academic-title">My Academic Journey</h2>
      </div>

      <div className="academic-timeline">
        <div className="academic-line" />

        {education.map((item, i) => (
          <div
            key={item.degree}
            className={`academic-card academic-card-${i}`}
          >
            <div className="academic-icon">
              <span className="academic-dot" />
            </div>

            <div className="academic-content">
              <h3 className="academic-degree">{item.degree}</h3>
              <p className="academic-school">{item.school}</p>
              <div className="academic-meta">
                <span>{item.period}</span>
                <span className="academic-sep" />
                <span>{item.note}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Academic;
