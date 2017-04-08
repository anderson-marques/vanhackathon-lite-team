/**
 * Created by anderson on 07/04/17.
 */

import React from 'react';
import TinyMCE from 'react-tinymce';

class CreateCourseForm extends React.Component {
    handleEditorChange (e) {
        console.log('Content was updated:', e.target.getContent());
    }

    render() {
        return (
           <form action="#">
               <p>Name: <input type="text" name="fname" size="255"/></p>
               <p>Subtitle: <input type="text" name="fsubtitle" size="255"/></p>
               <p>Description:
               <TinyMCE
                   content="<p>This is the initial content of the editor</p>"
                   config={{
                       plugins: 'link image code',
                       menubar: false,
                       toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                   }}
                   onChange={this.handleEditorChange}
               />
               </p>
               <p>Subtitle:
               <input type="text" name="fsubtitle" size="255"/></p>
               <p>Price: <input type="number" min="0" max="99999999" maxLength="8" name="fprice" step="0.01"/></p>
               <p>Duration: <input type="number" min="0" max="99999" maxLength="5" name="fprice" step="0.1"/></p>
           </form>
        );
    }
}

export default CreateCourseForm;