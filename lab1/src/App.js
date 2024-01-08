import React from 'react';
import './App.css';

class ResumeSection extends React.Component {
  render() {
    return (
      <div className="resume-section">
        <h2>{this.props.title}</h2>
        {this.props.items.map((item, index) => (
          <div key={index} className="resume-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

function App() {
  const education = [
    { title: 'Bachelor of Science in Computer Science', description: 'University XYZ, 2020-2024' },
  ];

  const experience = [
    { title: 'Software Developer Intern', description: 'Company ABC, Summer 2023' },
  ];

  return (
    <div className="App">
      <h1>My Resume</h1>
      <ResumeSection title="Education" items={education} />
      <ResumeSection title="Experience" items={experience} />
    </div>
  );
}

export default App;
