/**
 * Created by anderson on 07/04/17.
 */

import React from 'react';
import MyCourses from './courses-list';
import CreateCourseForm from './create-course-form';
import AddContentForm from "./add-content-form";
import AddChapterForm from "./add-chapter-form";
import Chapterslist from "./chapters-list";
import ContentsList from "./contents-list";
import CourseLibrary from "./course-library";

class Dashboard extends React.Component {
    render(){
        return <div>
                  <h1>My Dashboard</h1>
                  <MyCourses/>
                  <CreateCourseForm/>
                  <AddContentForm/>
                  <AddChapterForm/>
                  <Chapterslist/>
                  <ContentsList/>
                  <CourseLibrary/>
              </div>;
    }
}

export default Dashboard;