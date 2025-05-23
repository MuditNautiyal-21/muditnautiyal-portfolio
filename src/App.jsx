import React from "react";

export default function App() {
  return (
    <main className="bg-gray-950 text-white font-sans">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Mudit Nautiyal</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Aspiring Data Scientist | Machine Learning • Forecasting • Data Automation
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/MuditNautiyal-21" className="underline text-blue-400">GitHub</a>
          <a href="https://linkedin.com/in/mudit-nautiyal" className="underline text-blue-400">LinkedIn</a>
        </div>
      </section>

      {/* About Me */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">🧠 About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I’m a Data Science graduate student at the University at Buffalo with a foundation in enterprise-scale automation (HCL Technologies) and a passion for solving real-world problems using interpretable machine learning, forecasting, and automation.
        </p>
      </section>

      {/* Projects */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">🔥 Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">🍷 Wine Forecasting</h3>
            <p className="text-sm text-gray-300 mb-2">
              Forecasted wine sales using 7 models. Best RMSE: 9.64 with Holt-Winters.
            </p>
            <a href="https://github.com/MuditNautiyal-21/Wine-Forecasting-Project" className="text-blue-400 text-sm underline">View Project</a>
          </div>

          {/* Project Card 2 */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">🔐 Fraud Detection</h3>
            <p className="text-sm text-gray-300 mb-2">
              Detected fraud using Isolation Forest and Autoencoder. Includes full evaluation reports.
            </p>
            <a href="https://github.com/MuditNautiyal-21/Credit-Card-Fraud-Detection" className="text-blue-400 text-sm underline">View Project</a>
          </div>

          {/* Project Card 3 */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">📉 Tesla Stock Analysis</h3>
            <p className="text-sm text-gray-300 mb-2">
              SQL-integrated EDA, regression, and trend analysis on Tesla stock data.
            </p>
            <a href="https://github.com/MuditNautiyal-21/tesla-stock-analysis-project-python" className="text-blue-400 text-sm underline">View Project</a>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">🧰 Tech Stack</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300">
          <li>Python, R, SQL</li>
          <li>Pandas, NumPy, Scikit-learn</li>
          <li>TensorFlow, Keras</li>
          <li>Holt-Winters, ARIMA, SARIMA</li>
          <li>Jupyter, Streamlit (learning)</li>
          <li>AWS, Power BI, Tableau</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">📫 Contact</h2>
        <p className="text-gray-300 mb-2">📧 muditnautiyalusa@gmail.com</p>
        <p className="text-blue-400 underline">
          <a href="https://github.com/MuditNautiyal-21">GitHub</a> | <a href="https://linkedin.com/in/mudit-nautiyal">LinkedIn</a>
        </p>
      </section>
    </main>
  );
}
