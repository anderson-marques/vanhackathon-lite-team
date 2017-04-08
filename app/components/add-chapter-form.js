/**
 * Created by anderson on 07/04/17.
 */

import React from 'react';
import ChapterTitle from "./chapter-title";

class AddChapterForm extends React.Component {

    render() {
        return (
           <form action="#">
               <ChapterTitle/>
               <strong>Add Chapter Form</strong>
           </form>
        );
    }
}

export default AddChapterForm;