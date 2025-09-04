<template>
    <section class="resume">
        <h2>Resume</h2>
        <p>You can view my abbreviated resume below or download it:</p>
        <a href="/rios_resume 3.0.pdf" download class="download-btn">Download Resume (PDF)</a>

        <h3>Professional Profile</h3>
        <p>Recent Computer Science graduate with a strong foundation in full stack development, algorithms, and collaborative software projects. 
          Proficient in Java, Python, and modern frameworks. Recognized for excellent research and writing skills, with a passion for creating 
          intuitive solutions and learning new technologies. A background in sales and customer service at USPS has equipped me for fast-paced, 
          systems-oriented tasks, and I’m known as the go-to person for managers seeking high-quality work and a quick learner ready to take 
          on new challenges.</p>
        
        <div class="resume-section">
          <h3>Certifications</h3>
          <ul>
            <li>ITIL 4 Foundation ITSM</li>
            <li>LE-1 Linux Essentials</li>
            <li>Java Developer Micro-Credential (WGU)</li>
            <li>Artificial Intelligence Optimization Developer Micro-Credential (WGU)</li>
          </ul>
        </div>
          
        <div class="resume-section">
          <h3>Education</h3>
          <ul>
            <li>Bachelor of Science Computer Science | Western Governors University | Salt Lake City, UT (June 2025)</li>
            <li>Master of Arts Theology | Fuller Theological Seminary | Pasadena, CA (May 2017)</li>
            <li>Bachelor of Arts Philosophy | Northwest University | Kirkland, WA (May 2013)</li>
          </ul>
        </div>

        <div class="resume-section">
          <h3>Work Experience</h3>
          <ul>
            <li>Sales and Services Clerk | United States Post Office | Marysville, WA (May 2016 - November 2023)</li>
            <li>test new text</li>
          </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "ResumeView",
};
</script>

<style scoped>
.resume {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.resume h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #764ba2;
}

.resume-section {
  border-left: 3px solid #764ba2;
  padding-left: 1.5rem;
  margin-bottom: 2rem;
}

.resume-section h3 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #333;
}

.resume-section ul {
  list-style-type: disc;
  margin-left: 1rem;
}

.resume-section li {
  margin-bottom: 0.5rem;
}

.resume p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.download-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  background-color: #764ba2;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.download-btn:hover {
  background-color: #5c3c86;
}
</style>