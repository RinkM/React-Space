import React, { useState } from "react";
// import form from "reactstrap"
import { ErrorMessage, Field, Formik, Form } from "formik";
import { Button } from "reactstrap";
import * as Yup from 'yup';
import { CardMakerArrow } from "./CardMakerArrow";


//TODO 
// look at button press and on click?
// salary search.   but it's based on ID number.  
// the love / money transcends options, with noone picked. 
// think about... 
// in what way would useEffect or useMemo help in this situation?
// Fix the style.



const FormRobotSearch = ({data})=>{
    const[gender, setGender] = useState("");
    const[salary, setSalary] = useState("0");
    let genderFilter;
    if (!gender) {genderFilter = data;
    } else {
        const salaryFilter = data.filter(element=> element.id>salary);    
        genderFilter = salaryFilter.filter(element=> element.gender===gender);
    }

    // const salaryFilter = data.filter(element=> element.id===salary );
    return (
        <div>
            <h2>What type of Automaton are you looking for?</h2>
            <h3>Choose a salary, gender, or both.</h3>

		<Formik 
			initialValues =  {{
                gender: "",
                salary: "",
		}}

		validationSchema = {Yup.object({
			gender: Yup.string().min(1, "Please choose a gender").required("Please choose a gender"),
            salary: Yup.string().min(1, "Please choose a salary").required("Please choose a salary"),
		})}

		onSubmit = {(values, {setSubmitting}) => {
			setTimeout(() => {
                setSalary(values.salary)
                setGender(values.gender)
				// alert(JSON.stringify(values, null, 2))
				setSubmitting(false);
				}, 400);
		}}
	>
            
		<Form className = "form-container">


            <label className = "FormLabel" htmlFor="salary">Salary </label>
			<Field name="salary" as="select" className = "form-select" type="text">
            <option value="">Choose...</option> 
            <option value="0">Love transcends wealth.</option>
            <option value="25">Poor</option>
			<option value="50">Rich</option>
			<option value="70">Mega Rich</option>
            <option value="99">The 1%</option>
            </Field>
            <ErrorMessage name  ="salary"/>

            <label className = "FormLabel" htmlFor="gender">Gender </label>
			<Field name="gender" as="select" className = "form-select" type="text">
            <option value="">Choose...</option>
            <option value="Male">Male</option>
			<option value="Female">Female</option>
			<option value="Agender">Agender</option>
            <option value="Genderfluid">Genderfluid</option>
            </Field>
            <ErrorMessage name = "gender"/>

			<Button color = "primary" type = "submit" >GoForIt</Button>
		    </Form>
	    </Formik>
        <CardMakerArrow data = {genderFilter}/>

    
    </div>
    );
};




export {FormRobotSearch}