<template>
    <section class="projects">
        <h2>Projects</h2>
        <p>Here are some projects I have worked on! These are projects I worked on during my computer science degree program.</p>

        <h2>Java Projects</h2>
        <div class="project-section">
          <h3>Java Frameworks</h3>
          <p>Java Frameworks exposed me to the popular development framework Spring Boot. I got to work with an existing repository of code to learn how Spring Boot works and develop my own sales oriented website using the Spring framework.</p>
          <p>Link: <a href="https://gitlab.com/wgu-gitlab-environment/student-repos/rrio137/d287-java-frameworks/-/tree/Working_Branch?ref_type=heads" target="_blank" rel="noopener noreferrer">GitLab repository</a></p>
        </div>
        <div class="project-section">
          <h3>Back-End Programming</h3>
          <p>Back-End Programming required me to create a Spring framework Java back-end for a web application with an existing Angular front-end codebase and MYSQL database. The project involved creating the back-end of a vacation booking website that used REST to ensure that purchases were added to an existing database. </p>
          <p>Link: <a href="https://gitlab.com/wgu-gitlab-environment/student-repos/rrio137/d288-back-end-programming/-/tree/working_brance?ref_type=heads" target="_blank" rel="noopener noreferrer">GitLab repository</a></p>
        </div>
        <div class="project-section">
          <h3>Advanced Java</h3>
          <p>Using an existing front-end Angular and back-end Java code repository I built and added resource bundles that enabled the web application to display different front-end components by using different threads. After completion I then packaged the project into a Docker image and ran it on a container.</p>
          <p>Link: <a href="https://gitlab.com/wgu-gitlab-environment/student-repos/rrio137/d387-advanced-java/-/tree/Working_Branch2?ref_type=heads" target="_blank" rel="noopener noreferrer">GitLab repository</a></p>
        </div>
        
        <h2>Python Projects</h2>
        <div class="project-section">
          <h3>Travelling Salesman</h3>
          <p>For my course in Data Structures and Algorithms II, I was given the task of bulding a code-based solution to a classic algorithm problem known as the Traveling Salesman Problem. Using hash tables, look-up functions, and learning algorithms, I fed a list of data into the IDE to ensure delivery of package objects to addresses under preset time constraints. A console log user interface provided functionalities such as package look-up, package delivery data, delivery status by a given time, and mileage traveled.</p>
          <p>Link: <a href="https://github.com/rrio137/TSP_program2" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        </div>
        <div class="project-section">
         <h3>Artificial Intelligence Optimization</h3>
          <p>Using an existing Excel file containing 10,000 rows of weather data, I fed the data into PyCharm using Pandas and used machine learning to determine the weights of features (weather and pollution factors) relevant to a target variable (health score index) for the purpose of generating prediction power insights. Using machine learning optimization techniques such as feature selection, hyperparameter tuning, I employed Random Forest Regression and Gradient Boosted Tree models to score the predictive weight of features on the target variable and predict a health index score based on selected features. </p>
          <p>Link: <a href="https://gitlab.com/wgu-gitlab-environment/student-repos/rrio137/d682-ai-optimization-for-computer-scientists/-/tree/working_branch?ref_type=heads" target="_blank" rel="noopener noreferrer">GitLab Repository</a></p> 
        </div>
        <div class="project-section">
          <h3>Advanced A.I.</h3>
          <p>Using an open source Excel file containing 10,000 rows of bird migration data, I employed Pandas to read and convert the data into a CSV file and employed data preprocessing techniques such as one-hot encoding, binary encoding, and cleaning to generate a working dataset. I built a Random Forest Regressor model to determine the extent to which the selected features in the dataset could accurately predict successful bird migration. After testing and printing the results of the model, I employed machine learning optimization techniques to see if success could be fine-tuned.</p>
          <p>Link: <a href="https://gitlab.com/wgu-gitlab-environment/student-repos/rrio137/d683-advanced-ai-and-ml/-/tree/Working_Branch?ref_type=heads" target="_blank" rel="noopener noreferrer">GitLab Repository</a></p>
        </div>
        
        <h2>Other Stuff</h2>
        <div class="project-section">
          <h3>Vue Project Personal Portfolio</h3>
          <p>This website itself is a project I've built myself using a Vue front-end to get some practice now that I'm finished at WGU! Thanks for visiting.</p>
        </div>

        <h2>Game Demonstration</h2>
        <div class="project">
          <h3>Tic-Tac-Toe (Vue Demo)</h3>
          <TicTacToe />
        </div>
    </section>
</template>

<script>
import TicTacToe from "@/TicTacToe.vue";

export default {
    name: 'ProjectsView',
    components: { TicTacToe }
};
</script>

<style scoped>
.projects {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.projects h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #764ba2;
}

.projects p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.project-section {
  border-left: 3px solid #764ba2;
  padding-left: 1.5rem;
  margin-bottom: 2rem;
}

.project-section h3 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #333;
}
</style>