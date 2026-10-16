
function ExperimentCard({ experiment }) {
  return (
    <article className="experiment-card">
      <div className="experiment-header">
        <span className="experiment-number">
          {experiment.number}
        </span>

        <div>
          <span className="experiment-category">
            {experiment.category}
          </span>
          <h3>{experiment.title}</h3>
          <p>{experiment.subtitle}</p>
        </div>
      </div>

      <p className="experiment-description">
        {experiment.description}
      </p>

      {experiment.cover && (
        <figure className="experiment-cover">
          <img
            src={experiment.cover}
            alt={experiment.coverAlt || experiment.title}
            loading="lazy"
          />

          {experiment.coverNote && (
            <figcaption>
              {experiment.coverNote}
            </figcaption>
          )}
        </figure>
      )}

      <div className="experiment-methods">
        <h4>Methods</h4>
        <ul>
          {experiment.methods.map((method) => (
            <li key={method}>{method}</li>
          ))}
        </ul>
      </div>

      {experiment.metrics?.length > 0 && (
        <div className="experiment-metrics">
          {experiment.metrics.map((metric) => (
            <div
              className="metric-item"
              key={metric.label}
            >
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>

              {metric.note && (
                <small className="metric-note">
                  {metric.note}
                </small>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="experiment-footer">
        <span>Dataset: {experiment.dataset}</span>

        <a
          href={experiment.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repository →
        </a>
      </div>
    </article>
  );
}

export default ExperimentCard;
