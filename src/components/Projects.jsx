// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    description:
      "Built an unsupervised learning pipeline using Isolation Forest and Autoencoders to detect anomalies in transaction data.",
    tech: "Python, Scikit-learn, Keras, Pandas",
    link: "https://github.com/MuditNautiyal-21/Credit-Card-Fraud-Detection",
  },
  {
    title: "Tesla Stock Forecasting",
    description:
      "Performed time series forecasting on Tesla stock using statistical modeling and RMSE-based model evaluation.",
    tech: "Python, Pandas, Matplotlib, ARIMA",
    link: "https://github.com/MuditNautiyal-21/tesla-stock-analysis-project-python",
  },
  {
    title: "Uber Drive Analysis",
    description:
      "Exploratory data analysis on Uber rides dataset to uncover trip patterns and distribution insights.",
    tech: "Python, Matplotlib, Seaborn",
    link: "https://github.com/MuditNautiyal-21/Uber-Drive-Analysis",
  },
  {
    title: "Wine Forecasting",
    description:
      "Time series forecasting on Rose and Sparkling wine data using decomposition and trend-based modeling.",
    tech: "Python, Time Series Analysis, Statsmodels",
    link: "https://github.com/MuditNautiyal-21",
  },
];

const Projects = () => {
  return (
    <section className="py-12 px-4 bg-white dark:bg-zinc-900" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-zinc-800 dark:text-white text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 my-2">
                {project.description}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
