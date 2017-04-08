/**
 * Created by anderson on 07/04/17.
 */

import React from 'react';
import ContentTitle from "./content-title";


class AddContentForm extends React.Component {

    render() {
        return (
           <form action="#">
               <ContentTitle/>
               <strong>Add Content Form</strong>
           </form>
        );
    }
}

export default AddContentForm;